const prisma = require("../config/prisma");
const calculateScore = require("../utils/scorecalculator");
const cache = require("../config/cache");

class RecommendationService {

    async recommend(profile) {
        const cacheKey = JSON.stringify(profile);

        const cachedRecommendations = cache.get(cacheKey);

        if (cachedRecommendations) {
            return cachedRecommendations;
        }

        
        const jobs = await prisma.job.findMany();

        const recommendations = jobs.map(job => {

            const result = calculateScore(profile, job);


            return {
                jobId: job.id,
                title: job.title,
                company: job.company,
                category: job.category,
                location: job.location,
                workMode: job.workMode,
                salary: job.salary,

                score: result.score,

                matchedSkills: result.matchedSkills,

                experienceMatched: result.experienceMatched,

                educationMatched: result.educationMatched,

                locationMatched: result.locationMatched,

                workModeMatched: result.workModeMatched,

                categoryMatched: result.categoryMatched
            };

        });

        const filteredRecommendations = recommendations
        .filter(job => job.score > 0)
        .sort((a, b) => b.score - a.score);

        const topRecommendations = filteredRecommendations
            .slice(0, 3)
            .map(job => ({...job,reason: this.generateReason(job)}));

        cache.set(cacheKey, topRecommendations);

        return topRecommendations;
    }

    async explain(itemId) {

    const job = await prisma.job.findUnique({
        where: {
            id: Number(itemId)
        }
    });

    if (!job) {
        return null;
    }

    return {
        jobId: job.id,
        title: job.title,
        company: job.company,
        category: job.category,
        eligibility: `Candidates should have ${job.minimumExperience}-${job.maximumExperience} years of experience, a ${job.minimumEducation} degree, and skills in ${job.skills.join(", ")}. This is a ${job.workMode} position located in ${job.location} offering a salary of ₹${job.salary.toLocaleString("en-IN")}.`
    };
}

    generateReason(job) {

        let reason = `This role is a good match because `;

        if (job.matchedSkills.length > 0) {
            reason += `your skills (${job.matchedSkills.join(", ")}) match the required technologies. `;
        }

        if (job.experienceMatched) {
            reason += `Your experience satisfies the required range. `;
        }

        if (job.educationMatched) {
            reason += `Your educational qualification matches the requirement. `;
        }

        if (job.locationMatched) {
            reason += `The location aligns with your preference. `;
        }

        if (job.workModeMatched) {
            reason += `The work mode matches your preference. `;
        }

        if (job.categoryMatched) {
            reason += `The job category matches your interest.`;
        }

        return reason;
    }

}

module.exports = new RecommendationService();
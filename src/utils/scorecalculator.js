const calculateScore = (profile, job) => {

    let score = 0;

    const matchedSkills = profile.skills.filter(skill =>
        job.skills.includes(skill)
    );
    if (matchedSkills.length === 0) {
    return {
        score: 0,
        matchedSkills: [],
        experienceMatched: false,
        educationMatched: false,
        workModeMatched: false,
        locationMatched: false,
        categoryMatched: false
    };
}

    score += matchedSkills.length * 15;

    const experienceMatched =
        profile.experience >= job.minimumExperience &&
        profile.experience <= job.maximumExperience;

    if (experienceMatched)
        score += 20;

    const educationMatched =
        profile.education === job.minimumEducation;

    if (educationMatched)
        score += 10;

    const workModeMatched =
        profile.preferredWorkMode === job.workMode;

    if (workModeMatched)
        score += 5;

    const locationMatched =
        profile.preferredLocation === job.location;

    if (locationMatched)
        score += 5;

    const categoryMatched =
        profile.preferredCategory === job.category;

    if (categoryMatched)
        score += 10;

    if (job.salary >= profile.minimumSalary)
        score += 5;

    return {
        score,
        matchedSkills,
        experienceMatched,
        educationMatched,
        workModeMatched,
        locationMatched,
        categoryMatched
    };

};

module.exports = calculateScore;
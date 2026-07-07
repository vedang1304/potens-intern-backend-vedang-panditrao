it("should return 400 when skills are missing", async () => {
    const response = await request(app)
        .post("/recommend")
        .send({
            experience: 2
        });

    expect(response.statusCode).toBe(400);
});

it("should return 400 when experience is missing", async () => {
    const response = await request(app)
        .post("/recommend")
        .send({
            skills: ["Java"]
        });

    expect(response.statusCode).toBe(400);
});

it("should return eligibility explanation", async () => {

    const response = await request(app)
        .get("/explain/1");

    expect(response.statusCode).toBe(200);

    expect(response.body.success).toBe(true);

});

it("should return top recommendations", async () => {

    const response = await request(app)
        .post("/recommend")
        .send({

            skills:["Java","Spring Boot","SQL"],

            experience:2,

            education:"BTech",

            preferredLocation:"Pune",

            preferredWorkMode:"HYBRID",

            preferredCategory:"Backend",

            minimumSalary:1000000

        });

    expect(response.statusCode).toBe(200);

    expect(response.body.recommendations.length).toBeGreaterThan(0);

});

it("should return empty recommendations", async () => {

    const response = await request(app)
        .post("/recommend")
        .send({

            skills:["COBOL"],

            experience:0,

            education:"Diploma",

            preferredLocation:"Delhi",

            preferredWorkMode:"REMOTE",

            preferredCategory:"Accounting",

            minimumSalary:5000000

        });

    expect(response.statusCode).toBe(200);

    expect(response.body.count).toBe(0);

});
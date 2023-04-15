const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
  test("Should return online.", async () => {
    const response = await request(app).get("/").send();

    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toContain("application/json");
    expect(response.body.status).toBe("online");
  });
});

import request from 'supertest';
import app from '../src/server'

describe('deliveries', () => {
    it('tests /deliveries endpoints', async() => {
        const response = await request(app).get("/deliveries");
        expect(response.body).toEqual(["Mars", "Moon", "Earth", "Mercury", "Venus", "Jupiter"]);
        expect(response.statusCode).toBe(200);
    });

    // Insert other tests below this line

    // Insert other tests above this line
});

import { app } from '../src/app';
import { connectDb, AppDataSource } from '../src/data-source';
import { Medicine } from '../src/medicine/entity';
import supertest from 'supertest';


beforeAll(async () => {
  await connectDb();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe('[medicinesRouter ⚡]', () => {
  const agent = supertest.agent(app);

  describe('GET /medicines/', () => {
    it('should responds with an array of medicines', async () => {
      const res = await agent.get('/api/v1/medicines');

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('medicines');
      expect(res.body.medicines).toBeInstanceOf(Array<Medicine>);
    });
  });
});

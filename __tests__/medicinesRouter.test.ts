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

  describe('GET /medicines/:id', () => {
    it('should responds with a medicine', async () => {
      const res = await agent.get('/api/v1/medicines/4');

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('medicine');
      expect(res.body.medicine).toHaveProperty('id');
      expect(res.body.medicine).toHaveProperty('photo');
      expect(res.body.medicine).toHaveProperty('title');
      expect(res.body.medicine).toHaveProperty('description');
      expect(res.body.medicine).toHaveProperty('shortDescription');
    });
  });

  describe('GET /medicines/search', () => {
    it('should fail if query-string is missing', async () => {
      const res = await agent.post('/api/v1/medicines/search').query({ title: undefined });

      expect(res.statusCode).toBe(400);
      expect(res.body.message).toBe('The query-string was not provided');
    });

    it('should return an array of medicines even if the input is empty', async () => {
      const res = await agent.post('/api/v1/medicines/search').query({ title: '' });

      expect(res.statusCode).toBe(400);
      expect(res.body.message).toBe('The query-string was not provided');
    });

    it('should return an array of medicines if the input length >= 1', async () => {
      const res = await agent.post('/api/v1/medicines/search').query({ title: 'a' });

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('medicines');
      expect(res.body.medicines).toBeInstanceOf(Array<Medicine>);
    });
  });
});

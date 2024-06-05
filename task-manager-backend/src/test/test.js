import { expect } from 'chai';
import request from 'supertest';
import { MongoClient } from 'mongodb';
import express from 'express';
import { start } from './app'; // Supongamos que el archivo donde está el código de tu aplicación se llama app.js

describe('API Tests', () => {
    let app, server, db, client;

    before(async () => {
        client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db("proyecto-arq");
        app = express();
        app.use(express.json());
        start(app, db);
        server = app.listen(8000);
    });

    after(async () => {
        await client.close();
        await server.close();
    });

    describe('GET /api/tareas', () => {
        it('should return an array of tasks', async () => {
            const res = await request(app).get('/api/tareas');
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array');
        });
    });

    describe('POST /api/tareas', () => {
        it('should create a new task', async () => {
            const tarea = { name: 'Task 1', description: 'Description of task 1' };
            const res = await request(app)
                .post('/api/tareas')
                .send(tarea);
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('name', tarea.name);
            expect(res.body).to.have.property('description', tarea.description);
        });
    });

    describe('DELETE /api/tareas/:tarea_id', () => {
        it('should delete an existing task', async () => {
            // Insert a task first
            const tarea = { name: 'Task to delete', description: 'Description of task to delete' };
            const insertRes = await db.collection('tareas').insertOne(tarea);
            const tarea_id = insertRes.insertedId;

            // Now delete the inserted task
            const res = await request(app).delete(`/api/tareas/${tarea_id}`);
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('message', 'Task deleted successfully');
        });

        it('should return a 404 error if task is not found', async () => {
            const res = await request(app).delete('/api/tareas/invalid_task_id');
            expect(res.status).to.equal(404);
            expect(res.body).to.have.property('error', 'Task not found');
        });
    });
});

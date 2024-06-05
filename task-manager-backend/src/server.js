import express from 'express';
import { tareas } from './temp-data';
import { MongoClient } from 'mongodb';

async function start() {
    const url = `mongodb+srv://user:user123@clusterarq.12rggto.mongodb.net/?retryWrites=true&w=majority&appName=Clusterarq`
    const client = new MongoClient(url);

    // try {
    //     await client.connect();
        
    //     console.log('Conexión a la base de datos exitosa');
    // } catch (error) {
    //     console.error('Error al conectar a la base de datos:', error);
    // }
    
    // const db = client.db("proyecto-arq");


    const app = express();
    app.use(express.json());

    app.get('/api/tareas', async (req, res) => {
        await client.connect();
        const db = client.db("proyecto-arq");
        const tareas = await db.collection("tareas").find({}).toArray();
        res.send(tareas);
    });

    app.post('/api/tareas', async (req, res) => {
        const nueva_tarea = req.body
        await client.connect();
        const db = client.db("proyecto-arq");
        const tareas = await db.collection("tareas").insertOne(nueva_tarea)
        res.send(nueva_tarea);
    }); 

    app.delete('/api/tareas/:tarea_id', async (req, res) => {

        const tarea_id = req.params.tarea_id;
        const db = client.db("proyecto-arq");
        try{
            const tareas = await db.collection("tareas").deleteOne({ id: tarea_id });
            res.send(tarea_id)
        }catch(error){
            console.error("Error al eliminar la tarea:", error);
        }
    });
    
    app.listen(8000, () => {
      console.log('Server is listening on port 8000')
    });
}

start();
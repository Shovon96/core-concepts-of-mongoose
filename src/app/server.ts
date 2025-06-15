import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';

let server: Server;
const PORT = 5000;

async function main() {
    try {
        await mongoose.connect('mongodb+srv://todoDB:bnadirWmlyyLIcle@cluster0.riywk8u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Connected to MongoDB using Mongoose!');
        server = app.listen(PORT, () => {
            console.log(`App is listen port on ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

main();
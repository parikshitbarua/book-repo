import express from 'express';
import bodyParser from "body-parser";
import {db} from "./app/models";
import {router} from "./app/routes/book.routes";
import dotenv from 'dotenv';

dotenv.config()

const PORT: number = Number(process.env.NODE_DOCKER_PORT);

const app = express();

app.use(bodyParser.json());

app.use('/api', router);

app.get("/", (req, res) => {
    res.json({ message: "Go to /api/books to view all the books listed in the library" });
});

db.sequelize.sync( { force: true } )
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

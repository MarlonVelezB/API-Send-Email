import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import emailRoutes from "./routes/emailRoutes";

dotenv.config(); // Para leer las variables de entorno

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(helmet());
app.use(cors());

// Rutas
app.use('/api', emailRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
/* eslint-disable prettier/prettier */
import express from "express";
import { categoriesRoutes } from "./router/categories.routes";
import { specificationsRoutes } from "./router/specifications.routes";


const app = express();

app.use(express.json());

app.use("/categories",categoriesRoutes);
app.use("/specifications",specificationsRoutes);

app.listen(3333, () => console.log("Servidor iniciando..."));

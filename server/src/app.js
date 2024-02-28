const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

// Rutas

// Middlewares para cliente
// Opciones avanzadas de configuración de CORS
const corsOptions = {
  origin: "http://localhost:5173", // Dominios autorizados
  methods: "*", // Métodos permitidos
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(express.json());

// Uso de rutas
const startServer = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGODB_URL}/${process.env.DATABASE}`
    );
    console.log("Connection to database");
    app.listen(3000, () =>
      console.log("Servidor en ejecución en el puerto 3000")
    );
  } catch (err) {
    console.log("CONECTION ERROOOOR", err);
  }
};

startServer();

import mongoose from "mongoose";

const conn = {
  isConnected: false,
};

export async function connectDB() {
  if (conn.isConnected) return;

  try {
    const db = await mongoose.connect(
      "mongodb+srv://test:test@cluster0.hubxdle.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true ,
        useUnifiedTopology: true,
      }
    );

    // Actualizamos el estado de conexión en el objeto 'conn'
    conn.isConnected = db.connection.readyState;

    // Obtén el nombre de la base de datos
    const dbName = db.connections[0].name;

    // Manejamos eventos adicionales aquí si es necesario
    db.connection.on("connected", () => {
      console.log(`mongoose is connected to database: ${dbName}`);
      conn.isConnected = db.connection.readyState;
    });

    db.connection.on("error", (err) => {
      console.error("mongoose connection error:", err);
    });

    db.connection.on("disconnected", () => {
      console.log("mongoose is disconnected");
      conn.isConnected = false;
    });

    console.log(`MongoDB connected successfully to database: ${dbName}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

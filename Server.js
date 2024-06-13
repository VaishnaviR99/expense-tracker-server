const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./Routes/auth.js");
const transactionRoutes = require("./Routes/transaction.js");
const goalRoutes = require("./Routes/goal.js");

const app = express();

app.use(bodyParser.json());
app.use(cors());



// Connect to MongoDB using the latest connection options
const uri =
  "mongodb+srv://ralegaonkarvaishnavi:qsVQftDFGRL3zcI6@cluster0.izqlg4l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));
  app.get('/', (req, res) => {
    res.send('Welcome to your API!');
  });
app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/goals", goalRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//qsVQftDFGRL3zcI6
//ralegaonkarvaishnavi

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10; // Número de rondas de sal para bcrypt
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://alan:alan123@cluster0.cmtzipr.mongodb.net/Usuarios", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await EmployeeModel.findOne({ email: email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        res.json({ success: true, userName: user.name });
      } else {
        res.json({ success: false, message: "Password incorrect" });
      }
    } else {
      res.json({ success: false, message: "Account does not exist" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashedPassword;
    const employee = await EmployeeModel.create(req.body);
    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal Server Error");
  }
});

app.post('/admin', (req, res) => {
  const adminCredentials = {
    adminEmail: 'admin@mail.com',
    adminPassword: 'admin123',
  };

  const { adminEmail, adminPassword } = req.body;
  console.log('Received credentials:', adminEmail, adminPassword);

  if (adminEmail === adminCredentials.adminEmail && adminPassword === adminCredentials.adminPassword) {
    res.json({ message: 'Success' });
  } else {
    res.json({ message: 'Login failed. Please check your credentials.' });
  }
});


app.listen(process.env.PORT || 3001, () => {
  console.log("Servidor en ejecución en el puerto 3001");
});

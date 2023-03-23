const express = require("express");
const sequelize = require('../config/connection');


// DATA
const todos = require("./todos.json");

// app/port
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true}));
app.use(express.json());


import axios from 'axios';
require("dotenv").config();

const instance = axios.create({
  baseURL: process.env.DB_ADDRESS
});

export default instance;
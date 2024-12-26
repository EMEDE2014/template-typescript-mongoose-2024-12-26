import express from 'express';
import mongoose from 'mongoose';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    this.database();
  }

  private database() {
    mongoose.connect('');
  }

  private middlewares() {
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(express.json());
  }

  private routes() {}
}

export default new App().express;

import express from 'express';
import CardioController from '../controllers/cardioController.js'; 

class CardioRoutes {
  constructor() {
    this.router = express.Router(); 
    this.initializeRoutes(); 
  }

  initializeRoutes() {
    this.router.get("/cardios", async (req, res) => {
      await CardioController.getAllCardio(req, res);
    });

    this.router.post("/cardio", async (req, res) => {
      await CardioController.addCardio(req, res);
    });
 
    this.router.delete("/cardios", async (req, res) => {
      await CardioController.clearCardio(req, res);
    });
  }

  getRouter() {
    return this.router;
  }
}

export default new CardioRoutes().getRouter();
import ModelFactory from "../model/ModelFactory.js";

class CardioController {
  constructor() {
    ModelFactory.getModel().then((model) => {
      this.model = model; 
    });
  }

  async getAllCardio(req, res) {
      const cardio = await this.model.read();
      res.json({ cardio });
  }

  async addCardio(req, res) {
    try {
      if (!req.body || !req.body.cardio || !req.body.duration) {
        return res.status(400).json({ error: "Cardio description is required." });
      }

      const workout = await this.model.create(req.body);

      console.log(`New Cardio: ${cardio.id} - ${cardio.cardio}`);

      return res.status(201).json(workout);
    } catch (error) {
      console.error("Error adding cardio:", error);
      return res
        .status(500)
        .json({ error: "Failed to add cardio. Please try again." });
  }
  }

   async clearCardio(req, res) {
    await this.model.delete();
    res.json(await this.model.read());
  }
}

export default new CardioController();
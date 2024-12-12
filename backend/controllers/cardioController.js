import ModelFactory from "../models/MemoryFactory.js";

class CardioController {
  constructor() {
    ModelFactory.getModel().then((model) => {
      this.model = model; 
    });
  }

  // get all cardio sessions 
  async getAllCardio(req, res) {
      const cardio = await this.model.read();
      res.json({ cardio });
  }

  // add a new cardio session 
  async addCardio(req, res) {
    try {
      if (!req.body || !req.body.cardio || !req.body.duration) {
        return res.status(400).json({ error: "Cardio description is required." });
      }

      // Create the new cardio object with a unique ID
      const cardio = await this.model.create(req.body);

      console.log(`New Cardio: ${cardio.id} - ${cardio.cardio}`);

      // Send back the created cardio session as the response
      return res.status(201).json(cardio);
    } catch (error) {
      // Log any unexpected errors and send a server error response
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
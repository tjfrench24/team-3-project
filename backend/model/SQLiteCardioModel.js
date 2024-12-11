import { Sequelize, DataTypes } from "sequelize";

// create a new Sequelize instance 
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "databse.sqlite", 
});

// define the Cardio model 
const Cardio = sequelize.define("Cardio", {
  id: {
    // define id for the cardio session 
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  cardio: {
    // make cardio a string and make it required 
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    // make duration a float and make it required 
    type: DataTypes.FLOAT, 
    allowNull: false,
  },
  distance: {
    // make distance a float and make it optional, ex. jump rope would not need distance 
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

class _SQLiteCardioModel {
  constructor() {}

  async init(fresh = false) {
    await sequelize.authenticate();
    await sequelize.sync({ force: fresh });

    // initialize with 
    if (fresh) {
      await this.create({ activity: "Jog", duration: 30, distance: 30.0 });
      await this.create({ activity: "jump rope ", duration: 10.5});
    }
  }

  // create a new cardio session 
  async create(cardio) {
    return await Cardio.create(cardio);
  }

  // read cardio session by id   ﻿
  async read(id = null) {
    if (id) {
      return await Cardio.findByPk(id);
    }
    return await Cardio.findAll();
  }

  // update a cardio session by id 
  async update(cardio) {
    const cardioToUpdate = await Cardio.findByPk(cardio.cardioid);
    if (!cardioToUpdate) {
      return null;
    }
    await cardioToUpdate.update(cardio);
    return cardioToUpdate;
  }

  // delete a cardio session by id 
  async delete(cardio = null) {
    if (cardio === null) {
      await Cardio.destroy({ truncate: true });
      return;
    }
    await Cardio.destroy({ where: { cardioid: cardio.cardioid } });
    return cardio;
  }
}

const SQLiteCardioModel = new _SQLiteCardioModel();
export default SQLiteCardioModel;
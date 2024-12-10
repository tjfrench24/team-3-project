import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "databse.sqlite", 
});

const Cardio = sequelize.define("Cardio", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  cardio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
  distance: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

class _SQLiteCardioModel {
  constructor() {}

  async init(fresh = false) {
    await sequelize.authenticate();
    await sequelize.sync({ force: fresh });

    if (fresh) {
      await this.create({ activity: "Running", duration: 30, distance: 5 });
      await this.create({ activity: "Cycling", duration: 45, distance: 15 });
    }
  }

  async create(cardio) {
    return await Cardio.create(cardio);
  }

  async read(id = null) {
    if (id) {
      return await Cardio.findByPk(id);
    }
    return await Cardio.findAll();
  }

  async update(cardio) {
    const cardioToUpdate = await Cardio.findByPk(cardio.cardioid);
    if (!cardioToUpdate) {
      return null;
    }
    await cardioToUpdate.update(cardio);
    return cardioToUpdate;
  }

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
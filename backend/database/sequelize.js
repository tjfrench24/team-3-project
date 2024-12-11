import { Sequelize } from "sequelize";

// create sequelize instance
const sequelize = new Sequelize({ 
  dialect: 'sqlite',      
  storage: './database.sqlite', 
});

export default sequelize;  
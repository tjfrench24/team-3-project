import { Sequelize } from "sequelize";
import { ModelFactory } from "./ModelFactory"

export function seed(database) {
  const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite", 
  });
};
import InMemoryWorkoutModel from "./InMemoryWorkoutModel.js";
import InMemoryCardioModel from "./InMemoryCardioModel.js";
import SQLiteWorkoutModel from "./SQLiteWorkoutModel.js";
import SQLiteCardioModel from "./SQLiteCardioModel.js";

class _ModelFactory {
  async getModel(model = "sqlite", type = "workout") {
    if (type === "workout") {
      if (model === "sqlite") {
        return SQLiteWorkoutModel;  
      } else if (model === "sqlite-fresh") {
        await SQLiteWorkoutModel.init(true);  
        return SQLiteWorkoutModel;
      } else {
        return InMemoryWorkoutModel; 
      }
    } else if (type === "cardio") {
      if (model === "sqlite") {
        return SQLiteCardioModel; 
      } else if (model === "sqlite-fresh") {
        await SQLiteCardioModel.init(true);  
        return SQLiteCardioModel;
      } else {
        return InMemoryCardioModel;  
      }
    }
  }
}

const ModelFactory = new _ModelFactory();
export default ModelFactory;
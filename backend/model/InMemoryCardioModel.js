class _InMemoryCardioModel {
    static cardioid = 1;
    constructor() {
      this.cardios = [];
    }
  
    // create a new cardio session and return it 
    async create(cardio) {
      cardio.id = _InMemoryCardioModel.cardioid++;
      this.cardios.push(cardio);
      return cardio;
    }
  
    // read a cardio session and return it 
    async read(id = null) {
      if (id) {
        return this.cardios.find((cardio) => cardio.id === id);
      }
      return this.cardios;
    }
  
    // update a cardio session and return it 
    async update(cardio) {
      const index = this.cardios.findIndex((c) => c.id === cardio.id);
      this.cardios[index] = cardio;
      return cardio;
    }


    // delete a cardio session 
    async delete(cardio = null) {
      if (cardio === null) {
        this.cardios = [];
        return;
      }
  
      const index = this.cardios.findIndex((c) => c.id === cardio.id);
      this.cardios.splice(index, 1);
      return cardio;
    }
  }

// initialize with cardio examples 
// InMemoryCardioModel.create({ cardio: "Jog", duration: null, distance: null });
// InMemoryCardioModel.create({ cardio: "jump rope", duration: null, distance: null });
  
const InMemoryCardioModel = new _InMemoryCardioModel();
export default InMemoryCardioModel;
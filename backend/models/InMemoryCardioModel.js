class _InMemoryCardioModel {
    static cardioid = 1;
    constructor() {
      this.cardios = [];
    }
  
    async create(cardio) {
      cardio.id = _InMemoryCardioModel.cardioid++;
      this.cardios.push(cardio);
      return cardio;
    }
  
    async read(id = null) {
      if (id) {
        return this.cardios.find((cardio) => cardio.id === id);
      }
      return this.cardios;
    }
  
    async update(cardio) {
      const index = this.cardios.findIndex((c) => c.id === cardio.id);
      this.cardios[index] = cardio;
      return cardio;
    }
  
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

InMemoryCardioModel.create({ cardio: "Jog", duration: null, distance: null });
InMemoryTaskModel.create({ cardio: "jump rope", duration: null, distance: null });
  
  const InMemoryCardioModel = new _InMemoryCardioModel();
  export default InMemoryCardioModel;
// function to make sure cardio entry is valid 
const validateLogCardio = (req, res, next) => {
    const {cardio, duration, distance} = req.body;
    const errors = [];
  
    // require cardio name 
    if (cardio === '') {
      errors.push({msg: 'Cardio name is required'});
    }
    // duration entry must be a positive float
    if (!Number.isFloat(duration) || duration < 0.1) {
      errors.push({msg: 'Duration be a positive decimal number'});
    }
    // distance entry (if necessary) must be a positive float 
    if (distance) {
        if (!Number.isFloat(distance) || distance < 0.1) {
            errors.push({msg: 'Distance must be a positive decimal number'});
        }
    }
    // return errors 
    if (errors.length > 0) {
        // 400 indicates input error 
      return res.status(400).json({errors});
    }
    // if there are no errors, go to the next part of the validation 
    next();
  };
  
  // function to make sure the id entry is a positive integer to delete a cardio session from the database
  const validateDeleteCardio = (req, res, next) => {
    const {id} = req.params;
    const errors = [];
    
    // cardio id must be a positive integer 
    if (!Number.isInteger(parseInt(id)) || parseInt(id) < 1) {
      errors.push({msg: 'Cardio ID must be a positive integer'});
    }
    // return the errors 
    if (errors.length > 0) {
        // 400 indicates input error 
      return res.status(400).json({errors});
    }
    // if no errors, go to the next part of the validation 
    next();
  };
  
  module.exports = {
    validateLogCardio,
    validateDeleteCardio
  };
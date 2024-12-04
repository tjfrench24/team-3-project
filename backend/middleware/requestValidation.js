// function to make sure workout entry is valid 
const validateLogWorkout = (req, res, next) => {
    const {workout, weight, sets, reps} = req.body;
    const errors = [];
  
    // require workout name 
    if (workout !== '') {
      errors.push({msg: 'Workout name is required'});
    }
    // weight must be an integer, can be 0
    if (!Number.isInteger(weight)) {
      errors.push({msg: 'Workout weight must be an integer. If workout is unweighted, enter "0"'});
    }
    // sets entry must be a positive integer 
    if (!Number.isInteger(sets) || sets < 1) {
      errors.push({msg: 'Number of of sets must be a positive integer'});
    }
    // reps entry must be a positive integer 
    if (!Number.isInteger(reps) || reps < 1) {
      errors.push({msg: 'Number of reps must be a positive integer'});
    }
    // return errors 
    if (errors.length > 0) {
        // 400 indicates input error 
      return res.status(400).json({errors});
    }
    // if there are no errors, go to the next part of the validation 
    next();
  };
  
  // function to make sure the id entry is a positive integer to delete a workout from the database
  const validateDeleteWorkout = (req, res, next) => {
    const {id} = req.params;
    const errors = [];
    
    // workout id must be a positive integer 
    if (!Number.isInteger(parseInt(id)) || parseInt(id) < 1) {
      errors.push({msg: 'Workout ID must be a positive integer'});
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
    validateLogWorkout,
    validateDeleteWorkout
  };
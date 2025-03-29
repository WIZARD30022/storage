const mongoose = require('mongoose')

const employeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    IsManager: Boolean
  });

  const Employes = mongoose.model( 'Employes', employeSchema);
module.exports = Employes;
//   const silence = new Employes({ name: 'Silence' });
//   console.log(silence.name);
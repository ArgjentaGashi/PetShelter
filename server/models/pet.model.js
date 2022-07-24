const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const PetSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'Pet name is required'],
      minlength: [3, 'The name should be at least 3 characters long!'],
    },
    type: {
        type: String,
        required: [true, 'Pet type is required'],
        minlength: [3, 'The pet type should be at least 3 characters long!'],
    },
    desc: {
        type: String,
        required: [true, 'Pet description is required'],
        minlength: [3, 'The description should be at least 3 characters long!'],
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    }, 
  },
  {
    timestamps: true,
  },
);
PetSchema.plugin(uniqueValidator)
const Pet = mongoose.model('pet', PetSchema);
module.exports = Pet;
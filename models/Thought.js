const { Schema, model } = require('mongoose');


// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      Required: true,
      minLength: 1,
      maxLength: 280,

    },
    createdAt: {
      type: Date,
      default: Date.now,
      //add getter method
    },
    username: {
      type: String,
      Required: true,
    },
  // add reactions
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);



// Initialize our Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;

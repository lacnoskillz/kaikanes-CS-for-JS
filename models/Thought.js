const { Schema, model, Types } = require('mongoose');
// Schema to create reaction model that will be used to fill reactions in thought model/schema
const reaction = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),

    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //getter method to format the timestamp on query
      get: (date) => date.toLocaleDateString()
    },
  }
);

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,

    },
    createdAt: {
      type: Date,
      default: Date.now,
      //getter method to format the timestamp on query
      get: (date) => date.toLocaleDateString()
    },
    username: {
      type: String,
      required: true,
      //ref user?
    },
    // reactions array using the above reaction schema
    reactions: [reaction],
  },
    {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }

);

//virtual property that gets amount of reactions per thought
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});




// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;

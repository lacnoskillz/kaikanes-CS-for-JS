const { Schema, model, Types } = require('mongoose');

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
      get: (date) => date.toLocaleDateString()
      //add getter method to format the timestamp on query
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
      //add getter method to format the timestamp on query
      get: (date) => date.toLocaleDateString()
    },
    username: {
      type: String,
      required: true,
      //ref user?
    },
    // reactions?
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

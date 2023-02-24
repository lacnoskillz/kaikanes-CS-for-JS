const { Schema, model } = require('mongoose');

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
      Required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //add getter method to format the timestamp on query
    },
  }
);

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
      //add getter method to format the timestamp on query
    },
    username: {
      type: String,
      Required: true,
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

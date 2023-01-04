const { Schema, Types, model } = require('mongoose');
// const mongoose =require('mongoose')
const reactionSchema = require('./Reaction');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    
    },
    thoughtText: {
      type: String,
      required: true,
      minLength: 1, 
      maxLength: 280,
    },
    
    username: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      minLength: 15,
      maxLength: 500,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    // reaction: String,
    // reactionId: Boolean,
    reactions: [{
      type: Schema.Types.ObjectId,
      ref: 'Reaction'
    }],
  },
  {
    toJSON: {
      virtuals: true,
    },
  
  },

);


// const Reaction = mongoose.model('Reaction', thoughtSchema);
//   Reaction.create ([{
//     reactionId: {
//       type: Schema.Types.ObjectId,
//       default: () => new Types.ObjectId(),
//     },
//     reactionBody: {
//       type: String,
//       required: true,
//       maxlength: 280,
//     },
//     username: {
//       type: String,
//       required: true,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//     },


    
    
//   }
// ]);



// Create a virtual property `responses` that gets the amount of response per video
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Video model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;

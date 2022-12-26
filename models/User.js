const { Schema, model } = require('mongoose');
require('mongoose-type-email');
const Thought = require ('./Thought');
// Schema to create User model
const userSchema = new Schema(
  {
      username: {
      type:  String, 
      unique: true,
      required: true,
      trim: true
     },
     email: { 
      type: String,
      required: true,
      unique:true, 
      required: "email adderess is required",
      emails: [{ type: mongoose.SchemaTypes.Email }]
     },
     
      
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
      {
        type: Schema.Types.ObjectId,
        ref: 'friends'
      }
    ],
  
   
  
  
  
  
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
 
);

// Create a virtual property `fullName` that gets and sets the user's full name
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.responses.length;
  });
// Initialize our User model
const User = model('user', userSchema);

module.exports = User;

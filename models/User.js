const { Schema, model } = require('mongoose');
var mongoose = require('mongoose');
// require('mongoose-type-email');
const thoughtSchema = require ('./Thought');
const friendSchema = require ('./Friends');
// Schema to create User model

const userSchema = new Schema({
     
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
      required: "email address is required",
      // email: mongoose.SchemaTypes.Email, 
      
     },
        
    thoughts: [{
     type: Schema.Types.ObjectId,
     ref: 'thought'
    
    }    ],

     friends: [friendSchema],
  
   
  
},
  
  
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    {
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
    return this.friends.length;
  });
// Initialize our User model
const User = model('user', userSchema);

module.exports = User;

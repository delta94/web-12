const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserModel = new Schema ({
    username: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String},
    email: {type: String},
    avatar: {type: String},
    active: {type: Boolean, default: true },
});

UserModel.pre("save", function(next) {
    console.log(this.passwordChange)
    

    if(this.passwordChange || !this._v) {
        const saltRounds = 10;
        const plainPassword = this.passwordChange || this.password;
        bcrypt.genSalt(saltRounds)
        .then(salt => bcrypt.hash(plainPassword, salt))
        .then(hashPassword => {
            this.password = hashPassword;
            next();
        })
        .catch(err => next(err));
    } else {
        next();
    }
    
    
})

module.exports = mongoose.model("Users", UserModel);
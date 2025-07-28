import {Schema, model, models} from 'mongoose';

const UserSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:4
    }
})
export const User = models.User || model("User", UserSchema);//without models.User gives error "OverwriteModelError: Cannot overwrite `User` model once compiled."

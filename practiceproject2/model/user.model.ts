import mongoose, { ObjectId } from 'mongoose'

interface Iuser {
    _id?: mongoose.Types.ObjectId,
    name?: string,
    image?: string,
    email: string,
    password: string,
    createdAt?: Date,
    updatedAt?: Date,
    userid: number
}


const userSchema = new mongoose.Schema<Iuser>({

    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        required: true
    },

    image:{
        type: String
    }

},{timestamps:true})

const User = mongoose.model('User', userSchema)

// Note : Will work on it 

export default User
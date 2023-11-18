import {Schema, model, models} from 'mongoose'

const taskSchema = new Schema(
    {
     name:{
        type: String,
        required: [true, 'el nombre es necesario'],
        trim: true,
     },

     email:{
        type: String,
        required: [false],
        trim: true,
     },

     phone:{
            type: String,
            required: [true, 'el numero es necesario'],
            trim: true,

        },
        base:{
         type: String,
         trim: true,
        }
        
     },
     
    {timestamps:true,}
)

export default models.Tasks || model('Tasks', taskSchema)
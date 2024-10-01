import mongoose, { Schema, Document } from 'mongoose';

export interface IStudent extends Document {
    _id: mongoose.Types.ObjectId;
    studentId: string;
    firstName: string;
    lastName: string;
    email: string;
    course: string;
}

const studentSchema: Schema = new Schema({
    studentId: { type: String, required: true },    
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    course: { type: String, required: true }
});


export const Student = mongoose.model<IStudent>('Student', studentSchema);

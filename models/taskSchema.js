const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
    taskTitle: { type: String, required: [true, 'Missing task title'] },
    dueDate: { type: Date },
    createdAt: { type: Date, default: Date.now },
    completed: { type: Boolean, default: false },
});

module.exports = taskSchema;

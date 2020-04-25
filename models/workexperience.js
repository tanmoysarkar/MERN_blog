const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const WorkexperienceSchema = new Schema({
    company_name: {
        type: String,
        required: true
    },
    work_designation: {
        type: String,
        required: true
    },
    work_note: {
        type: String,
        required: true
    },
    work_start_date: {
        type: Date,
        required: true
    },
    work_end_date: {
        type: Date,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Workexperience = mongoose.model('workexperience', WorkexperienceSchema);
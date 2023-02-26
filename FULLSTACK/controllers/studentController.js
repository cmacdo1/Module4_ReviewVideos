const Student = require('../models/studentModel');

exports.getData = async (req, res) => {
    //get data from database
    const students = await Student.find();
    res.status(200).json({
        status: 'success',
        results: students.length,
        data: {
            students
        }
    });
};
exports.getDataById = async (req, res) => {
    //get data from database
    const {id} = req.params;
    const students = await Student.find({_id: id});
    res.status(200).json({
        status: 'success',
        results: students.length,
        data: {
            students
        }
    });
};
exports.postData = async (req, res) => {
    const newStudent = req.body;
    const student = await Student.create(newStudent);
    // const student = new Student(newStudent);
    // student.save();
    
    res.status(201).json({
        status: 'success',
        data: student
    });
};
exports.updateDataById = (req, res) => res.send('Hello World! From Student PUT');
exports.patchDataById = (req, res) => res.send('Hello World! From Student PATCH');
exports.deleteDataById = (req, res) => res.send('Hello World! From Student DELETE');
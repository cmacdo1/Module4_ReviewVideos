//routes
//app.get('/', (req, res) => res.send('Hello World! This is my first node app'));
//app.get('/student/grade', (req, res) => res.send('Hello World! From Student Grades'));

const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.route('/')
    .get(studentController.getData)
    .post(studentController.postData);

router.route('/:id')
    .get(studentController.getDataById)
    .patch(studentController.patchDataById)
    .put(studentController.updateDataById)
    .delete(studentController.deleteDataById);

module.exports = router;
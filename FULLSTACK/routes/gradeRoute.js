//routes
//app.get('/', (req, res) => res.send('Hello World! This is my first node app'));
//app.get('/student/grade', (req, res) => res.send('Hello World! From Student Grades'));

const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradeController');

router.get('/', gradeController.getData);
router.post('/', gradeController.postData);
router.put('/', gradeController.updateData);
router.delete('/', gradeController.deleteData);

module.exports = router;
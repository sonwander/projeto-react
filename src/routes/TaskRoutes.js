const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');

router.post('/',TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
router.get('/:id', TaskController.show);
router.delete('/:id', TaskController.delete);
router.put('/:id/:done', TaskController.done);

router.get('/filter/all/:macddress',  TaskController.all);
router.get('/filter/late/:macddress',  TaskController.late);
router.get('/filter/today/:macddress',  TaskController.today);
router.get('/filter/week/:macddress',  TaskController.week);
router.get('/filter/month/:macddress',  TaskController.month);
router.get('/filter/year/:macddress',  TaskController.year);

module.exports = router;
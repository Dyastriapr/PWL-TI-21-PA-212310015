const express = require('express');
const router = express.Router();
const userController = require('../controllers/UsersController');

router.get('/', userController.index);
router.get('/fetch-all', userController.getAll);
router.get('/:id', userController.getByID);
router.post('/create', userController.createData);
router.put('/update', userController.updatedData);
router.delete('/delete', userController.deleteData);

module.exports = router;

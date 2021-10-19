const Router = require('express');
const router = new Router();
const userController = require('../controllers/user.controller');
const titleController = require('../controllers/title.controller');
const subtitleController = require('../controllers/subtitle.controller');
const pageController = require('../controllers/page.controller');
const personalRoomController = require('../controllers/personal_room.controller')

//User controllers
router.post('/user', userController.createUser);
router.get('/user', userController.getUser);
router.get('/user/:id', userController.oneUser);
router.put('/user', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

//Personal room
router.get('personal/:id', userController.personalRoom);

//Title controllers
router.post('/title', titleController.createTitle);
router.get('/title', titleController.getTitle);
router.get('/title/:id', titleController.oneTitle);
router.put('/title', titleController.updateTitle);
router.delete('/title/:id', titleController.deleteTitle);

//Subtitle controllers
router.post('/subtitle',subtitleController.createSubtitle);
router.get('/subtitle',subtitleController.getSubtitle);
router.get('/subtitle/:id',subtitleController.oneSubtitle);
router.put('/subtitle',subtitleController.updateSubtitle);
router.delete('/subtitle/:id',subtitleController.deleteSubtitle);

//Page controllers
router.post('/page',pageController.createPage);
router.get('/page', pageController.getPage);
router.get('/page/:id', pageController.onePage);
router.put('/page', pageController.updatePage);
router.delete('/page/:id', pageController.deletePage);

//PRoom controllers
router.post('/personal', personalRoomController.createPRoom);
router.get('/personal',personalRoomController.getPRoom);
router.get('/personal/:id', personalRoomController.onePRoom);
router.put('/personal', personalRoomController.updatePRoom);
router.delete('/personal/:id', personalRoomController.deletePRoom);

module.exports = router;
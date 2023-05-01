const {Router} = require("express");
const { getToDo, addToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");
//destructureing the router from express

const router=Router()

router.get('/',getToDo)
router.post('/save',addToDo) 
router.post('/update',updateToDo)
router.post('/delete',deleteToDo)


module.exports = router;
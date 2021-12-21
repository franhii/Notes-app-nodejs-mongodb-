import { Router } from "express";
import { createTask, deleteTask, editTask, renderTaskEdit, renderTasks, taskToggleDone } from "../controllers/taskController";


const router = Router();

//RENDER LIST TASKS
router.get("/", renderTasks);

//CREATE A TASK
router.post("/task/add",createTask);

//RENDER A TASK TO EDIT.
router.get("/tasks/:id/edit", renderTaskEdit);


//UPDATE A TASK
router.post("/tasks/:id/edit",editTask);

//DELETE
router.get("/tasks/:id/delete",deleteTask);

//MODIFY STATUS OF DONE/UNDONE
router.get("/tasks/:id/toggleDone",taskToggleDone);

//ABOUT PROFILE
router.get("/about", (req, res) => {
  res.render("about");
});
export default router;

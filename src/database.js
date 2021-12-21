import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/tasks-db-app', {
})
.then(db=>console.log("DB is connected"))
.catch(err=>console.log(err));

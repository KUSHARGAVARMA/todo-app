import { useState } from "react";
import InputBox from "../inputbox/InputBox";
import ListItems from "../listitems/ListItems";
import "./todo.css"
const Todo = () => {

    const [tasks, setTasks] = useState([]);
    

    const getTask = (currentTask) => {
        const newTasks=[...tasks];
        newTasks.push(
            {
                id:Date.now(),
                faded: "",
                taskCompletedAt:null,
                taskName: currentTask

            }
        );
        
        setTasks(newTasks);
        
    }
    // if you want to delete the task when completed use this code 
    // const filterData = (event)=>{
    //     console.log("yes")
    //     console.log(event.target.id);
    //     //getting the target id or task id here 
    //     // fade that particular id 
    //     const remainTasks=tasks.map((task)=>{
    //         return task.id !== parseInt(event.target.id)

    //     });
    //     setTasks(remainTasks);

    // }

    const completedAt = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = totalSeconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedHours}Hr : ${formattedMinutes}Min : ${formattedSeconds}Sec`;
     };


        const filterData = (event)=>{
        console.log("yes")
        console.log(event.target.id);
        //getting the target id or task id here 
        // fade that particular id 
        const remainTasks=tasks.map((task)=>{
            if(task.id == parseInt(event.target.id)){
                task.faded="faded";
                var timeElaspsed=(Date.now()-parseInt(task.id))/1000;
                task.taskCompletedAt=completedAt(timeElaspsed);
                console.log(task.taskCompletedAt);

            }
            return task;

        });

        setTasks(remainTasks);
    }

    return (
        <>
        
        <div className="header">
          <h1 className="todo-heading">Task-Tracker</h1>  
          </div>
          <div className="component-container">
            <InputBox parentGetTask={ getTask } className="inputBox"/>
            <ListItems tasks={tasks} filterData={filterData} className="listItems" />
          </div>
        </>
    )
}


export default Todo;

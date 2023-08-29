import { useState } from "react";
import InputBox from "../inputbox/InputBox";
import ListItems from "../listitems/ListItems";

const Todo = () => {

    const [tasks, setTasks] = useState([]);
    

    const getTask = (currentTask) => {
        const newTasks=[...tasks];
        newTasks.push(
            {
                id:Date.now(),
                taskName: currentTask
            }
        );
        
        setTasks(newTasks);
        
    }
    const filterData = (event)=>{
        console.log("yes")
        console.log(event.target.id);
        const remainTasks=tasks.filter((task)=>{
            return task.id !== parseInt(event.target.id)

        });
        setTasks(remainTasks);

    }

    return (
        <>
          <h1 className="todo-heading">Todo APP</h1>  
            <InputBox parentGetTask={ getTask }/>
            <ListItems tasks={tasks} filterData={filterData} />
        </>
    )
}

export default Todo;
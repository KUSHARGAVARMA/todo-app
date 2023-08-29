import { useState } from "react";

const InputBox = (props) => {
    const {parentGetTask} = props;
    const [val, setVal] = useState('');

    const setInputData = (event) => {
       
        setVal(event.target.value);
    }

    const addTask = () => {
        parentGetTask(val);
    }

    return (
        
        <>
            <input
                type="text"
                placeholder="Enter the task..."
                onChange={setInputData}
                value={val}
            />
            <button onClick={addTask}> Add Task</button>
        </>
   )
}

export default InputBox;
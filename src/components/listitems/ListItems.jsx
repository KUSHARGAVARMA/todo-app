
import './listItems.css'

const ListItems = (props) => {
  const {tasks, filterData}=props;



    return (
      <ul>
        {
        tasks.map((task)=>{
          if(task.taskCompletedAt==null)
          {
            return <li onClick={filterData} className={task.faded} key={task.id} id = {task.id}> {task.taskName} </li>

          }
          else{
            return <li onClick={filterData} className={task.faded} key={task.id} id = {task.id}> {task.taskName} completed in {task.taskCompletedAt}</li>
          }
        
      })
        }

      </ul>
  )
}

export default ListItems;
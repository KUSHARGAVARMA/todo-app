
import './listItems.css'

const ListItems = (props) => {
  const {tasks, filterData}=props;



    return (
      <ul>
        {
        tasks.map((task)=>{
        return <li onClick={filterData} key={task.id} id = {task.id}> {task.taskName}</li>
      })
        }

      </ul>
  )
}

export default ListItems;
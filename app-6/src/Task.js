import React from 'react';

class Task extends React.Component {
    constructor() {
        super()
        
        this.state={
            tasks: [""],
            taskInput: ""
        }
    }
    handleInput(value) {
        console.log(value);
        this.setState({
          taskInput: value
        });
      }

      addTask = () => {
        this.setState({
          tasks: [...this.state.tasks, this.state.taskInput]
        });
      };
    

render(){
    let tasksMapped = this.state.tasks.map((element, i) => {
        return <h1>{element}</h1>;
      });
    return(
        <div>
            <h1>Mer Ter Der Lerst</h1>
            <input placeholder="Enter Task" onChange={e => this.handleInput(e.target.value)} />
            <button onClick={this.addTask}>Add Task</button>
    <h1>{tasksMapped}</h1>
        </div>
    )
}
}

export default Task
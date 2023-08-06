import React, { createRef } from 'react'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todolist: ["吃饭", "睡觉"]
    }
    this.inputRef = createRef()
  }
  handleSubmit = () => {
    const { todolist } = this.state
    const inputValue = this.inputRef.current.value
    if (inputValue && !todolist.includes(inputValue)) {
      todolist.push(inputValue)
      this.setState({ todolist })
    }
  }
  handleDelete = (index) => {
    const { todolist } = this.state
    todolist.splice(index, 1)
    this.setState({ todolist })
  }
  render () {
    const { todolist } = this.state
    return (
      <div id='app'>
        <div>
          <input type="text" ref={this.inputRef} />
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ol>
          {todolist.map((item, index) => {
            return (
              <li>
                <span>{item}</span>
                <button onClick={() => this.handleDelete(index)}>X</button>
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}

export default App

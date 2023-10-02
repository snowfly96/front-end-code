import React, { useState } from 'react'
import { List, Typography } from 'antd'

export default function TodoList () {
    const [todoList, setTodoList] = useState([])
    const [inputText, setInputText] = useState('')

    const handleChange = (e) => {
        setInputText(e.target.value)
    }
    const handleAdd = () => {
        setTodoList([...todoList, inputText])
    }
    const handleDelete = (text) => {
        const newList = todoList.filter(item => item !== text)
        setTodoList(newList)
    }
    return (
        <div>
            <h3>todolist</h3>
            <div>
                <input type="text" onChange={handleChange} />
                <button onClick={handleAdd}>添加</button>
            </div>
            <div>
                <List
                    bordered
                    dataSource={todoList}
                    renderItem={(item) => (
                        <List.Item>
                            <Typography.Text mark>[ITEM]</Typography.Text> {item}
                            <button onClick={() => handleDelete(item)}>X</button>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}


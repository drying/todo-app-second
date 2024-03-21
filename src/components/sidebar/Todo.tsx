import React from 'react'
import './Todo.css'
import { deleteDoc, doc } from 'firebase/firestore'
import db from '../../Firebase'

type Status = '未着手' | '進行中' | '完了'

type TodoProps = {
    id: string
    title: string
    status: Status
    detail: string
}

function Todo(props: TodoProps) {
    const deleteTodo = async (docId: string) => {
        const docRef = doc(db, 'todo', docId)
        await deleteDoc(docRef)
    }
    const handleDelete = async (docId: string) => {
        await deleteTodo(docId)
    }

    return (
        <div className="todos">
            <div className="todo">
                <div className="left-items">
                    <h3 className="docId">ID: {props.id}</h3>
                    <h3>{props.title}</h3>
                </div>
                <div className="right-items">
                    <p>{props.status}</p>
                    <button onClick={() => handleDelete(props.id)}>削除</button>
                </div>
            </div>
            <div className="todo-detail">
                <h4>詳細</h4>
                <p>{props.detail}</p>
            </div>
        </div>
    )
}

export default Todo

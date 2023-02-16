import { useState } from "react";
import { ActionButton } from "../components/ActionButton";

export const Todo = () => {
    const [todoText, setTodoText] = useState('');
    const [incompleteTodo, setIncompleteTodo] = useState([])
    const [completeTodo,setCompleteTodo]=useState([])
    const onChangeTodoText = (event) => setTodoText(event.target.value);

    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodo = [...incompleteTodo, todoText];
        setIncompleteTodo(newTodo);
        setTodoText("");
    }

    const onClickDelete = (index) => {
        const newTodo = [...incompleteTodo]
        newTodo.splice(index, 1)
        setIncompleteTodo(newTodo);

    }

    const onClickComplete = (index) => {
        const newIncompleteTodo = [...incompleteTodo];
        newIncompleteTodo.splice(index, 1);

        const newCompleteTodo = [...completeTodo, incompleteTodo[index]]
        setIncompleteTodo(newIncompleteTodo)
        setCompleteTodo(newCompleteTodo)
    }

    const onClickBack = (index) => {
        const newCompleteTodo = [...completeTodo];
        newCompleteTodo.splice(index, 1);

        const newIncompleteTodo = [...incompleteTodo, completeTodo[index]]
        setCompleteTodo(newCompleteTodo)
        setIncompleteTodo(newIncompleteTodo)
    }


    return (
        <>

            <div>
                <h1>TODOリスト</h1>
                <input type="text" placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
                <button className="bg-gradient-to-br from-gray-300 to-gray-500 rounded-md m-1 p-1 " onClick={onClickAdd}>追加</button>
            </div>
            <div className="text-orange-600 font-bold">未完了のTODO</div>
            <ul>
                {incompleteTodo.map((todo, index) => {
                    return (
                        <li>
                            <div key={todo}>
                                {todo}
                                <button className="bg-slate-200 m-1 p-1" onClick={() => { onClickComplete(index) }}>完了</button>

                                <button className="bg-slate-200 m-1 p-1" onClick={() => { onClickDelete(index) }}>削除</button>
                            </div>
                        </li>

                    )
                })}


            </ul>
            <div className="text-blue-500 font-bold">完了済のTODO</div>
            <ul>
                {completeTodo.map((todo,index) => {
                return (
                    <li >
                    <div key={todo}>
                            {todo}
                            <button className="bg-slate-200 m-1 p-1" onClick={()=>{onClickBack(index)}}>戻す</button>
                    </div>
                </li>
                )
            })}
                
            </ul>
            <div></div>

        </>
    )
}
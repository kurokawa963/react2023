import React, { useState } from "react";
import { ActionButton } from "../components/ActionButton";

// State：各コンポーネントが持つ状態。Stateが変更されると再レンダリングされる
// []の中に第一引数⇒動的に変わる変数（代入する文字列）、第二引数⇒Stateを更新していく関数。setから始めよう
//    useState()の中には表示させたいものを入れる
export const Todo = () => {
    const [todoText, setTodoText] = useState('');
    // この場合最初は空文字を表示
    const [incompleteTodo, setIncompleteTodo] = useState([])
    const [completeTodo, setCompleteTodo] = useState([])
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
            <body className="text-center">
                <div>
                    <h1>TODOリスト</h1>
                    <input type="text" placeholder="TODOを入力" className="text-xl" value={todoText} onChange={onChangeTodoText} />
                    <ActionButton className="bg-gradient-to-br from-gray-300 to-gray-500 rounded-md m-1 p-1 " action={onClickAdd} text="追加" />
                </div>
                <div className="text-orange-600 font-bold">未完了のTODO</div>
                <ul>
                    {incompleteTodo.map((todo, index) => {
                        return (
                            <li>
                                <div key={todo} className="m-2">
                                    {todo}
                                    <ActionButton className="bg-slate-200 m-1 p-1" action={() => { onClickComplete(index) }} text="完了" />

                                    <ActionButton className="bg-slate-200 m-1 p-1" action={() => { onClickDelete(index) }} text="削除" />
                                </div>
                            </li>

                        )
                    })}


                </ul>
                <div className="text-blue-500 font-bold">完了済のTODO</div>
                <ul>
                    {completeTodo.map((todo, index) => {
                        return (
                            <li >
                                <div key={todo} className="m-2 justify-start">
                                    {todo}
                                    <ActionButton className="bg-slate-200 m-1 p-1" action={() => { onClickBack(index) }} text="戻す" />
                                </div>
                            </li>
                        )
                    })}

                </ul>
                <div></div>
            </body>
        </>
    )
}
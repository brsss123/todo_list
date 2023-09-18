import React from "react"
import TodoItem from "./TodoItem"
import "../App.css"

//props 를 받아올수 있다
//자바스크립트는 무조건 {} 중괄호 사용
// map 과 array함수
function TodoBoard(props){
      const{todoList,deleteItem} =props;

     return(
        <div className ={todoList.length != 0 ? 'itemlist' : '' }>
            {todoList.map((item , idx)=> <TodoItem key ={idx} item= {item} index ={idx} onDeleteItem={deleteItem}/>)}
        </div>

     )
}
export default TodoBoard;
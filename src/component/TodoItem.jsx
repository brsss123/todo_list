import React from "react"
import  "./css/TodoItem.css"

//react 에서는 class x -> className
function TodoItem(props){
    const{item, index, onDeleteItem} =props;


    const updateItem = (e)=>{
        console.log("수정 버튼 입력");
          
       };     
       

    const deleteItem =() =>{
        console.log("삭제 버튼 입력");
        onDeleteItem(index);
    };

    return(
       <React.Fragment>     
       <div className="item">   
            <p>     
            {index+1}. {item}   
            </p>  
            <button onClick ={deleteItem} alt ="삭제"> </button>
            <div className = "divid"></div>
       </div>
       </React.Fragment>
    )
}
export default TodoItem;
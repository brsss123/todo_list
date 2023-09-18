import React,{useState,useRef} from 'react';
//hook 선언부
import './App.css';
import TodoBoard  from './component/TodoBoard';


// 값을 전달시에는 props사용

function App() {

  const [inputValue , setInputValue] =useState ('');
  const [todoList ,setTodoList] =useState([]);
  const inputEl = useRef(null);
  // 아이템 추가
  const  addItem =(e) =>{
        e.preventDefault();
        if(inputValue != null && inputValue !=''){
        setTodoList([...todoList ,inputValue]);
         setInputValue('');
         inputEl.current.focus();
        }else{
          alert("일정을 입력해주세요");
          inputEl.current.focus();
        }
  };

  // 아이템 삭제
  // splice index 기준 몇번쨰
  // 스프레드 연산자
  const deleteItem = (idx) =>{
    console.log(idx);
    const updateList =[...todoList];
    updateList.splice(idx , 1);
    setTodoList(updateList);
   };
 // 엔터 입력시 제출 및 input 초기화
  const handleKeyDown =(e)=>{  
      if(e.key =='Enter'){
        addItem(e);
      }
  };

  return (

          <div className ='container'>
              <h1>ToDo List</h1>       
            <form onSubmit ={addItem}>         
            <input className={inputValue ? `input_invalid` : `input`} type="text" value ={inputValue} ref ={inputEl} onChange={(e)=> setInputValue(e.target.value)} onKeyDown={handleKeyDown}/>
            <button class='button' type ='submit'>입력</button>
            </form>      
            <TodoBoard todoList = {todoList} deleteItem ={deleteItem}/>
        </div> 

  );
}

export default App;

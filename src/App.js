import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoButtonCreate } from './TodoButtonCreate';
import { TodoClick } from './TodoClick';

const defaultToDos = [
  {item : "Cortar Cebolla" , completed:true},
  {item : 'Cortar Morron' , completed:false},
  {item : 'Cortar Verdeo' , completed:true},
  {item : 'Cortar Papa' , completed:true},
];




function App() {

  const[searchValue, setSearchValue]=React.useState('');
  const[todo,setTodo]=React.useState(defaultToDos);

  const todoCompleted = todo.filter(() => !!todo.completed).length; 
  const todoTotal=todo.length;
  const searchedTodo = todo.filter(
    (todo) => {
        const todoText = todo.item.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
        
      }
  );

  
    
  return (
    <>
      <TodoCounter completed={todoCompleted} total={todoTotal}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodo.map(todo=>(
          <TodoItem 
            key={todo.item} 
            item={todo.item}
            completed={todo.completed} 
          />
        ))}
      </TodoList>
      <TodoButtonCreate/>
      <TodoClick></TodoClick>

          </>
  );
}

export default App;

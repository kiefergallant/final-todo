import React,{useState} from 'react';
import './App.css';
import { Container,Button,Form,FormInput,Col,Row } from "shards-react";
 
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
 
function App() {
  //Setup To do list 
  const [toDoList,setTodoList] = useState([
    {text:"Mow the lawn"},
    {text:"Wash the dishes"},
    {text:"Study"}
  ]);

  const [value,setValue] = useState('');
  // handle submission of form 
  const handleSubmit = (mouseClick) => {
    mouseClick.preventDefault();
    addToDo(value);
    setValue('')

  };
 
    // Add to do 

  const addToDo = (text) => {
    const updatedToDoList = [...toDoList,{text}];
    setTodoList(updatedToDoList)
  };

  // Delete to do 
  const handleDelete = (todo) =>{
    const filteredTodoList = toDoList.filter(currentTodoListValue => (currentTodoListValue !== todo));
    setTodoList(filteredTodoList)
  };
  

  // 
  
  
  return (
  <Container>
      <h1>Kiefer's ToDo App</h1>
      
      <Container  className = 'todoInput'>
        <form onSubmit={handleSubmit}>
          <FormInput
          id = "todoinput"
          value = {value}
          placeholder ='Enter Todo'
          onChange = {keyBoardStroke => setValue( keyBoardStroke.target.value)}/>
          <Button id='addtodo'type='submit'>Add To Do</Button>
        </form>
      </Container>
      
      <Container className = 'todoList'>
        <Row>
        <Col id='todocolumn'>
        
        {
        toDoList.map((todo,index) => (
          <div id = "tododiv" key={index}>
            <span><p id="todotext">{todo.text}</p></span>
            <Button id='delete' onClick = {()=>handleDelete(todo)}>Delete</Button>
            
          </div>
          
        ))}
        </Col>
        <Col></Col>
        </Row>
      </Container>

      
   
   </Container>
    
  );
        }

export default App;

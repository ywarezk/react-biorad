/**
 * <ul>
 *  <li></li>
 * </ul>
 */

 import React, {useState, useEffect} from 'react';



 export default function Todo() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // (async function() {
        //     const todosResponse = await fetch('https://nztodo.herokuapp.com/api/task/?format=json')
        //     const todosArray = await todosResponse.json();
        //     setTodos(todosArray);
        // })();

        fetch(
            'https://nztodo.herokuapp.com/api/task/?format=json'
        ).then(
            (todosResponse) => todosResponse.json() 
        ).then(
            (todosArray) => setTodos(todosArray)
        );

    }, []);

     return (
         <ul>
             {
                 todos.map(singleTodo => <li key={singleTodo.id}>{singleTodo.title}</li>)
             }
         </ul>
     )
 }
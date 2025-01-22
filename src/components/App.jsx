import './App.css';
import { useState, useEffect } from 'react';
import Input from './Input.jsx';
import List from './List.jsx';

function App() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    // Läs todos från LocalStorage vid sidladdning
    useEffect(() => {
        try {
            const savedTodos = localStorage.getItem('todos');
            console.log("Fetched todos from LocalStorage:", savedTodos); // Logga vad som hämtas
            if (savedTodos) {
                setTodos(JSON.parse(savedTodos));
            }
        } catch (error) {
            console.error("Error loading todos from LocalStorage:", error);
        }
    }, []);

    // Spara todos till LocalStorage när de ändras
    useEffect(() => {
        if (todos.length > 0) {
            console.log("Saving todos to LocalStorage:", todos);
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos]);

    const addTodo = () => {
        if (todo !== '') {
            setTodos((prevTodos) => {
                console.log("Adding todo:", todo);
                console.log("Updated todos:", [...prevTodos, todo]);
                return [...prevTodos, todo];
            });
            setTodo('');
        }
    };

    const complete = (text) => {
        const uncompletedTodos = todos.filter((todo) => todo !== text);
        setTodos(uncompletedTodos);
    };

    return (
        <div className="App">
            <img className="logo" src="/logo.png" alt="techover" />
            <Input setTodo={setTodo} todo={todo} addTodo={addTodo} />
            <List todos={todos} complete={complete} loading={loading} />
        </div>
    );
}

export default App;
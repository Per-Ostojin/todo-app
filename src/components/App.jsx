import './App.css';
import { useState, useEffect } from 'react';
import Input from './Input.jsx';
import List from './List.jsx';

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((res) => res.json())
			.then((data) => {
				const uncompletedTodos = data.filter((todo) => !todo.completed).map((todo) => todo.title);
					setTodos(uncompletedTodos);
					setLoading(false)
			});
	}, []);

	const addTodo = () => {
		console.log(todos);
		if (todo !== '') {
			setTodos([...todos, todo]);
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
			<List todos={todos} complete={complete} loading={loading}/>
		</div>
	);
}

export default App;

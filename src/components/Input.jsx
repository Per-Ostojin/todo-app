import './Input.css'

const Input = ({setTodo,todo, addTodo}) => {
	return (
		<div className="input-wrapper">
			<input
				type="text"
				className="input"
				name="todo"
				placeholder="Create a todo"
				onChange={(event) => setTodo(event.target.value)}
                value={todo}
			/>
            <button className="add-button" onClick={addTodo}>Add</button>
		</div>
	);
};

export default Input;

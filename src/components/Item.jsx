import './Item.css'

const Item = ({ text, complete }) => {
	return (
		<div className="todo">
			<div className="todo-entry"> {text} </div>
			<button className="complete-button" onClick={() => complete(text)}>
				Complete
			</button>
		</div>
	);
};

export default Item;

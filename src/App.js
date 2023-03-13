import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";
import "./App.css";

function App() {
	const [todo, setTodo] = useState("");
	const dispatch = useDispatch();
	const Todo = useSelector((state) => state.Todo);
	const { todos } = Todo;

	const handleSubmit = (e) => {
		e.preventDefault();
		setTodo("");

		dispatch(AddTodoAction(todo));
	};

	const removeHandler = (todo) => {
		dispatch(RemoveTodoAction(todo));
	};

	return (
		<div className="App">
			<div className="App-header">
				<h1>ToDo List with Redux</h1>
				<form onSubmit={(e) => handleSubmit(e)} className="form-todo">
					<input
						value={todo}
						placeholder="Enter Todo"
						onChange={(e) => setTodo(e.target.value)}
					/>
					<button type="submit">Add</button>
				</form>
				<ul>
					{todos &&
						todos.map((x) => (
							<li key={x.id}>
								<span>{x.todo}</span>
								<button onClick={() => removeHandler(x)}>
									Delete
								</button>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
}

export default App;

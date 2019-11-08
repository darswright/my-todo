import React, { useState } from 'react';
import TodoItem from './TodoItem';
import listData from './todoData';

export default function TodoContainer() {
	const styles = {
		listStyle: 'none',
		margin: 0,
		padding: 0
	};

	const [ todos, setTodos ] = useState(listData);

	const handleChange = (id) => {
		const updatedTodos = todos.map((todo) => {
			if (id === todo.id) {
				return {
					...todo,
					completed: !todo.completed
				};
			}
			return todo;
		});

		setTodos(updatedTodos);
	};

	const todoItems = todos.map((todo) => <TodoItem key={todo.id} item={todo} event={() => handleChange(todo.id)} />);

	return (
		<div className="App">
			<ul style={styles}>{todoItems}</ul>
		</div>
	);
}

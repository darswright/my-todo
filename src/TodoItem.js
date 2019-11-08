import React from 'react';

export default function TodoItem(props) {
	return (
		<li className="list-item">
			<input type="checkbox" checked={props.item.completed} onChange={props.event} />&nbsp;
			<span style={props.item.completed ? { textDecoration: 'line-through' } : {}}>{props.item.name}</span>
		</li>
	);
}

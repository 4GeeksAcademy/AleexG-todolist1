import React, { useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	
	const handlerKeyDown = (e) =>{
		if (e.key == "Enter"){
			setTodos([...todos,inputValue])
			setInputValue("")
		}
		
	}
	
	const eliminarToDo = (indexToDo) =>{
		const filter = todos.filter((toDo, index) => index !== indexToDo)
		setTodos(filter)
	}

	return (
		<div className="container text-center mt-5">
			<h1>Todolist</h1>
					<input 
					type="text"
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={handlerKeyDown}
					placeholder="Añadir tarea"
					value={inputValue}
					className="form-control mt-3"
					>
					</input>
			<ul className="list-group">
				{
					todos.map((toDo, index) => (
						<li key={index} className="container list-group-item d-flex justify-content-evenly mt-2">
							<span>{toDo}</span>
							<button className="btn btn-sm btn-outline-danger" onClick={() => eliminarToDo(index)}>X</button>
						</li>
					))
				}
			</ul>
		</div>
	);
};

export default Home;
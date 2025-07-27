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
		<div className="text-center">
			<h1>Todolist</h1>
					<input 
					type="text"
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={handlerKeyDown}
					placeholder="Añadir tarea"
					value={inputValue}
					>
					</input>
			<ul>
				{
					todos.map((toDo, index) => (
						<li key={index}>
							<span>{toDo}</span>
							<span onClick={() => eliminarToDo(index)}>
								<button>X</button>
							</span>
						</li>
					))
				}
			</ul>
		</div>
	);
};

export default Home;
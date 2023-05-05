import React, {useState, useEffect} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [follower, setFollower]=useState(0)

	function saludar() {
		alert("Hola a todos")
	}

	function countFollowers() {
		setFollower(follower+1)
	}

	function getTodoList() {
		fetch('https://assets.breatheco.de/apis/fake/todos/user/ros123')
		.then((response)=>response.json())
		.then((data)=>console.log(data))
		.catch((err)=>console.log(err))
	}

	// saludar()//NO!!!
	//1.ni bien cargue el componente ejecuta el bloque que tengo dentro de la funcion
	// useEffect(()=>{
	// 	 //bloque de codigo a ejecutar
 	// 	saludar()
	// },[])

	// 2. estoy vigilando un estado de cambia para ejecutar el bloque de codigo dentro la funcion
	// useEffect(()=>{
	// 	 //bloque de codigo a ejecutar
 	// 	saludar()
	// },[follower])

	useEffect(()=>{
		 //bloque de codigo a ejecutar
 		getTodoList()
	},[])

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Seguidores {follower}</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success" onClick={countFollowers}>
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;

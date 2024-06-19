import React from "react";
import {Navbar} from "./Navbar.jsx"
import {Jumbotron} from "./Jumbotron.jsx"
import {Cards} from "./Cards.jsx"  
import Footer from "./Footer.jsx";
import "../../styles/index.css"
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="pb-5 position-relative"style={{height:"100vh",}}>
			<Navbar/>
			<Jumbotron/>

			<div className="container" style={{display:"flex", justifyContent: "space-around"}}>
				<Cards/> 
				<Cards/> 
				<Cards/> 
				<Cards/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;

import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const Home = () => {
	return (<div className = "container-fluid">
		<Navbar />
		<Jumbotron />
			<div className="row">
				<div className="col-3"><Card /></div>
				<div className="col-3"><Card /></div>
				<div className="col-3"><Card /></div>
				<div className="col-3"><Card /></div>
			</div>
		<Footer />
		</div>);
};

export default Home;


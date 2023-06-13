import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";


const data = [{title:"Title 1", buttonLabel:"Do something"}, {title:"Title 2", buttonLabel:"Show something"},{title:"Title 3", buttonLabel:"Hide something"},{title:"Title 4", buttonLabel:"Go somewhere"},]

const Home = () => {
	return (
		<div>
		  <Navbar/>
		  <Jumbotron/>
		  <div className="row gap-4 m-4">
            {data.map(card =><Card
                title={card.title}
                imageUrl={"https://fakeimg.pl/500x325"}
                description="Lorem ipsum dolor sit amet. In quas fugit qui voluptate perspiciatis est dolor necessitatibus."
                buttonLabel={card.buttonLabel}
            />)}
		  </div>
		  <Footer/>
		</div>
	);
};

export default Home;

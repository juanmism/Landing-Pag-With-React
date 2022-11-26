import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const Home = () => {
	return (<div className = "container-fluid">
		<Navbar />
		<div className="row justify-content-center">
			<div className="col-8">
		<Jumbotron />
		</div>
			<div className="row justify-content-center">
				<div className="col-2">
					<Card 
				title="Bob Dylan"
				imageUrl="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"
				description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
				buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
				buttonLabel="WikiBob" />
				</div>
				<div className="col-2">
					<Card 
				title="Bruce Springsteen"
				imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Bruce_Springsteen_-_Roskilde_Festival_2012.jpg/220px-Bruce_Springsteen_-_Roskilde_Festival_2012.jpg"
				description="Bruce Frederick Joseph Springsteen (born September 23, 1949) is an American singer and songwriter. He has released 21 studio albums, most of which feature his backing band, the E Street Band. Originally from the Jersey Shore, he is an originator of heartland rock, combining mainstream rock musical styles with narrative songs about working class American life. Nicknamed The Boss,[1] his career has spanned six decades. Springsteen is known for his poetic, socially conscious lyrics and energetic stage performances, sometimes lasting up to four hours.[2]"
				buttonUrl="https://en.wikipedia.org/wiki/Bruce_Springsteen"
				buttonLabel="WikiBruce" />
				</div>
				<div className="col-2"><Card 
				title="Elton John"
				imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Elton_John_2011_Shankbone_2_%28cropped%29.JPG/220px-Elton_John_2011_Shankbone_2_%28cropped%29.JPG"
				description="Sir Elton Hercules John CH CBE (born Reginald Kenneth Dwight; 25 March 1947[1]) is a British singer, pianist and composer. Commonly nicknamed the Rocket Man after his 1972 hit single of the same name, John has led a commercially successful career as a solo artist since the 1970s, having released 31 albums since 1969.[2] Collaborating with lyricist Bernie Taupin since 1967, John is acclaimed by critics and musicians, particularly for his work during the 1970s, and his lasting impact on the music industry. John's music and showmanship have had a significant impact on popular music.[3] His songwriting partnership with Taupin is one of the most successful in history.[4]"
				buttonUrl="https://en.wikipedia.org/wiki/Elton_John"
				buttonLabel="WikiElton" />
				</div>
				<div className="col-2"><Card 
				title="Freddie Mercury"
				imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg/220px-Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg"
				description="Freddie Mercury (nacido como Farrokh Bulsara23​ Stone Town, 5 de septiembre de 1946-Kensington, Londres, 24 de noviembre de 1991) fue un cantante y compositor británico, que alcanzó fama mundial por ser el vocalista principal (y pianista) de la banda de rock, Queen. Siendo intérprete, ha sido reconocido por su poderosa voz y extravagantes puestas en escena.4​5​6​ Como compositor, escribió muchos de los éxitos de Queen, tales como «Killer Queen», «Bohemian Rhapsody», «Somebody to Love», «We Are the Champions», «Don't Stop Me Now», «Crazy Little Thing Called Love», «It's a Hard Life» o «Innuendo»."
				buttonUrl="https://es.wikipedia.org/wiki/Freddie_Mercury"
				buttonLabel="WikiFreddie"/>
				</div>
			</div>
		</div>
		<Footer />
		</div>);
};


export default Home;


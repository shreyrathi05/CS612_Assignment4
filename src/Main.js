import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

class Main extends Component {
  render() {
    return (
     <main>
     <ol>
     <li>
     <Link className="title" exact to="/Blog1">Is Roger Federer the Best Tennis Player of All Times?</Link>
     <p className="title">Date: April 8, 2020</p>
     <img src={process.env.PUBLIC_URL + '/rogerfederer.jpg' } alt="Sports"  />
     <p> 
	Tennis and Roger Federer are synonymous to each other.</p>

	<p>Did Federer have competition?</p>
	
	<p>Federer has always been better on grass and hard court but clay court has always been his weakness.</p>

	<p>The dominance factor</p>

	<p>Watching Andre Agassi and Pete Sampras play makes you question everything in Tennis. Those were players beyond time, who graced us with their presence and showed us what real dominance and excellent gameplay was.</p>
     </li>
     <li>
     <Link className="title" exact to="/Blog2">How Nike landed Michael Jordan</Link>
     <p className="title">Date: Feb 15, 2013</p>
     <img src={process.env.PUBLIC_URL + '/jordan.jpg' } alt="Sports"  />
     <p>
	All Michael Jordan wanted to wear was adidas in the NBA.</p>
	<p>Although he wore Converse at North Carolina, because his coach Dean Smith was getting paid about $10,000 a year to put the brand on his players, the German make was his dream.</p>


	<p>The Wild Card

	It was O.J. Simpson, of all people, who called it: Michael Jordan would be the best new star in sports.</p>


	<p>Nike Moves In

	Nike was a fast-rising star. The company's revenue went from $28.7 million in 1973 to $867 million by the end of 1983. But things had started to turn on them toward the end of the year. In February 1984, the company reported its first quarterly loss ever.

	Knight Vision

	On the advice of Vaccaro, Nike offered Jordan $500,000 a year in cash for five years, which was a ridiculous number at the time. The previous highest contract was James Worthy's deal with New Balance, an eight-year deal worth $150,000 a year.

	So what would have happened if Spot-Bilt had landed Jordan?</p>

	<p>"We wouldn't have had Jordan wear those black-and-red shoes," Fisher said. "We were a family company, more conservative. We would have probably made a white shoe with a red stripe on it."
	</p>
     </li>
     <li>
     <Link className="title" exact to="/Blog3">Virat Kohli’s final frontier</Link>
     <p className="title">Date: JULY 17,2018</p>
     <img src={process.env.PUBLIC_URL + '/viratkohli.jpg' } alt="Sports"  />
     <p>The great batsmen dominate everywhere. They pile on the runs at home and they lead the assault away, too. He has grabbed the leadership with real zeal and where Dhoni showed apathy towards away tours, Kohli is desperate to win. If he averages 13.4 again, India will be in trouble.
		There’s another element for him personally, too. His record in England is holding him back, an obvious stain on an otherwise impressive body of work.</p>
     </li>
     </ol>
     
     </main>
    );
  }
}

export default Main;
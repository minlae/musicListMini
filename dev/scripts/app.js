import React from 'react';
import ReactDOM from 'react-dom';

console.log("Note: This site is best viewed on mobile")

class NavMenu extends React.Component {
	constructor() {
		super();
		this.state = {
			showMenu: false,
			showSlider: false
		}
		this.toggleMenu = this.toggleMenu.bind(this);
		this.toggleSliders = this.toggleSlider.bind(this);
	}

	toggleMenu() {
		if (this.state.showMenu === false) {
			this.setState({
				showMenu: true
			});
		} else {
			this.setState({
				showMenu: false
			});
		}
	}

	toggleSlider() {
		if (this.state.showSlider === false) {
			this.setState({
				showSlider: true
			});
		} else {
			this.setState({
				showSlider: false
			});
		}
	}

	render() {
		return (
			<div className="nav">
	      		<button onClick={this.toggleMenu}><i className="fa fa-bars" aria-hidden="true"></i></button>
	      		<button onClick={this.toggleSlider}><i className="fa fa-sliders" aria-hidden="true"></i></button>
	  		</div>
		)
	}
}


class App extends React.Component {
    constructor() {
    	super();
    	this.state = {
    		results: 21,
    		performers: [
    			{
    				name: `GROOZ + SandCatchers + Turkwaz`,
    				image: `./assets/img1.jpg`,
    				presenter: `Ashkenaz Foundation and Small World Music Society`,
    				time: `9:00 PM`,
    				date: `Thu, Sep 14`,
    				country: `Central America`,
    				location: `Revival`,
    				distance: `5km`
    			}, 
    			{
    				name: `Elephant + Castle + FRAMES`,
    				image: `./assets/img2.jpg`,
    				presenter: `Ashkenaz Foundation`,
    				time: `9:30 PM`,
    				date: `Wed, Sep 13`,
    				country: `North America`,
    				location: `Ember`,
    				distance: `8km`
    			},
			],
    	}
    }

    clearFilter() {
    	// Actions to clear filter. Would connect to a function to modify the performers arrays in this state.
    }

    editFilter() {
    	// Actions to edit filter. Would connect to a function to modify the performers arrays in this state.
    }

    render() {
      return (
      	<div className="main_content">
	      	
	      	<div className="wrapper">
		      	
		      	<NavMenu />

		      	<div className="filter">
			      	<span>{this.state.results} results</span>
			      	<div className="filter__buttons">
				      	<button onClick={this.clearFilter} className="filter__button--clear">Clear Filter(s)</button>
				      	<button onClick={this.editFilter} className="filter__button--edit">Edit Filter(s)</button>
			      	</div>
		      	</div>
	      	</div>

	        <div className="container">
	          {this.state.performers.map((item) => {
	         		return (
	         			<div className="card__content">
		         			<div className="card__image" style={{background: `url(${item.image})`}}>
		         				<button className="card__button">Buy Tickets</button>
		         			{/* If I were to code this with more time, I would use Router. This button would be a link to a different page with ticket purchase info. */}
		         			</div>
		         			<div className="card__details">
			         			<h1>{item.name}</h1>
			         			<p>Presented by: {item.presenter}</p>
			         			<div className="card__details--container">
			         				<img src="./assets/world.svg" alt=""/>
				         			<p>{item.country}</p>
			         			</div>
			         			<div className="card__details--container">
				         			<img src="./assets/time.svg" alt=""/>
				         			<p>{item.date}<br />{item.time}</p>
			         			</div>
			         			<div className="card__details--container">
				         			<img src="./assets/location.svg" alt=""/>
				         			<p>{item.location} <span className="line"></span> {item.distance}</p>
			         			</div>
					        </div>
	         			</div>
	     			)
	         	})}
	          </div>
      </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

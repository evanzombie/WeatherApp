import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Landing from "./Landing";
import Detail from "./Detail";

const FourOhFour = () => (
	<div className="centerArea " style={{ color: "white" }}>
		<h1>404</h1> <h1>Oops... Page Not Found!</h1>
	</div>
);

// const cities = {
// 	newyork: "5128638",
// 	london: "2643743",
// 	berlin: "2950159",
// 	beijing: "1816670",
// 	mexicocity: "3530597"
// };
// new york:5128638
// London:2643743
// Berlin: 2950159
// Beijing:1816670
// mexico city: 3530597
const cities = ["newyork", "london", "berlin", "beijing", "mexicocity"];

const App = () => (
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/" component={Landing} />
				{/*<Route path="/details/:city" component={() => <Detail />}  />*/}
				<Route
					path="/details/:city"
					component={({ match }) => {
						if (
							cities.find(city => {
								return city === match.params.city;
							})
						) {
							return <Detail city={match.params.city} />;
						} else {
							return <FourOhFour />;
						}
					}}
				/>
				<Route component={FourOhFour} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default App;

// import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import type { Match } from "react-router-dom";
// import Landing from "./Landing";
// import Search from "./Search";
// import Details from "./Details";
// import preload from "../../data.json";

// const FourOhFour = () => <h1>404</h1>;

// const App = () => (
// 	<BrowserRouter>
// 		<div className="app">
// 			<Switch>
// 				<Route exact path="/" component={Landing} />
// 				<Route path="/search" component={props => <Search shows={preload.shows} {...props} />} />
// 				<Route
// 					path="/details/:id"
// 					component={(props: { match: Match }) => {
// 						const selectedShow = preload.shows.find(show => props.match.params.id === show.imdbID);
// 						return <Details show={selectedShow} {...props} />;
// 					}}
// 				/>
// 				<Route      component={FourOhFour} />
// 			</Switch>
// 		</div>
// 	</BrowserRouter>
// );

// export default App;

import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Landing from "./Landing";
import Detail from "./Detail";

const FourOhFour = () => (
	<div className="centerArea " style={{ color: "white" }}>
		<h1>404</h1> <h1>Oops... Page Not Found!</h1>
	</div>
);

const App = () => (
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/details/:id" component={Detail} />
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

import React, { Component } from "react";
//  import styled from "styled-components";

// const LongPageWrapper = styled.div`
// 	background-color: #f8f8f8;
// 	padding: 20px;
// 	height: 100%;
// `;

export default class Detail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toolBarClass: "toolBar"
		};
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		// axios.get(`http://localhost:3000/${this.props.show.imdbID}`).then((response: { data: { rating: string } }) => {
		// 	this.setState({ apiData: response.data });
		// });
	}
	componentWillMount() {
		document.getElementById("app").classList.add("sunnyClass");
		document.getElementById("app").classList.remove("app");
	}

	componentWillUnmount() {
		document.getElementById("app").classList.remove("sunnyClass");
		document.getElementById("app").classList.add("app");
	}

	handleClick(event) {
		event.preventDefault();

		// if (this.state.toolBarClass === "toolBar") {
		// 	this.setState({ toolBarClass: "toolBarShow" });
		// } else {
		// 	this.setState({ toolBarClass: "toolBar" });
		// }
	}
	render() {
		// const { title, description, year, poster, trailer } = this.props.show;
		// let ratingComponent;
		// if (this.state.apiData.rating) {
		// 	ratingComponent = <h3>{this.state.apiData.rating}</h3>;
		// } else {
		// 	ratingComponent = <Spinner />;
		// }
		return (
			<div className="detail">
				<div className="testBK">
					<div className="cityName">Seattle, Washington</div>
					<div className="dateTime">10:24 AM</div>
					<hr />
					<div className="flex mainFlex">
						<div className="leftCol">
							<div className="mainTemp">22°F</div>
							<div className="leftCol-2">
								<div className="mainWeather">Sunny</div>
								<div className="mainTempDiff">
									<div>High 22°</div>
									<div>Low 22°</div>
								</div>
							</div>
						</div>

						<div className="rightCol flex ">
							<div className="description">description</div>
							<div className="pressure">pressure: 1</div>

							<div className="humidity">humidity: 1</div>

							<div className="speed">speed: 1</div>

							<div className="all">clouds: 1</div>

							<div className="visibility">visibility: 1</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

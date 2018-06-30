import React from "react";

const Today = props => (
	<div className="testBK">
		<div className="cityName">
			{props.city}
			{/*{props.city[0].toUpperCase()}
			{props.city.slice(1)}*/}
		</div>
		<div className="dateTime">10:24 AM</div>
		<hr />
		<div className="flex mainFlex">
			<div className="leftCol">
				<div className="mainTemp">{props.temp}</div>
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

	// <div className={`cityCard ${props.cols} ${props.color}`}>
	// 	<span className={`iconSize ${props.icon}`} />

	// 	<div className="temp">{props.temp} &#8457;</div>
	// 	<div className="weather">{props.weather} </div>

	// 	<div className={props.isFirst ? "showInfo" : "hideInfo"}>
	// 		<div className="temp_max">
	// 			{props.temp_min}&deg;F ~ {props.temp_max}&deg;F
	// 		</div>
	// 			<div className="humidity">Humidity: {props.humidity} </div>
	// 		<div className="wind">Wind: {props.wind} </div>
	// 	</div>

	// 	<div className="bottomRow">
	// 		<div>{props.city}</div>

	// 		<div>{props.country}</div>
	// 	</div>
	// </div>
);

export default Today;

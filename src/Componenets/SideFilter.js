import React from "react";

export default function SideFilter({
	productNames,
	cities,
	states,
	data,
	setCities,
	setStates,
}) {
	// handle if user selected specific company
	const selectProductNameHandler = (selectProductName) => {
		let stateTemp = [];
		data.forEach((element) => {
			if (
				element.product_name === selectProductName &&
				!stateTemp.includes(element.address.state)
			)
				stateTemp.push(element.address.state);
		});

		setStates(stateTemp);
	};

	// handle if user selected specific state
	const selectStateHandler = (selectState) => {
		let cityTemp = [];
		data.forEach((element) => {
			if (
				element.address.state === selectState &&
				!cityTemp.includes(element.address.city)
			)
				cityTemp.push(element.address.city);
		});

		setCities(cityTemp);
	};

	return (
		<div className="filter p-4 mb-4">
			<p className="title">Filters</p>
			<hr />
			<div className="mt-4">
				<div className="dropdown my-3">
					<button
						className="btn btn-secondary main-bgColor dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Products
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{productNames.length > 0
							? productNames.map((productName, index) => (
									<a
										className="dropdown-item"
										key={"productName" + index}
										href="#1"
										onClick={() => {
											selectProductNameHandler(productName);
										}}
									>
										{productName}
									</a>
							  ))
							: null}
					</div>
				</div>

				<div className="dropdown my-3">
					<button
						className="btn btn-secondary main-bgColor dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						State
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{states.length > 0
							? states.map((state, index) => (
									<a
										className="dropdown-item"
										key={"state" + index}
										href="#2"
										onClick={() => {
											selectStateHandler(state);
										}}
									>
										{state}
									</a>
							  ))
							: null}
					</div>
				</div>

				<div className="dropdown my-3">
					<button
						className="btn btn-secondary main-bgColor dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						City
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{cities.length > 0
							? cities.map((city, index) => (
									<a className="dropdown-item" key={"city" + index} href="#3">
										{city}
									</a>
							  ))
							: null}
					</div>
				</div>
			</div>
		</div>
	);
}

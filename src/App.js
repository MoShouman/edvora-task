import React, { useState, useEffect } from "react";
import Categories from "./Componenets/Categories";
import SideFilter from "./Componenets/SideFilter";

function App() {
	const [data, setData] = useState({});
	const [productNames, setProductNames] = useState({});
	const [categorizedProducts, setCategorizedProducts] = useState({});
	const [states, setStates] = useState({});
	const [cities, setCities] = useState({});
	const url = "https://assessment-edvora.herokuapp.com/";

	// fetch data from the endpoint
	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				setProductNames(getProductNames(data));
				setStates(getStates(data));
				setCities(getCities(data));
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	// categorize the products depend on the product name after filter the product names and get the unique ones
	useEffect(() => {
		const getCategorizedProducts = (data) => {
			let unique = new Array(productNames.length);

			data.forEach((element) => {
				productNames.forEach((productName, index) => {
					if (productName === element.product_name) {
						const currProductName = element.product_name;
						let currProducts = [];
						if (unique[index])
							currProducts = [...unique[index].products, element];
						else currProducts = [element];
						unique[index] = {
							productname: currProductName,
							products: currProducts,
						};
					}
				});
			});
			return unique;
		};

		if (productNames.length > 0)
			setCategorizedProducts(getCategorizedProducts(data));
	}, [productNames, data]);

	//get the unique product names
	const getProductNames = (data) => {
		let unique = [];

		data.forEach((element) => {
			if (!unique.includes(element.product_name))
				unique.push(element.product_name);
		});
		return unique;
	};

	//get the unique product states
	const getStates = (data) => {
		let unique = [];

		data.forEach((element) => {
			if (!unique.includes(element.address.state))
				unique.push(element.address.state);
		});
		return unique;
	};

	//get the unique product cities
	const getCities = (data) => {
		let unique = [];

		data.forEach((element) => {
			if (!unique.includes(element.address.city))
				unique.push(element.address.city);
		});
		return unique;
	};

	return (
		<div className="container-fluid pt-4 main-bgColor">
			<div className="row  pt-4">
				<div className="col-md-2 col-sm-12">
					<SideFilter
						productNames={productNames}
						cities={cities}
						states={states}
						data={data}
						setStates={setStates}
						setCities={setCities}
					/>
				</div>
				<div className="col-md-10 col-sm-12">
					<h3 className="mb-4 ">Edvora</h3>
					<h3 className="mb-4 main-TextColor">Products</h3>
					<Categories categorizedProducts={categorizedProducts} />
				</div>
			</div>
		</div>
	);
}

export default App;

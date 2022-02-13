import React from "react";
import Products from "./Products";

export default function Categories({ categorizedProducts }) {
	return (
		<div>
			{categorizedProducts.length > 0 &&
				categorizedProducts.map((categorizedProduct, index) => (
					<Products data={categorizedProduct} key={index} />
				))}
		</div>
	);
}

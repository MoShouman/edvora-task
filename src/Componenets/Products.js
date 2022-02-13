import React from "react";
import Product from "./Product";
import ".././Style/products.css";
import InfiniteCarousel from "react-leaf-carousel";

export default function Products({ data }) {
	return (
		<div className="products my-3">
			{data.products.length > 0 ? (
				<div className="products-container">
					<h3>{data.productname}</h3>
					<hr />

					<div className="border-radius-15 row secondary-bgColor p-3">
						<InfiniteCarousel
							breakpoints={[
								{
									breakpoint: 500,
									settings: {
										slidesToShow: 1,
										slidesToScroll: 1,
									},
								},
								{
									breakpoint: 768,
									settings: {
										slidesToShow: 1,
										slidesToScroll: 1,
									},
								},
							]}
							dots={false}
							showSides={true}
							sidesOpacity={0.5}
							sideSize={0.1}
							slidesToScroll={4}
							slidesToShow={4}
							scrollOnDevice={true}
						>
							{data.products.map((item) => (
								<Product item={item} />
							))}
						</InfiniteCarousel>
					</div>
				</div>
			) : null}
		</div>
	);
}

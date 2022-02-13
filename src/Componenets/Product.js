import React from "react";

export default function Product({ item }) {
	return (
		<div
			className="item  product main-bgColor border-radius-15 m-2 p-2"
			key={item.product_name}
		>
			<div className="row product-main-info pt-2 mb-1">
				<div className="col-5">
					<img
						className=" border-radius-15"
						alt={`img-${item.product_name}`}
						src={item.image}
					/>
				</div>
				<div className="col-7">
					<p className="product-name">{item.product_name}</p>
					<p className="product-brand-name main-TextColor">{item.brand_name}</p>
					<p className="product-price">{`$ ${item.price}`}</p>
				</div>
			</div>
			<div className="product-details-info">
				<p className="product-location-date main-TextColor d-flex justify-content-between">
					{`${item.address.state} ${item.address.city}`}
					<span>{`Date: ${item.date.slice(0, 10)}`}</span>
				</p>
				<p className="product-discription main-TextColor">{item.discription}</p>
			</div>
		</div>
	);
}

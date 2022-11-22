import React from "react";

export const Card = (props) => {
	return (
		<article className="shop__card card" data-item="berry" data-pid="1">
			<h4 className="card__title">{props.title}</h4>
			<a href="#" className="card__image">
				<picture>
					<source srcSet="img/card/card01.webp" type="image/webp" />
					<img src="img/card/card01.png" alt="Малина замороженная Премиум" />
				</picture>
			</a>
			<div className="card__box-price">
				<div className="card__price card__price_new rub">{props.priceNew}</div>
				<div className="card__price_old rub">{props.priceOld}</div>
				<div className="card__volume">за 2.5 кг</div>
			</div>
			<div className="card__box-button">
				<div className="card__quantity">
					<div className="quantity">
						<div className="quantity__button quantity__button_minus"></div>
						<div className="quantity__input">
							<input autoComplete="off" type="text" name="form[]" value="2" />
						</div>
						<div className="quantity__button quantity__button_plus"></div>
					</div>
				</div>
				<button className="card__btn btn btn_card">В корзину</button>
			</div>
		</article>
	);
};
export default Card;

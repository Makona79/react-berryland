import React from "react";

export const Header = () => {
	return (
		<header className="header">
			<div className="header__content _container">
				<div className="header__body">
					<a href="#" className="header__logo">
						<img src="img/LogoBerryland.svg" alt="logo Berryland" />
					</a>
					<div className="header__menu menu">
						<nav className="menu__body">
							<span className="menu__line"></span>
							<ul className="menu__list">
								<li className="menu__item">
									<a href="#" className="menu__link">
										Все продукты
									</a>
								</li>
								<li className="menu__item">
									<a href="#" className="menu__link">
										О нас
									</a>
								</li>
								<li className="menu__item">
									<a href="#" className="menu__link">
										Рецепты
									</a>
								</li>
								<li className="menu__item">
									<a href="#" className="menu__link">
										Доставка
									</a>
								</li>
								<li className="menu__item">
									<a href="#" className="menu__link">
										Оплата
									</a>
								</li>
								<li className="menu__item">
									<a
										href="#"
										data-da=".menu,992,1"
										className="menu__link cart-menu"
									>
										<div className="cart-menu__cart">Корзина</div>
										<div className="cart-menu__cart-icon _icon-cart"></div>
									</a>
								</li>
							</ul>
						</nav>

						<button type="button" className="icon-menu">
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Header;
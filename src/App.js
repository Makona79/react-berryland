import "./App.css";

function App() {
	return (
		<div className="wrapper">
			<h1 className="visually-hidden">
				Вкуснейшие замороженные ягоды Berryland.
			</h1>
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
			<main className="page">
				<section className="shop">
					<div className="shop__content _container">
						<h2 className="shop__title">Замороженные ягоды</h2>
						<h3 className="shop__subtitle">Доставка на дом</h3>
						<div className="shop__body">
							<ul className="shop__nav">
								<li className="shop__list _active" data-filter="all">
									Все продукты
								</li>
								<li className="shop__list" data-filter="berry">
									Ягоды
								</li>
								<li className="shop__list" data-filter="superfood">
									Суперфуд
								</li>
							</ul>
							<div className="shop__filter">
								<div className="shop__menu">
									<article
										className="shop__card card"
										data-item="berry"
										data-pid="1"
									>
										<h4 className="card__title">
											Малина замороженная Премиум (2.5 кг)
										</h4>
										<a href="#" className="card__image">
											<picture>
												<source
													srcSet="img/card/card01.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card01.png"
													alt="Малина замороженная Премиум"
												/>
											</picture>
										</a>
										<div className="card__box-price">
											<div className="card__price card__price_new rub">
												85.00
											</div>
											<div className="card__price_old rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="berry"
										data-pid="2"
									>
										<h4 className="card__title">Голубика замороженная</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card02.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card02.png"
													alt="Голубика замороженная"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="berry"
										data-pid="3"
									>
										<h4 className="card__title">Вишня замороженная</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card03.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card03.png"
													alt="Вишня замороженная"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="berry"
										data-pid="4"
									>
										<h4 className="card__title card__title_max">
											Черная смородина замороженная
										</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card04.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card04.png"
													alt="Черная смородина замороженная"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="superfood"
										data-pid="5"
									>
										<h4 className="card__title">
											Куркума с имбирем замороженные органические
										</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card05.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card05.png"
													alt="Куркума с имбирем замороженные органические"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="superfood"
										data-pid="6"
									>
										<h4 className="card__title card__title_max">
											Свекла + витамин В12 замороженная
										</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card06.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card06.png"
													alt="Свекла + витамин В12 замороженная"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="superfood"
										data-pid="7"
									>
										<h4 className="card__title card__title_max">
											Моринга замороженная органическая
										</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card07.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card07.png"
													alt="Моринга замороженная органическая"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="superfood"
										data-pid="8"
									>
										<h4 className="card__title">
											Кейл — кудрявая капуста замороженная
										</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card08.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card08.png"
													alt="Кейл — кудрявая капуста замороженная"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="superfood"
										data-pid="9"
									>
										<h4 className="card__title">
											Куркума с имбирем замороженные органические
										</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card09.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card09.png"
													alt="Куркума с имбирем замороженные органические"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="berry"
										data-pid="10"
									>
										<h4 className="card__title card__title_max">
											Ягоды лесные замороженные
										</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card10.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card10.png"
													alt="Ягоды лесные замороженные"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="berry"
										data-pid="11"
									>
										<h4 className="card__title card__title_max">
											Абрикос замороженный
										</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card11.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card11.png"
													alt="Абрикос замороженный"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="superfood"
										data-pid="12"
									>
										<h4 className="card__title">
											Кейл — кудрявая капуста замороженная
										</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card12.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card12.png"
													alt="Кейл — кудрявая капуста замороженная"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="superfood"
										data-pid="13"
									>
										<h4 className="card__title">
											Куркума с имбирем замороженные органические
										</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card13.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card13.png"
													alt="Куркума с имбирем замороженные органические"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="superfood"
										data-pid="14"
									>
										<h4 className="card__title">Бананы замороженные</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card14.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card14.png"
													alt="Бананы замороженные"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="berry"
										data-pid="15"
									>
										<h4 className="card__title card__title_max">
											Облепиха замороженная
										</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card15.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card15.png"
													alt="Облепиха замороженная"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="berry"
										data-pid="16"
									>
										<h4 className="card__title card__title_max">
											Ежевика замороженная
										</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card16.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card16.png"
													alt="Ежевика замороженная"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="berry"
										data-pid="17"
									>
										<h4 className="card__title card__title_max">
											Клубника замороженная
										</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card17.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card17.png"
													alt="Клубника замороженная"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="berry"
										data-pid="18"
									>
										<h4 className="card__title card__title_max">
											Черная смородина замороженная
										</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card18.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card18.png"
													alt="Черная смородина замороженная"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="berry"
										data-pid="19"
									>
										<h4 className="card__title card__title_max">
											Черная смородина замороженная
										</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card19.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card19.png"
													alt="Черная смородина замороженная"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="berry"
										data-pid="20"
									>
										<h4 className="card__title card__title_max">
											Крыжовник замороженный
										</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card20.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card20.png"
													alt="Крыжовник замороженный"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="berry"
										data-pid="21"
									>
										<h4 className="card__title card__title_max">
											Красная смородина замороженная
										</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card21.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card21.png"
													alt="Красная смородина замороженная"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="berry"
										data-pid="22"
									>
										<h4 className="card__title card__title_max">
											Черника замороженная
										</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card22.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card22.png"
													alt="Черника замороженная"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="superfood"
										data-pid="23"
									>
										<h4 className="card__title">Ананасы замороженные</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card23.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card23.png"
													alt="Ананасы замороженные"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="berry"
										data-pid="24"
									>
										<h4 className="card__title card__title_max">
											Вишня замороженная
										</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card24.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card24.png"
													alt="Вишня замороженная"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="superfood"
										data-pid="25"
									>
										<h4 className="card__title">Манго замороженное</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card25.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card25.png"
													alt="Манго замороженное"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="superfood"
										data-pid="26"
									>
										<h4 className="card__title">Манго замороженное</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card26.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card26.png"
													alt="Манго замороженное"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="berry"
										data-pid="27"
									>
										<h4 className="card__title card__title_max">
											Красная смородина замороженная
										</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card27.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card27.png"
													alt="Красная смородина замороженная"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="superfood"
										data-pid="28"
									>
										<h4 className="card__title">Финики замороженные</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card28.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card28.png"
													alt="Финики замороженные"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
									<article
										className="shop__card card"
										data-item="superfood"
										data-pid="29"
									>
										<h4 className="card__title">Протеин растительный</h4>
										<div className="card__image">
											<picture>
												<source
													srcSet="img/card/card29.webp"
													type="image/webp"
												/>
												<img
													src="img/card/card29.png"
													alt="Протеин растительный"
												/>
											</picture>
										</div>
										<div className="card__box-price">
											<div className="card__price rub">93.00</div>
											<div className="card__volume">за 2.5 кг</div>
										</div>
										<div className="card__box-button">
											<div className="card__quantity">
												<div className="quantity">
													<div className="quantity__button quantity__button_minus"></div>
													<div className="quantity__input">
														<input
															autoComplete="off"
															type="text"
															name="form[]"
															value="2"
														/>
													</div>
													<div className="quantity__button quantity__button_plus"></div>
												</div>
											</div>
											<button className="card__btn btn btn_card">
												В корзину
											</button>
										</div>
									</article>
								</div>
								<div className="shop__cart-box">
									<div className="shop__cart cart">
										<h4 className="cart__title">Корзина</h4>
										<div className="cart__content">
											<ul className="cart-menu__list cart-list"></ul>
										</div>
										<div className="cart__price">
											<p className="cart__descr">Подытог</p>
											<p className="cart__summ rub">184.00</p>
										</div>
										<div className="cart__button">
											<button className="cart__pay btn btn_cart">
												Оплатить
											</button>
											<button className="cart__cart btn btn_cart2">
												Корзина
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="footer">
				<div className="footer__content _container">
					<div className="footer__body">
						<div className="footer__column">
							<h4 className="footer__title">Для клиентов</h4>
							<a href="#" className="footer__link footer__item">
								Доставка и города
							</a>
							<a href="#" className="footer__link footer__item">
								Доставка и города
							</a>
						</div>
						<div className="footer__column">
							<h4 className="footer__title">О продукции</h4>
							<a href="#" className="footer__link footer__item">
								Фото продукции
							</a>
							<a href="#" className="footer__link footer__item">
								Вопросы и ответы
							</a>
						</div>
						<div className="footer__column">
							<h4 className="footer__title">Контакты</h4>
							<a
								href="mailto:info@berryland.co.il"
								className="footer__link footer__item"
							>
								info@berryland.co.il
							</a>
							<a href="tel:0559116577" className="footer__link footer__item">
								055-9116577
							</a>
						</div>
						<div className="footer__column">
							<h4 className="footer__title">Часы работы</h4>
							<p className="footer__item">вс – чт 10:00 – 18:00</p>
							<p className="footer__item">пт 10:00 – 13:00</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;

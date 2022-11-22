import React from "react";
import "./App.css";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
	return (
		<div className="wrapper">
			<h1 className="visually-hidden">
				Вкуснейшие замороженные ягоды Berryland.
			</h1>
			<Header />
			<main className="page">
				<section className="shop">
					<div className="shop__content _container">
						<h2 className="shop__title">Замороженные ягоды</h2>
						<h3 className="shop__subtitle">Доставка на дом</h3>
						<div className="shop__body">
							<Categories />
							<div className="shop__filter">
								<div className="shop__menu">
									<Card
										title="Малина замороженная Премиум (2.5 кг)"
										priceNew="85.00"
										priceOld="93.00"
									/>
									<Card title="Голубика замороженная" priceNew="85.00" />
									<Card title="Вишня замороженная" priceNew="85.00" />
								</div>
								<Cart />
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default App;

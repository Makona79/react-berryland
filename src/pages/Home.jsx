import React from "react";
import Skeleton from "../components/Skeleton";
import Card from "../components/Card";
import Cart from "../components/Cart";
import Categories from "../components/Categories";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://63306eb9591935f3c88fd5e5.mockapi.io/berry")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Categories />
      <div className="shop__filter">
        <div className="shop__menu">
          {isLoading
            ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj) => <Card key={obj.id} {...obj} />)}
        </div>
        <Cart />
      </div>
    </>
  );
};

export default Home;

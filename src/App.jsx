import pizzaData from '/src/data.json';
import './App.css';
import Pizzas from './components/pizzas';
import Header from './components/header';
import Footer from './components/footer';

function App() {
	return (
		<>
			<Header />
			{pizzaData.map((pizza) => (
				<Pizzas
					key={pizza.name}
					name={pizza.name}
					ingredients={pizza.ingredients}
					price={pizza.price}
					photoName={pizza.photoName}
					soldOut={pizza.soldOut}
				/>
			))}
			<Footer />
		</>
	);
}

export default App;

import PropTypes from 'prop-types';
function Pizzas({ name, ingredients, price, photoName, soldOut }) {
	return (
		<>
			<div key={name}>
				<h2>{name}</h2>
				<p>{ingredients}</p>
				{soldOut ? <p>Sold Out</p> : <p>{price}</p>}
				<img src={photoName} alt={name} />
			</div>
		</>
	);
}

Pizzas.propTypes = {
	name: PropTypes.string.isRequired,
	ingredients: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	photoName: PropTypes.string.isRequired,
	soldOut: PropTypes.bool.isRequired,
};

export default Pizzas;

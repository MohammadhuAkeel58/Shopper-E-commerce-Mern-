import "./BreadScrum.css";
import arrow_icon from "../Assets/Frontend_Assets/breadcrum_arrow.png";
import PropTypes from "prop-types";

const BreadScrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{" "}
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};
BreadScrum.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default BreadScrum;

import "./Card.css"
import cardIcon from "../assets/cardIcon.png";

function Card({ children = {} }) {
  const { title = "Card Title", text = "This is a card text" } = children;
  return (
    <div className="card-container">
      <img src={cardIcon} alt="" />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Card;

import PropTypes from "prop-types";

export default function Card({ card, index: i }) {
  return (
    <figure
      className="portfolio-work-card"
      id={i === 0 ? "primary-work-card" : ""}
    >
      <a
        href={card.link}
        target="_blank"
        onClick={(e) => card.link === "" && e.preventDefault()}
        rel="noreferrer"
      >
        <img src={card.image} alt={card.title} />
      </a>
      <figcaption>
        <h3>{card.title}</h3>
        <p>{card.subtitle}</p>
      </figcaption>
      <div className="work-card-overlay"></div>
    </figure>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

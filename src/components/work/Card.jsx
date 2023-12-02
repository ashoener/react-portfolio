export default ({ card, index: i }) => {
  return (
    <figure
      className="portfolio-work-card"
      id={i === 0 ? "primary-work-card" : ""}
    >
      <a href={card.link} target="_blank">
        <img src={card.image} alt={card.title} />
      </a>
      <figcaption>
        <h3>{card.title}</h3>
        <p>{card.subtitle}</p>
      </figcaption>
      <div className="work-card-overlay"></div>
    </figure>
  );
};

import Card from "../components/work/Card.jsx";

import movieTime from "/resources/images/movie-time.png";

const cards = [
  {
    link: "https://movie-time.dev.133700.xyz/",
    title: "Movie Time",
    subtitle: "Express/MySQL/Timeline.js",
    image: movieTime,
  },
];

export default () => {
  return (
    <div className="portfolio-items">
      <section id="work" className="portfolio-item">
        <header className="portfolio-item-header">
          <h1>Work</h1>
        </header>
        <article className="portfolio-item-content">
          <div className="portfolio-work-cards">
            {cards.map((card, i) => (
              <Card card={card} index={i} key={card.title} />
            ))}
          </div>
        </article>
      </section>
    </div>
  );
};

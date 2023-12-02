import { memo } from "react";

import Card from "../components/portfolio/Card.jsx";

import movieTime from "/resources/images/movie-time.png";
import travelEats from "/resources/images/travel-eats.png";
import landingPage from "/resources/images/landing-page.png";

const cards = [
  {
    link: "https://movie-time.dev.133700.xyz/",
    title: "Movie Time",
    subtitle: "Express/MySQL/Timeline.js",
    image: movieTime,
  },
  {
    link: "https://ashoener.github.io/travel-eats/",
    title: "Travel Eats",
    subtitle: "HTML/CSS/JS",
    image: travelEats,
  },
  {
    link: "https://ashoener.github.io/landing-page/",
    title: "Landing Page",
    subtitle: "HTML/CSS",
    image: landingPage,
  },
];

// Add a placeholder card if there's an even number of cards
if (!(cards.length & 1)) {
  cards.push({
    link: "",
    title: "Placeholder",
    subtitle: "Lang/Lang",
    image: "https://placehold.co/600x300",
  });
}

export default memo(function Portfolio() {
  document.title = "Andrew Shoener | Portfolio";
  return (
    <div className="portfolio-items">
      <section id="work" className="portfolio-item">
        <header className="portfolio-item-header">
          <h1>Portfolio</h1>
        </header>
        <article className="portfolio-item-content">
          <div className="portfolio-work-cards">
            {cards.map((card, i) => (
              <Card card={card} index={i} key={i} />
            ))}
          </div>
        </article>
      </section>
    </div>
  );
});

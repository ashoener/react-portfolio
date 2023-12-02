import { memo } from "react";

export default memo(() => {
  document.title = "Andrew Shoener | 404";
  return (
    <div className="portfolio-items">
      <h1>404</h1>
      <hr />
      <h3>Page not found</h3>
    </div>
  );
});

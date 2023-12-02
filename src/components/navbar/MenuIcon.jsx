import PropTypes from "prop-types";

export default function MenuIcon({ action }) {
  return (
    <div className="menu-icon" onClick={action}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

MenuIcon.propTypes = {
  action: PropTypes.func.isRequired,
};

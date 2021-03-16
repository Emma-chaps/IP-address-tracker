/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Header = ({ inputValue, handleInputChange, handleSubmit }) => {
  return (
    <header className="header">
      <h1 className="header__h1">IP Address Tracker</h1>
      <form className="header__form" onSubmit={handleSubmit}>
        <input
          className="header__form--input"
          type="text"
          value={inputValue}
          placeholder="Search for any Ip address or domain"
          onChange={handleInputChange}
        />

        <button
          className="header__form--button"
          type="button"
          onClick={handleSubmit}
        >
          <i className="fas fa-chevron-right chevron"></i>
        </button>
      </form>
    </header>
  );
};

Header.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

Header.defaultProps = {
  handleInputChange: () => {},
  handleSubmit: () => {},
};

export default Header;

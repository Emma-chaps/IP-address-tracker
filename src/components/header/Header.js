/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Header = ({
  inputValue,
  handleInputChange,
  handleSubmit,
  onSubmitBtn,
  loading,
}) => {
  return (
    <header className="header">
      <h1 className="header__h1">IP Address Tracker</h1>
      <div className="header__container-search">
        <form
          className="header__container-search__form"
          onSubmit={handleSubmit}
        >
          <input
            className="header__container-search__form--input"
            type="text"
            value={inputValue}
            placeholder="Search for any Ip address"
            onChange={handleInputChange}
          />

          <button
            className="header__container-search__form--button"
            type="button"
            onClick={handleSubmit}
          >
            <i className="fas fa-chevron-right chevron"></i>
          </button>
        </form>
        <div onClick={onSubmitBtn} className="header__container-search__btn">
          <div>Locate me !</div>
          {loading ? <div className="lds-dual-ring" /> : null}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  onSubmitBtn: PropTypes.func,
  loading: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  handleInputChange: () => {},
  handleSubmit: () => {},
  onSubmitBtn: () => {},
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Board = ({ data }) => (
  <main className="main">
    <div className="main__container">
      <h2 className="main__container--title">ip address</h2>
      <div className="main__container--infos">{data && data.ip}</div>
    </div>
    <div className="main__container">
      <h2 className="main__container--title">Location</h2>
      <div className="main__container--infos">
        {data && data.location.region}
        {data && ', '}
        {data && data.location.country}
      </div>
    </div>
    <div className="main__container">
      <h2 className="main__container--title">timezone</h2>
      <div className="main__container--infos">
        {data && 'UTC'} {data && data.location.timezone}
      </div>
    </div>
    <div className="main__container">
      <h2 className="main__container--title">ISP</h2>
      <div className="main__container--infos">{data && data.isp}</div>
    </div>
  </main>
);

Board.propTypes = {
  data: PropTypes.shape({
    ip: PropTypes.string,
    location: PropTypes.shape({
      region: PropTypes.string,
      country: PropTypes.string,
      timezone: PropTypes.string,
    }),
    isp: PropTypes.string,
  }),
};

Board.defaultProps = {
  data: {
    ip: '',
    location: {},
    isp: '',
  },
};

export default Board;

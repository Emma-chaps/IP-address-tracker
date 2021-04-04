import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = ({ google, location }) => (
  <Map google={google} initialCenter={location} center={location}>
    <Marker position={location} />
  </Map>
);

MapContainer.propTypes = {
  google: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(MapContainer);

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
  apiKey: 'AIzaSyD1jI6cVxE2eLycjoBpop0wcsBjQ95eDqw',
})(MapContainer);

import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import googleApiKey from 'config';

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name="Working place" />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleApiKey
})(MapContainer);

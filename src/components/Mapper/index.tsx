import React from 'react';
import { Container } from './styles';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
// Map -> MapContainer Problema
import { Link } from 'react-router-dom';

import 'leaflet/dist/leaflet.css';

const Mapper: React.FC = () => {
  return (
    <Container>
      <div className='map'>
        <MapContainer
          center={[-12.9355528, -38.4403034]}
          zoom={13}
          style={{ width: '100%', height: '100%' }}
        >
          <Marker position={[-12.9355528, -38.4403034]} />
          {/* <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        /> */}
          <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        </MapContainer>
      </div>
      <Link className="back-link" to="/map">
        Visualizar em Street View
      </Link>
    </Container>
  );
}

export default Mapper;
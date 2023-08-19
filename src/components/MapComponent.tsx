import React from 'react';
import { useQuery } from 'react-query';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression } from 'leaflet';

interface CountryData {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
  };
  active: number;
  recovered: number;
  deaths: number;
}

const MapComponent: React.FC = () => {
  const { data: countryData } = useQuery<CountryData[]>('countryData', () =>
    fetch('https://disease.sh/v3/covid-19/countries').then((response) => response.json())
  );
  console.log(countryData);

  return (
    <div className="mt-4 w-1/2">
      <h2 className="text-xl font-semibold mb-2">COVID-19 Map</h2>
      <MapContainer
        center={[0, 0]} zoom={2}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {countryData?.map((country) => (
        <Marker position={[country?.countryInfo?.lat,country?.countryInfo?.long]} >
          <Popup>
            <h2>{country.country}</h2>
            <p>Active: {country.active}</p>
            <p>Recovered: {country.recovered}</p>
            <p>Deaths: {country.deaths}</p>
          </Popup>
        </Marker>))}
      </MapContainer>
    </div>
  );
};

export default MapComponent

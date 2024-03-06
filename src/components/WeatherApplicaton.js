import { useState } from 'react';
import './WeatherApplication.css';
import Search from './Search';
import WeatherCard from './WeatherCard';
import { createMockServer } from '../../src/mock/createMockServer';

if (process.env.NODE_ENV === 'development') {
  createMockServer();
}

const WeatherApplication = () => {
  const [selected, setSelected] = useState([]);

  const selectCity = (city) => {
    setSelected([...selected, city]);
  };

  return (
    <div className='App'>
      <h1>Weather Application</h1>
      <Search onSelectItem={selectCity} />

      <div data-testid="my-weather-list" className='cities-container'>
        {selected && selected.map((city) =>
          <div key={`${city.lat}-${city.lon}`}>
            <WeatherCard city={city} />
          </div>
      )}
</div>
    </div>
  );
}

export default WeatherApplication;

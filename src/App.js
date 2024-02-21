import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';
import { createMockServer } from './createMockServer';

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

      <div data-testid="my-weather-list">
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

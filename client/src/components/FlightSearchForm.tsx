import { useEffect, useState } from 'react';
import axios from 'axios';
import { CityDropdown } from './CityDropdown';

interface IFlightProp {
  setFlights: any;
  setIsLoading: any;
}

export const FlightSearchForm: React.FC<IFlightProp> = ({
  setFlights,
  setIsLoading,
}) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [cities, setCities] = useState([]);
  const [isSourceFocused, setIsSourceFocused] = useState(false);
  const [isDestinationFocused, setIsDestinationFocused] = useState(false);

  const [query, setQuery] = useState({
    date: date,
    source: '',
    destination: '',
  });

  const setSourceData = (city: { cityCode: string; cityName: string }) => {
    setSource(`${city.cityName}, ${city.cityCode}`);
    setQuery({ ...query, source: city.cityCode });
    setIsSourceFocused(false);
  };

  const setDestinationData = (city: { cityCode: string; cityName: string }) => {
    setDestination(`${city.cityName}, ${city.cityCode}`);
    setQuery({ ...query, destination: city.cityCode });
    setIsDestinationFocused(false);
  };

  useEffect(() => {
    const getCities = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/cities` || 'localhost:3000/cities'
      );
      setCities(data);
    };
    getCities();
  }, []);

  const hanadleFlightRequest = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/flight-price`,
        {
          params: {
            date: query.date,
            src: query.source,
            dest: query.destination,
          },
        }
      );
      setFlights(data.flightsData);
    } catch (error) {
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <form className="flex flex-col items-center ">
      <div className="w-full flex flex-col gap-10 md:flex-row md:item">
        <div className="relative basis-[40%]">
          <label htmlFor="source" className="absolute top-[-25px]">
            Source
          </label>
          <input
            type="text"
            name="source"
            id="source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            onFocus={() => {
              setIsSourceFocused(true);
            }}
            className="border-2 rounded-sm w-full py-2 px-2 md:w-full"
          />
          {isSourceFocused && (
            <CityDropdown
              filterCity={source}
              data={cities}
              setData={setSourceData}
            />
          )}
        </div>
        <div className="relative basis-[40%]">
          <label htmlFor="destination" className="absolute top-[-25px]">
            Destination
          </label>
          <input
            type="text"
            name="destination"
            id="destination"
            value={destination}
            onFocus={() => setIsDestinationFocused(true)}
            onChange={(e) => setDestination(e.target.value)}
            className="border-2 rounded-sm w-full py-2 px-2 md:w-[100%]"
          />
          {isDestinationFocused && (
            <CityDropdown
              filterCity={destination}
              data={cities}
              setData={setDestinationData}
            />
          )}
        </div>
        <div className="relative basis-[20%]">
          <label htmlFor="date" className="absolute top-[-25px]">
            Select Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setQuery({ ...query, date: e.target.value });
            }}
            className="py-2 px-2 border-2 basis-[20%]"
          />
        </div>
      </div>
      <button
        type="button"
        className=" transition-all ease-in-out duration-200 text-lg text-gray-90 w-full border-solid border-2 border-gray-800 my-10 md:w-1/3 sm:px-4 sm:py-2 px-2 py-1 rounded-sm hover:bg-gray-800 hover:text-white"
        onClick={hanadleFlightRequest}
      >
        Get Flights
      </button>
    </form>
  );
};

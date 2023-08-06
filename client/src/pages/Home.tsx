import { useState } from 'react';
import { Header } from '../components/Header';
import { FlightSearchForm } from '../components/FlightSearchForm';
import { FlightDetails } from '../components/FlightDetails';
import { TailSpin } from 'react-loader-spinner';

interface ILoginProps {
  isLogin: Boolean;
}

export const Home: React.FC<ILoginProps> = ({}) => {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(isLoading);
  return (
    <div className="w-[80vw] mx-auto">
      <Header text={'Get go to price of flights in seconds...'} />
      <FlightSearchForm setFlights={setFlights} setIsLoading={setIsLoading} />
      {isLoading ? (
        <p className="flex w-full justify-center">
          <TailSpin />
        </p>
      ) : flights.length > 0 ? (
        <FlightDetails flights={flights} />
      ) : (
        <h2 className="text-center">No flights to show</h2>
      )}
    </div>
  );
};

interface IFlightsProp {
  flights: {
    airline: string;
    flightNumber: string;
    logoUrl: string;
    price: number;
  }[];
}

export const FlightDetails: React.FC<IFlightsProp> = ({ flights }) => {
  console.log(flights);

  return (
    <div className="lg:w-[50vw] mx-auto">
      <div className="grid grid-cols-3 text-xs justify-items-center font-bold lg:text-lg">
        <p>Logo</p>
        <p>Flight No.</p>
        <p>Price</p>
      </div>
      {flights.map((flight) => (
        <div
          key={flight.flightNumber}
          className="grid grid-cols-3 text-xs items-center justify-items-center my-5 border-b-2 md:text-lg"
        >
          <img
            className="w-[50px]"
            src={flight.logoUrl}
            alt={flight.flightNumber}
          />
          <p>
            {flight.airline} - {flight.flightNumber}
          </p>
          <p>₹ {flight.price.toFixed()}</p>
        </div>
      ))}
    </div>
  );
};

interface ICities {
  data: { _id: string; cityCode: string; cityName: string }[];
  filterCity: string;
  setData: any;
}

export const CityDropdown: React.FC<ICities> = ({
  filterCity,
  data,
  setData,
}) => {
  const filteredElements = data
    .filter((data) => {
      return (
        data.cityName.toLowerCase().includes(filterCity.toLowerCase()) ||
        data.cityCode.toLowerCase().includes(filterCity.toLowerCase())
      );
    })
    .map((city) => {
      return (
        <h2
          className="cursor-pointer border-b-2 py-2"
          key={city._id}
          onClick={() => setData(city)}
        >{`${city.cityName}, ${city.cityCode}`}</h2>
      );
    });

  return (
    <>
      {filteredElements.length > 0 && (
        <div className="absolute bg-white px-3 py-3 w-full top-[40px] z-10 border-2 h-[40vh] overflow-scroll">{filteredElements}</div>
      )}
    </>
  );
};

interface IHeaderProps {
  text: string;
}

export const Header: React.FC<IHeaderProps> = ({text}) => {
  return (
    <h1 className="text-[20px] text-gray-500 text-center my-10 sm:text-[25px] sm:my-[150px] md:text-[30px] lg:text-[40px]">{text}</h1>
  )
}

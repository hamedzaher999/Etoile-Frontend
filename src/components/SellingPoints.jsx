const SellingPoints = (props) => {
  const { title, description, icon } = props;
  return (
    <div className="flex-col flex font-serif  w-[100px]  md:w-[240px] m-2">
      <img src={icon} alt="" className=" pointer-events-none" />

      <h3 className="pointer-events-none capitalize font-serif md:text-2xl text-sm font-bold">
        {title}
      </h3>
      <p className="description text-[10px]  font-serif inset-0 items-center md:text-[12px]  text-gray-500 ml-0 m-2 hover:text-blue-500 cursor-pointer">
        {description}
      </p>
    </div>
  );
};

export default SellingPoints;

const Comment = ({ name, comment, photo }) => {
  return (
    <div className="pointer-events-none  max-w-40 md:max-w-56 pb-2 md:m-4 m-2 bg-[#3b0a4783] p-1 border-white border rounded-[30px] ">
      <div className="flex flex-row items-center ">
        <div className="w-11 h-11 sm:w-14 sm:h-14 m-2  overflow-hidden rounded-full">
          {
            <img
              src={photo}
              alt="img"
              className="h-full w-full object-contain object-center "
            />
          }
        </div>
        <p className="text-lg pl-3 font-serif"> {name}</p>
      </div>
      <p className=" font-serif overflow-hidden pl-6 py-3 text-[10px] md:text-sm max-h-24  flex-wrap text-wrap">
        {comment}
      </p>
    </div>
  );
};

export default Comment;

import { StarsCanvas } from "../canvas";
import { comments } from "../../constant";
import planetImg from "../../assets/try/panetp3.png";
import Comment from "../Comment";
const CommentSection = () => {
  return (
    <section className=" pb-[150px]  relative  min-h-screen w-full  ">
      <img
        src={planetImg}
        alt="s"
        className="  absolute  bottom-0 pointer-events-none "
      />
      <StarsCanvas color={"#07000c"} />
      <div className=" text-center w-full">
        <h5 className=" pointer-events-none capitalize text-center text-[#6a0b81]  font-bold text-2xl  md:text-4xl md:pt-11 pt-8 font-serif ">
          What our client think About us
        </h5>

        <p className="cursor-pointer hover:text-blue-300 px-14 xl:px-60 py-2 font-serif text-gray-500 text-[10px] md:text-[15px]">
          Here's what chocolate lovers from around the world are saying about
          their journey with us.
        </p>
      </div>
      <div>
        <div className=" md:pt-4 pt-2 flex flex-wrap justify-center px-3 ">
          {comments.map((comment) => (
            <Comment
              key={comment.name}
              name={comment.name}
              comment={comment.comment}
              photo={comment.photo}
            />
          ))}
        </div>
      </div>

      <div className="lg:flex-row flex flex-col w-full justify-between pt-10">
        <div className="w-full px-24  pt-2 pb-2 lg:max-w-[550px] text-center  justify-center content-center items-center flex flex-col  ">
          <p className="mb-2 font-serif text-gray-400 lg:text-[12px] text-[10px] hover:text-blue-300 ">
            Your journey through the chocolate galaxy should be flawless. Tell
            us if a meteor gets in your way!{" "}
          </p>
          <button
            className="w-full rounded-lg bg-[#6a0b81] px-4 py-1 text-[14px] lg:text-[14px] text-white shadow-lg 
           transition-transform font-serif duration-300 ease-in-out hover:scale-110"
          >
            Report a Meteor
          </button>
        </div>

        <div className="w-full px-24  pt-2 pb-2 lg:max-w-[550px] text-center  justify-center content-center items-center flex flex-col  ">
          <p className="mb-2 font-serif text-gray-400 lg:text-[12px] text-[10px] hover:text-blue-300 ">
            if Your journey through the chocolate galaxy was good we glad to
            share your experience!{" "}
          </p>
          <button
            className="w-full rounded-lg bg-[#6a0b81] px-4 py-1 text-[14px] lg:text-[14px] text-white shadow-lg 
           transition-transform font-serif duration-300 ease-in-out hover:scale-110"
          >
            share your journey.
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommentSection;

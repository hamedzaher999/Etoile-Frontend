import StarsCanvas from "../../../canvas/Stars";
import Review from "../components/Review";
import halfPlanet from "../../../../assets/planets/halfPlanet.png";

import { useState } from "react";
import { MessageCircleMore, ShieldAlert } from "lucide-react";

import { useGetReviews } from "../../../../api/services/home_service/reviews";

import SendReviewDialog from "../components/SendReviewDialog";
import SendReportDialog from "../components/SendReportDialog";

import RegisterAlert from "../../../shared/RegisterAlert";
import { useUserStore } from "../../../../store/user.store";
import AppDialog from "../../../customs/AppDialog";

const ReviewSection = () => {
  const { name } = useUserStore();

  const [action, setAction] = useState("");

  const { data: result } = useGetReviews();

  return (
    <section className="pointer-events-auto relative min-h-screen overflow-hidden pb-[140px] pt-8">
      {/* shine */}
      <div className="absolute left-[-180px] top-[150px] h-[420px] w-[420px] rounded-full bg-purple-600/20 blur-[140px]" />
      <div className="absolute bottom-[120px] right-[-180px] h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute -bottom-[150px] left-[-250px] h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-[100px]" />
      {/* bottom planet img */}
      <img
        src={halfPlanet}
        alt="planet"
        className="absolute bottom-0 left-1/2 z-0 w-[700px] -translate-x-1/2 select-none transition-opacity duration-300 hover:opacity-100"
      />
      <StarsCanvas color={"#07000c"} />

      {/* review dialog */}
      <AppDialog
        show={action === "review"}
        closeCallback={() => {
          setAction("");
        }}
      >
        <SendReviewDialog />
      </AppDialog>
      {/* report dialog */}

      <AppDialog
        show={action === "report"}
        closeCallback={() => {
          setAction("");
        }}
      >
        <SendReportDialog />
      </AppDialog>

      {/*  register dialog */}
      <AppDialog
        show={action === "register"}
        closeCallback={() => {
          setAction("");
        }}
      >
        <RegisterAlert />
      </AppDialog>

      <div className="relative z-10">
        <div className="mx-auto max-w-[950px] px-6 text-center">
          <p className="mb-5 text-[11px] uppercase tracking-[0.55em] text-purple-300">
            Cosmic Testimonials
          </p>

          <h2 className="app-text-gradient font-serif text-4xl font-black leading-tight md:text-6xl">
            What Our Explorers
            <br />
            Think About Us
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-sm leading-[2] text-white/60 md:text-lg">
            Chocolate lovers from around the world have traveled
            through our galaxy of flavors. Their stories reflect
            unforgettable journeys, celestial craftsmanship, and
            experiences designed beyond imagination.
          </p>
        </div>

        {/* reviews */}
        <div className="relative z-10 mt-20 flex flex-wrap justify-center gap-6 px-4">
          {result?.data?.data.map((r, i) => {
            console.log(r);
            return (
              <div key={i}>
                <Review
                  name={r.account_name}
                  review={r.comment}
                  img={r.account_avatar || undefined}
                  // TODO check the name of these tow fields
                  is_vip={r.is_vip_client}
                  rate={r.rating}
                />
              </div>
            );
          })}
        </div>
        {/*  */}
        <div className="relative z-10 mx-auto mt-24 flex max-w-[1300px] flex-col gap-8 px-6 lg:flex-row">
          {/* review card */}
          <div className="group relative flex-1 overflow-hidden rounded-[32px] border border-white/10 bg-black/25 p-8 shadow-[0_0_50px_rgba(120,0,255,0.12)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-[8px]">
            <div className="absolute -top-32 left-1/2 h-[200px] w-[200px] -translate-x-1/2 rounded-full bg-purple-500/30 blur-[110px] transition-colors duration-300 group-hover:bg-purple-500/50" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full border border-purple-400/20 bg-white/[0.03] text-cyan-300">
                <MessageCircleMore size={28} />
              </div>

              <p className="mb-3 text-[11px] uppercase tracking-[0.45em] text-cyan-300">
                Share Experience
              </p>

              <h3 className="text-2xl font-black tracking-tight text-white">
                Share Your Journey
              </h3>

              <p className="mt-5 max-w-[420px] text-sm leading-[2] text-white/60">
                If your voyage through the chocolate galaxy was
                unforgettable, let the universe hear your story and
                inspire future explorers.
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setAction(name ? "review" : "register");
                }}
                className="mt-8 rounded-full border border-purple-400/20 bg-black/30 px-8 py-3 font-serif text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-300/30 hover:shadow-[0_0_40px_rgba(120,0,255,0.2)]"
              >
                Share Your Journey
              </button>
            </div>
          </div>

          {/* report card */}
          <div className="group relative flex-1 overflow-hidden rounded-[32px] border border-red-400/10 bg-black/25 p-8 shadow-[0_0_50px_rgba(255,0,80,0.08)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-[8px]">
            <div className="absolute -top-32 left-1/2 h-[200px] w-[200px] -translate-x-1/2 rounded-full bg-red-500/50 blur-[110px] transition-colors duration-300 group-hover:bg-red-500/70" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full border border-red-400/20 bg-white/[0.03] text-red-300">
                <ShieldAlert size={28} />
              </div>

              <p className="mb-3 text-[11px] uppercase tracking-[0.45em] text-red-300">
                Report Issue
              </p>

              <h3 className="text-2xl font-black tracking-tight text-white">
                Report a Meteor
              </h3>

              <p className="mt-5 max-w-[420px] text-sm leading-[2] text-white/60">
                Your cosmic experience should always be flawless. If
                something disrupted your orbit, notify our command
                center immediately.
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setAction(name ? "report" : "register");
                }}
                className="pointer-events-auto mt-8 rounded-full border border-red-400/20 bg-black/30 px-8 py-3 font-serif text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-red-300/40 hover:shadow-[0_0_40px_rgba(255,0,80,0.15)]"
              >
                Report a Meteor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;

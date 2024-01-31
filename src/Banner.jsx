import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-[#0C2D57] py-20 text-white text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Book Your Doctor Appointment Today
        </h1>
        <p className="text-lg mb-8"></p>
       
        <button>
          <NavLink
            to="/booknow"
            className="bg-white text-blue-500 py-2 px-4 rounded-full font-semibold hover:bg-blue-200"
          >
            Book Appointment
          </NavLink>
        </button>
      </div>
    </section>
  );
};

export default Banner;

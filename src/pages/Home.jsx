import React from "react";
import Card from "../components/Card";
import Mobile from "../assets/mobile.png";
import Water from "../assets/water.png";
import Waterboiler from "../assets/water-boiler.png";
import Pipes from "../assets/pipes.png";

const Home = () => {
  return (
    <div
      id="assignment"
      className="py-10 px-5 "
      style={{
        background: "linear-gradient(165deg, #2a1768 50%, #f3f4f6 50%)",
      }}
    >
      <h1 className="text-white font-bold text-3xl mx-48  pb-5">
        OUR SERVICES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-10  xl:mx-48 ">
        <Card
          icon={Mobile}
          title="Emergency Plumbing Services"
          description="Our plumbers are ready to go 24/7 for emergencies - including nights, weekends, and holidays."
          linkText="Explore This Service"
        />

        <Card
          icon={Pipes}
          title="Plumbing and Drains"
          description="As the largest plumbing and drain service company, we make thousands of repairs every day."
          linkText="Explore This Service"
        />

        <Card
          icon={Water}
          title="Water Damage"
          description="Our teams are equipped with state-of-the-art water extraction and cleanup equipment."
          linkText="Explore This Service"
        />

        <Card
          icon={Waterboiler}
          title="Water Heaters"
          description="Trust us for repair and replacement of gas, electric, and tankless water heaters."
          linkText="Explore This Service"
        />
      </div>
    </div>
  );
};

export default Home;

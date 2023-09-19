import React from "react";
import SectionTite from "./SectionTitle";

const TreatmentOverview = () => {
  return (
    <>
      <div className="section-left" id="overview">
        <SectionTite title={"Treatment Overview"} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          porta posuere neque quis bibendum. Ut nec sapien mi. Phasellus
          dignissim est quis ipsum pharetra bibendum. Mauris tristique venenatis
          justo, non dapibus elit pretium eget. Mauris nisl ex, venenatis eget
          consectetur quis, sodales tempor diam.
        </p>
        <p>
          Maecenas nec elit id massa cursus tempus ut rhoncus massa. Donec
          finibus lacinia diam, et laoreet sem egestas eu. In id sodales enim,
          at vulputate velit. Etiam pulvinar consectetur dui, nec faucibus orci
          dictum nec. Vivamus bibendum sed libero eu euismod. Aliquam dignissim
          tincidunt dignissim. Nullam quis enim in nisi semper varius sit amet
          eget neque. Nulla commodo dictum nisl et venenatis.Phasellus dignissim
          est quis ipsum pharetra bibendum. Mauris tristique venenatis justo,
          non dapibus elit pretium eget. Mauris nisl ex, venenatis eget
          consectetur quis, sodales tempor diam.
        </p>
        <p>
          Quisque nec nunc dignissim, laoreet nibh a, consectetur turpis. Proin
          tempor metus vel sagittis sagittis.Phasellus dignissim est quis ipsum
          pharetra bibendum. Mauris tristique venenatis justo, non dapibus elit
          pretium eget. Mauris nisl ex, venenatis eget consectetur quis, sodales
          tempor diam.
        </p>
      </div>
      <div className="section-right">
        <img
          src="https://media.istockphoto.com/id/1373659740/photo/shot-of-a-young-doctor-sharing-information-from-his-digital-tablet-with-an-older-patient.jpg?s=612x612&w=0&k=20&c=xi-5BceyNKDF919oSK3GheekuIGTJ5Jl3ccWopz47LE="
          alt="treatment"
          className="image"
        />
      </div>
    </>
  );
};

export default TreatmentOverview;

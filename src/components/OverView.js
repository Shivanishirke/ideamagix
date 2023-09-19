import React from "react";
import Stories from "./Stories";
import TreatmentOverview from "./TreatmentOverview";
import SectionTite from "./SectionTitle";
import NeedHelpForm from "./NeedHelpForm";

const sections = [
  {
    id: "eligibility",
    label: "Eligibility For Treatment",
  },
  { id: "preparation", label: "Preparation Before Treatment" },
  { id: "about", label: "About Treatment" },
  { id: "post-treatment", label: "Post-Treatment Care" },
  { id: "recovery", label: "Recovery Tips" },
];

export default function OverView() {
  return (
    <div className="section main-container">
      <div className="content-container">
        <TreatmentOverview />
      </div>

      <div className="flex">
        <section className="section-left-2">
          {sections.map((section) => (
            <div className="content-container" id={section.id}>
              <div>
                <SectionTite title={section.label} />

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent porta posuere neque quis bibendum. Ut nec sapien mi.
                  Quisque nec nunc dignissim, laoreet nibh a, consectetur
                  turpis. Pellentesque ac lacus sed libero dictum convallis sed
                  sit amet turpis. Duis sed odio enim. Donec faucibus dictum
                  risus, et faucibus ligula lacinia sed. Aenean at gravida dui,
                  at efficitur eros. Morbi faucibus vel augue sed tincidunt. Ut
                  vehicula purus non magna feugiat, et semper dolor congue. In
                  tincidunt odio in dui consectetur, nec fermentum lorem
                  blandit. Mauris posuere ipsum non orci imperdiet, non dictum
                  diam varius. Quisque pretium erat at erat scelerisque, vel
                  mollis quam commodo. Aenean arcu tortor, condimentum et
                  posuere sit amet, egestas a leo.
                </p>

                <p>In general, gastric bypass could be a good option if:</p>

                <ul className="list">
                  <li className="list-item">
                    The BMI(body mass index) is 40 or more
                  </li>
                  <li>
                    Your BMI is 30 or more with severe weight-related health
                    conditions like type-2 diabetes and high
                  </li>
                  <li>
                    You are willing to make permanent changes in the lifestyle
                  </li>
                </ul>
              </div>
            </div>
          ))}

          <div className="content-conatiner">
            <div className="header">
              <span className="title">Treatment FAQs</span>
              <hr />
              <span>
                + How do I know the clinic I am searching is verified?
              </span>
              <hr />
              <span>
                + I can't travel alone so can some family member or friend of
                mine accompany me
              </span>
              <hr />
              <span>
                - Can I see my doctor before I decide and what about my post
                recovery?
              </span>
              <hr />
              <span>
                Yes,pre and post treatment consulation can be done.You can speak
                to the doctor at the most appropriate time
              </span>
              <span>
                (before you decide to travel) to boost your confidence.The team
                Mediretreats will also help you with arranging
              </span>
              <span>the OPS's after the surgeries.</span>
              <hr />
              <span>
                + How do I share my reports and medical cases with the clinic of
                my choice?
              </span>
            </div>
          </div>
        </section>
        <section className="">
          <NeedHelpForm />
        </section>
      </div>

      <Stories />
    </div>
  );
}

import React, { useEffect } from "react";
import OverView from "./OverView";

const tabs = [
  {
    id: "overview",
    label: "Overview",
  },
  {
    id: "eligibility",
    label: "Eligibility",
  },
  {
    id: "preparation",
    label: "Preparation",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "post-treatment",
    label: "Post-treatment Care",
  },
  {
    id: "recovery",
    label: "Recovery",
  },

  {
    id: "faq",
    label: "FAQs",
  },

  {
    id: "stories",
    label: "Patient Stories",
  },
];
const Tabs = () => {
  const onTabClickHandle = (event, name, id) => {
    let tablinks, i;

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = "tablinks ";
    }

    event.currentTarget.className += " active";
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (document.getElementById(tabs[0].label)) {
      let tablinks = document.getElementsByClassName("tablinks");
      tablinks[0].className += " active";
    }
  }, []);

  return (
    <>
      <div class="tab">
        <div className="section">
          {tabs.map((tab, i) => (
            <a
              className="tablinks "
              id={tab.label}
              href={`#${tab.id}`}
              onClick={(e) => {
                e.preventDefault();
                onTabClickHandle(e, tab.label, tab.id);
              }}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>

      <OverView />
    </>
  );
};

export default Tabs;

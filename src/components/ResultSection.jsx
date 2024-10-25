import React from "react";
import Section from "./Section";

function ResultSection({ result }) {
  const sections = [
    { title: "Causes", items: result.causes },
    { title: "Symptoms", items: result.symptoms },
    { title: "Treatment", items: result.treatment },
    { title: "Prevention", items: result.prevention },
    { title: "Diet", items: result.Diet },
    { title: "Related Conditions", items: result.related_conditions },
    { title: "Examples", items: result.examples },
  ];
  
  return (
    <div>
      {sections.map(
        (section, index) =>
          section.items && (
            <Section key={index} title={section.title} items={section.items} />
          )
      )}
    </div>
  );
}

export default ResultSection;

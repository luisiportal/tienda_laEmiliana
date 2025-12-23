import React from "react";
import type { LinkPage } from "../../types/General.type";

const PaginationModule = ({
  links,
  setPage,
}: {
  links: LinkPage[];
  setPage: React.Dispatch<React.SetStateAction<string>>;
}) => {


  const labelPage = (label: string) => {
    switch (true) {
      case label.includes("previous"):
        return (label = "Anterior");
      case label.includes("next"):
        return (label = "Siguiente");

      default:
        return label;
    }
  };

  return (
    <div className="flex justify-center">
      <section className="flex flex-wrap gap-3 p-2">
        {" "}
        {links.map((link, index) => (
          <button
            key={index}
            className="bg-azulPortal text-white font-semibold p-1 min-w-8 flex  justify-center items-center rounded-lg cursor-pointer"
            disabled={link.url === null}
            onClick={() => setPage(link.url)}
          >
            {labelPage(link.label)}
          </button>
        ))}
      </section>
    </div>
  );
};

export default PaginationModule;

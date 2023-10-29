import Navbar from "@/components/body/Navbar";
import Footer from "@/components/organism/Footer";
import dynamic from "next/dynamic";
import React, { useMemo } from "react";

const Terminal = () => {
  const markers = [
    // Lagos
    {
      position: [6.495422, 3.206448],
      name: "Badagry Terminal",
      description: "Oppsite Ojo Barrack, Lagos",
    },
    {
      position: [6.5244, 3.2792],
      name: "Ikotun Terminal Island",
      description: "Beside Olagram Business and upscale ltd.",
    },
    {
      position: [6.5244, 3.3792],
      name: "Lekki",
      description: "Fast-growing residential area in Lagos",
    },
    {
      position: [6.5544, 3.3492],
      name: "Ikeja terminal",
      description: "Computer Villege Park",
    },
    {
      position: [6.5244, 3.3792],
      name: "Surulere",
      description: "A residential and commercial area in Lagos",
    },

    // Kano

    {
      position: [12.0022, 8.5919],
      name: "Kano Zoo Terminal",
      description: "A zoo located in Kano",
    },
    {
      position: [12.0022, 8.5919],
      name: "Kano State Government House Terminal",
      description: "Official residence of the Governor of Kano State",
    },
    {
      position: [12.0022, 8.5919],
      name: "Bayero University Kano Terminal",
      description: "A prominent public university in Kano",
    },

    // Abuja
    {
      position: [9.0579, 7.4951],
      name: "Aso Rock Terminal",
      description: "A notable rock formation in Abuja",
    },

    // Kwara (Ilorin)
    {
      position: [8.4961, 4.552],
      name: "Ilorin Central Mosque",
      description: "A prominent mosque in Ilorin",
    },
  ];
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/organism/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div>
      <div className="bg-mainc">
        <Navbar />
      </div>
      <Map markers={markers} center={[6.5244, 3.3792]} zoom={12} />
      <Footer />
    </div>
  );
};

export default Terminal;

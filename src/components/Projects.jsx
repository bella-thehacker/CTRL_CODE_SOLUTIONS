import { FocusCards } from "./FocusCards";

export function Projects() {
  const cards = [
    {
      title: "Vista Hotels",
      src: "./vista.png",
      gif: "./vistagif.gif",
    description: "A comprehensive project showcasing a fully functional hotel website.",
    },
    {
      title: "Drive Noble",
      src: "./drive2.jpg",
      gif: "./drivegif.gif",
    description: "A Website for a car dealership company, showcasing a wide range of vehicles and services.",
    },
    {
      title: "Pet Tracker",
      src: "./petpal.jpg",
      gif: "petpalgif.gif",
    description: "An application that helps pet owners track their pets' location and health.",
    },
    {
      title: "Bayside International school",
      src: "./bayside2.jpg",
      gif: "./baysidegif.gif",
    description: "A school website that showcases the school's mission, vision, and values.",
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gif: "./vistagif.gif",
    description: "A comprehensive project showcasing a hotel management system.",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
      gif: "drivegif.gif",
    description: "A comprehensive project showcasing a hotel management system.",
    },
  ];

  return <FocusCards cards={cards} />;
}

import workerImg from "@/public/images/help_station_workers.svg";
import firstAidImg from "@/public/images/help_station_firstaid.svg";
import cprTeamImg from "@/public/images/help_statiun_cprteam.svg";
import serviceLineImg from "@/public/images/help_station_serviceline.svg";
import ambcylceImg from "@/public/images/help_station_ambcycle.svg";
import rapidResponseImg from "@/public/images/helpStation_rapid_response_image.svg";
import hospitalCareImg from "@/public/images/help_station_hospitalcare.svg";
import image7 from "@/public/images/help_station_ambcycle.svg";
import image8 from "@/public/images/help_station_hearse.svg";
import partnersImageOne from "@/public/images/help_clients_one.svg";
import partnersImageTwo from "@/public/images/help_client_two.svg";
import partnersImageThree from "@/public/images/help_client_three.svg";
import testimonyOne from "@/public/images/testimony_one.svg";
import testimonyTwo from "@/public/images/testomony_two.svg";
import testimonyThree from "@/public/images/testimoney_three.svg";

export const swiperImages = [
  {
    header: "Traffic is no barrier, at &nbsp; HELP we got you covered ",
    text: "Subscribe to the Ambucycle Plan for swift emergency response whenever you need it, ensuring immediate access to expert care and assistance in critical situations.",
    img: image7,
    action1: {
      label: "Get Started",
      href: '/subscription'
    }
  },
  {
    header: "Who can you bank on when an emergency happens ?",
    text: " HelpStation is your trusted partner in any medical emergency. We are here to provide you with prompt end-to-end emergency care, ensuring your safety and peaceof mind, always.",
    img: workerImg,
    action1: {
      label: "Get Started",
      href: '/subscription'
    }
  },
  {
    header: "Be more than just a bystander, Be an Hero ",
    text: "Master vital skills like first aid, CPR, and other life-saving techniques to react swiftly and effectively in emergencies. That may just be the difference between life and loss.",
    img: firstAidImg,
    action1: {
      label: "Get Started",
      href: '/subscription'
    }
  },
  {
    // replace this
    header: "Our First Aid + CPR Training is now digital!!!",
    text: "Be trained and ready from the comfort of your home through our new self-paced digital training.",
    img: cprTeamImg,
    action1: {
      label: "Start Learning",
      href: '/services/ambulance-form'
    }
  },
  {
    header: "Swiftly request an ambulance ",
    text: "Prompt Emergency Response When Every Second Counts with our streamlined processes. Enjoy swift coordination, real-time updates, and efficient service to ensure you receive the help you need.",
    img: serviceLineImg,
    action1: {
      label: "Get Started",
      href: '/subscription'
    }
  },
  {
    header: "Rapid Response ",
    text: "Whether you need an ambulance or first responder immediately or want to schedule one for a future event, HelpStation streamlines the process for you. Our platform ensures quick and efficient access to emergency services",
    img: rapidResponseImg,
    action1: {
      label: "Get Started",
      href: '/subscription'
    }
  },
  {
    header: "Emergency-Ready Hospitals ",
    text: "Our partnership with emergency ready hospitals across the state, ensure you have better access to high quality emergency care and guarantee a seamless transition from pre-hospital care to hospital care.",
    img: hospitalCareImg,
    action1: {
      label: "Get Started",
      href: '/subscription'
    }
  },
  {
    header: "Traffic is no barrier, at HELP we got you covered ",
    text: "Subscribe to the Ambucycle Plan for swift emergency response whenever you need it, ensuring immediate access to expert care and assistance in critical situations.",
    img: ambcylceImg,
    action1: {
      label: "Get Started",
      href: '/subscription'
    }
  },
  {
    header: "Order a Hearse with Comfort and Ease ",
    text: "Losing a loved one is painful enough. Let us ease the burden with a compassionate, stress-free hearse arrangement.",
    img: image8,
    action1: {
      label: "Get Started",
      href: '/subscription'
    }
  },
];

export const helpCount = [
  { count: "200+", text: "Total Response" },
  { count: "60+", text: "Emergency Ready Hospital" },
  { count: "190+", text: "Number Of Ambulance " },
];

export const clientsImages = [
  partnersImageOne,
  partnersImageTwo,
  partnersImageThree,
];

export const testimonials = [
  {
    image: testimonyOne,
    title: "HelpStations Exceeds Expectations",
    content:
      " 'HelpStations processes are seamless! Our medical emergency needs are always met in a timely manner. They are a health service provider I'll keep using and referring everyone!",
    author: "Ayomikun",
    role: "Lala's Management - Creative Director",
  },
  {
    image: testimonyTwo,
    title: "''HelpStations Professional Paramedics",
    content:
      "HelpStations’ paramedics are extremely professional. They were very composed and swift in attending to the emergency situation at my event",
    author: "Mrs F. ",
    role: "(Catholic Church of Divine Mercy)",
  },
  {
    image: testimonyThree,
    title: "Walure Capital Partners with HelpStation",
    content:
      "Walure Capital partnered with HelpStation for the WalureFit Event, impressed by their dedication and medical support. Their team provided essential care, ensuring peace of mind and a successful event. We look forward to future collaborations.",
     author: "GM",
    role: "(Walure Capital)",
  },
];

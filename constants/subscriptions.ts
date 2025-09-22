export const AMBUCYCLE_PLANS: IPlan[] = [
  {
    title: "Basic Responder Plan",
    price: 20000,
    features: [
      "First responder dispatch to site for care treatment & coordination <strong>(5 call out per year) </strong>",
      "24/7 coverage and response through the Help Station Call Center (available for support)",
      "Access to the HELP Mobile App",
      "Referral to Emergency - Ready Hospitals on HELP Platform",
      "Access to ambulance transfer service if needed. Call-out fee applies",
      "<strong>Restricted to plan owner</strong>",
    ],
    color: "green",
    bgColor: "green",
    icon: "icons/green_check_circle.svg",
  },
  {
    title: "Advanced Responder Plan",
    price: 35000,
    features: [
      "First responder dispatch to site for care treatment & coordination  <strong>(7 call-outs per year) </strong>",
      "24/7 coverage and response through the Help Station Call Center (available for support)",
      "Access to HELP Mobile App",
      "Referral to Emergency - Ready Hospitals on HELP Platform",
      "<strong>For Plan owner & 2 family members</strong>",
    ],
    color: "orange",
    bgColor: "orange",
    icon: "icons/orange_check_circle.svg",
  },
  {
    title: "Family Responder Plan",
    price: 55000,
    features: [
      "First responder dispatch to site for care treatment & coordination <strong>(10 call-outs per year)</strong>",
      "24/7 coverage and response through the Help Station Call Center (available for support)",
      "Access to HELP Mobile App",
      "Referral to Emergency - Ready Hospitals on HELP Platform",
      "<strong>For Plan owner & 3 family members</strong>",
    ],
    color: "yellow",
    bgColor: "yellow",
    icon: "icons/golden_yellow_check_circle.svg",
  },
];

export const AMBULANCE_SUBSCRIPTION_PLANS: IPlan[] = [
  {
    title: "Basic Ambulance Plan",
    price: 55000,
    features: [
      "Ambulance dispatch to site for medical care and transfer <strong>(1 call out per year) </strong>",
      "First responder dispatch to site for care treatment & coordination <strong>(1 call out per year) </strong>",
      "24/7 coverage and response through the Help Station Call Center (available for support)",
      "Access to the HELP Mobile App",
      "Referral to Emergency - Ready Hospitals on HELP Platform",
      "<strong>Covers plan owner and up 3 family members </strong>",
    ],
    color: "wine",
    bgColor: "wine",
    icon: "icons/golden_wine_check_circle.svg",
  },
  {
    title: "Deluxe Ambulance Plan",
    price: 65000,
    features: [
      "Ambulance dispatch to site for medical care and transfer <strong>(1 call out per year) </strong>",
      "First responder dispatch to site for care treatment & coordination <strong>(3 call out per year) </strong>",
      "24/7 coverage and response through the Help Station Call Center (available for support)",
      "Access to the customer mobile app",
      "Referral to Emergency - Ready Hospitals on HELP Platform",
      "<strong>Covers plan owner and up 3 family members</strong>",
    ],
    color: "wine",
    bgColor: "wine",
    icon: "icons/golden_wine_check_circle.svg",
  },
  {
    title: "Premium Ambulance Plan",
    price: 110000,
    features: [
      "Ambulance dispatch to site for care treatment & coordination <strong>(10 call-outs per year)</strong>",
      "First responder dispatch to site for care treatment & coordination <strong>(5 call out per year) </strong>",
      "24/7 coverage and response through the Help Station Call Center (available for support)",
      "Access to the customer mobile app",
      "Referral to Emergency - Ready Hospitals on HELP Platform",
      "<strong>Covers plan owner and up 3 family members</strong>",
    ],
    color: "wine",
    bgColor: "wine",
    icon: "icons/golden_wine_check_circle.svg",
  },
];


export const plansData = [AMBUCYCLE_PLANS, AMBULANCE_SUBSCRIPTION_PLANS];
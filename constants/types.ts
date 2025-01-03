export type EventProps = {
  email: string;
  phoneNumber: string;
  clientOrCompanyName: string;
  eventType: string;
  eventLocation: string;
  eventDate: "";
  eventCapacity: string;
  eventStart: string;
  eventDuration: string;
  NumberOfAmbulanceParamedic: number;
  eventDays: number;
  otherInformation: string;
  standByAmbulance: string;
  standByParamedic: string;
};

export type AmbulanceProps = {
  companyName: string;
  contactName: string;
  contactEmail: string;
  CACRegistrationNumber: number;
  typeOfAmbulance: string;
  contactPersonName: string;
  contactPhoneNumber: number;
  numberOfAmbulance: number;
  location: string;
  avalability: number;
  HEFAMAAAccreditation: boolean;
};

export type HearseProps = {
  companyName: string;
  contactEmail: string;
  Website: string;
  contactPersonName: string;
  contactPhoneNumber: number;
  typeOfHearse: string;
  numberOfHearse: number;
  geographicCoverageArea: string;
  availability: number;
  insuranceDetails: string;
  contractWithFuneralHomes: string;
  certificationAndAccreditation: string;
  yearsOfExperienceInAmbulance: string;
  additionServicesOffered: string;
};

export type EmergencyHositalProps = {
  facilityName: string;
  contactEmail: string;
  Website: string;
  contactPersonName: string;
  contactPhoneNumber: number;
  facilityAddress: string;
  location: string;
  otherLocation: boolean;
  specifyIfAnyOtherLocation: string;
  HEFAMAAAccreditation: boolean;
  checkfacility: {
    operatingTheatre: boolean;
    intensiveCareUnit: boolean;
    highDependencyUnit: boolean;
  };
};

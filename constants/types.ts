import { COUNTRIES } from "./countries";

export type EventProps = {
  email: string;
  phoneNumber: string;
  clientOrCompanyName: string;
  eventType: string;
  eventLocation: string;
  eventDate: Date;
  eventCapacity: string;
  eventStartTime: string;
  eventDuration: string;
  NumberOfAmbulanceParamedic: string;
  eventDays: string;
  otherInformation: string;
  typeOfserviceRequired: {
    standByAmbulance: string;
    standByParamedic: string;
  };
  extraNurseOrDoctorOrParamedic: string;
};

export type AmbulanceProps = {
  companyName: string;

  contactEmail: string;
  CACRegistrationNumber: string;
  typeOfAmbulance: string;
  contactPersonName: string;
  contactPhoneNumber: string;
  numberOfAmbulance: string;
  location: string;
  avalability: string;
  HEFAMAAAccreditation: string;
};

export type HearseProps = {
  companyName: string;
  contactEmail: string;
  website: string;
  contactPersonName: string;
  contactPhoneNumber: string;
  typeOfHearse: string;
  numberOfHearse: string;
  geographicCoverageArea: string;
  availability: string;
  insuranceDetails: string;
  contractWithFuneralHomes: string;
  certificationAndAccreditation: string;
  yearsOfExperienceInAmbulance: string;
  additionServicesOffered: string;
};

export type EmergencyHositalProps = {
  companyName: string;
  contactEmail: string;
  website: string;
  contactPersonName: string;
  contactPhoneNumber: string;
  address: string;
  location: string;
  otherLocation: string;
  specifyIfAnyOtherLocation: string;
  HEFAMAAAccreditation: string;
  checkfacility: {
    facilityOperatingTheatre: string;
    facilityIntensiveCareUnit: string;
    facilityHighDependencyUnit: string;
  };
};

export type HSETrainingProps = {
  cleintOrCompanyName: string;
  email: string;
  phoneNumber: string;
  prefferredLocation: string;
  specificHSETraining: {
    specialHSELevel1_AwardHealthAndSafety: string;
    specialHSELevel2_RiskAssessmentPractical: string;
    specialHSELevel3_AwardEnvironmentalManagement: string;
    specialfireSafetyAwarenessPrinciples: string;
    specialHSEforConstructionSiteWorkers: string;
    specialHSEforConstructionSiteManagers: string;
    specialHSECompetence: string;
    specialHIRA: string;
    specialFSH: string;
    specialofficeSafety: string;
  };
  locationAddress: string;
  firstTimeCourseOrRefresherCourse: {
    firstTimeCourse: string;
    refresherCourse: string;
    bothCourse: string;
  };
  modeOfCommunication: string;
  preferredDate: Date;
  preferredTime: string;
  otherInformation: string;
};

export type FoodHandlerFormProps = {
  email: string;
  phoneNumber: string;
  testsinterestedIn: {
    HIVTest: string;
    HepatitisBTest: string;
    HepatitisCTest: string;
    SerumTuberculosisTest: string;
    PregnancyTest: string;
    UrinalysisTest: string;
    WidalTest: string;
    StoolAnalysisTest: string;
  };
  clientOrcompanyName: string;
  numberOfIndividualsTakingFoodHandlers: string;
  preferredLocation: {
    clientsLocation: string;
    recommendedByHELPStation: string;
  };
  locationIsOnsiteProvideAddress: string;
  preferredTime: string;
  modeOfCommunicationForFollowUp: string;
  preferredDate: Date;
  FSHTraining: string;
  additionalCommentOrNote: string;
};

export type FirstAidProps = {
  email: string;
  clientOrCompanyName: string;
  phoneNumber: string;
  preferredLocation: string;
  firstAidTraining: {
    onsite: string;
    venueRecommendedByHelpStaion: string;
  };
  firstAidTrainingRequest: {
    onsiteTraning: string;
    virtualTraining: string;
  };

  firstTimeCourseOrRefresherCourse: {
    firstTimeCourse: string;
    refresherCourse: string;
    bothCourse: string;
  };
  trainingDate: Date;
  trainingTime: string;
  traineesNumber: string;
  modeOfCommunication: string;
  lastTrainingConducted: string;
};

export type IOption = {
  list: string;
  listAnswers: string[];
  correctAnswer: string;
  answerValue: (correctAnswer: string) => number;
  previousValue: number;
};

export interface IQuestionItem {
  id: number;
  subQuestion?: string;
  question: string;
  options: string[] | IOption[];
  correctAnswer?: string;
  answerValue: () => number;
  previousValue: number;
}

export interface IQuestion {
  section: string;
  questions: IQuestionItem[];
  tractAnswersIndex: number[];
  title: string;
}

export type SelectMenuOption = (typeof COUNTRIES)[number];

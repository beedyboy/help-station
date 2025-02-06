import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      email,
      phoneNumber,
      cleintOrCompanyName,
      // prefferredLocation,
      // specificHSETraining: {
      //   specialHSELevel1_AwardHealthAndSafety,
      //   specialHSELevel2_RiskAssessmentPractical,
      //   specialHSELevel3_AwardEnvironmentalManagement,
      //   specialfireSafetyAwarenessPrinciples,
      //   specialHSEforConstructionSiteWorkers,
      //   specialHSEforConstructionSiteManagers,
      //   specialHSECompetence,
      //   specialHIRA,
      //   specialFSH,
      //   specialofficeSafety,
      // },
      // locationAddress,
      // firstTimeCourseOrRefresherCourse: {
      //   firstTimeCourse,
      //   refresherCourse,
      //   bothCourse,
      // },
      // modeOfCommunication,
      // preferredDat,
      // preferredTime,
      // otherInformation,
    } = body;

    // Example validation
    if (!email || !phoneNumber || !cleintOrCompanyName) {
      return NextResponse.json(
        {
          success: false,
          message: "Fields cannot be empty",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Error parsing request body: ", error);

    return NextResponse.json(
      {
        success: false,
        message: "Invalid request body",
      },
      { status: 400 }
    );
  }
}

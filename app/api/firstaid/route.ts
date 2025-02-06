import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      clientOrCompanyName,
      email,
      phoneNumber,
      preferredLocation,
      // firstAidTraining: { onsite, venueRecommendedByHelpStaion },
      // firstAidTrainingRequest: { onsiteTraning, virtualTraining },
      // trainingDate,
      // trainingTime,
      // traineesNumber,
      // modeOfCommunication,
      // firstTimeCourseOrRefresherCourse: {
      //   firstTimeCourse,
      //   refresherCourse,
      //   bothCourse,
      // },
      // lastTrainingConducted,
    } = body;

    // Example validation
    if (!clientOrCompanyName || !email || !phoneNumber || !preferredLocation) {
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

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("food body: ", body);

    const {
      email,
      phoneNumber,
      // testsinterestedIn: {
      //   HIVTest,
      //   HepatitisBTest,
      //   HepatitisCTest,
      //   SerumTuberculosisTest,
      //   PregnancyTest,
      //   UrinalysisTest,
      //   WidalTest,
      //   StoolAnalysisTest,
      // },
      // clientOrcompanyName,
      // numberOfIndividualsTakingFoodHandlers,
      // preferredLocation: { clientsLocation, recommendedByHELPStation },
      // locationIsOnsiteProvideAddress,
      // preferredTime,
      // modeOfCommunicationForFollowUp,
      // preferredDate,
      // FSHTraining,
      // additionalCommentOrNote,
    } = body;

    if (!email || !phoneNumber) {
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

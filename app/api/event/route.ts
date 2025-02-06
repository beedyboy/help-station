import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      email,
      phoneNumber,
      clientOrCompanyName,
      eventType,
      eventLocation,
      eventDate,
      // eventCapacity,
      // eventStartTime,
      // eventDuration,
      // NumberOfAmbulanceParamedic,
      // eventDays,
      // otherInformation,
      // typeOfserviceRequired: { standByAmbulance, standByParamedic },
      // extraNurseOrDoctorOrParamedic,
    } = body;

    console.log("Checking body: ", body);

    if (
      !email ||
      !phoneNumber ||
      !clientOrCompanyName ||
      !eventType ||
      !eventLocation ||
      !eventDate
    ) {
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

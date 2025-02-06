import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      companyName,
      contactEmail,
      CACRegistrationNumber,
      typeOfAmbulance,

      contactPhoneNumber,

      numberOfAmbulance,
    } = body;

    // Example validation
    if (
      !companyName ||
      !contactEmail ||
      !CACRegistrationNumber ||
      !typeOfAmbulance ||
      !contactEmail ||
      !contactPhoneNumber ||
      !numberOfAmbulance
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

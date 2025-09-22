import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  const body = await req.json();

  const {
    email,
    phoneNumber,
    testsinterestedIn: {
      HIVTest,
      HepatitisBTest,
      HepatitisCTest,
      SerumTuberculosisTest,
      PregnancyTest,
      UrinalysisTest,
      WidalTest,
      StoolAnalysisTest,
    },
    clientOrcompanyName,
    numberOfIndividualsTakingFoodHandlers,
    preferredLocation: { clientsLocation, recommendedByHELPStation },
    locationIsOnsiteProvideAddress,
    preferredTime,
    modeOfCommunicationForFollowUp,
    preferredDate,
    FSHTraining,
    additionalCommentOrNote,
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

  try {
    await sendEmail({
      to: process.env.CONTACT_ADMIN as string as string,
      subject: "Food Handler Form",
      html: `<h1>New Food Handler and Medical Test Request</h1>
<table>
  <tr>
    <th>Field</th>
    <th>Value</th>
  </tr>
  <tr>
    <td><strong>Email:</strong></td>
    <td>${email}</td>
  </tr>
  <tr>
    <td><strong>Phone Number:</strong></td>
    <td>${phoneNumber}</td>
  </tr>
  <tr>
    <td><strong>HIV Test:</strong></td>
    <td>${HIVTest}</td>
  </tr>
  <tr>
    <td><strong>Hepatitis B Test:</strong></td>
    <td>${HepatitisBTest}</td>
  </tr>
  <tr>
    <td><strong>Hepatitis C Test:</strong></td>
    <td>${HepatitisCTest}</td>
  </tr>
  <tr>
    <td><strong>Serum Tuberculosis Test:</strong></td>
    <td>${SerumTuberculosisTest}</td>
  </tr>
  <tr>
    <td><strong>Pregnancy Test:</strong></td>
    <td>${PregnancyTest}</td>
  </tr>
  <tr>
    <td><strong>Urinalysis Test:</strong></td>
    <td>${UrinalysisTest}</td>
  </tr>
  <tr>
    <td><strong>Widal Test:</strong></td>
    <td>${WidalTest}</td>
  </tr>
  <tr>
    <td><strong>Stool Analysis Test:</strong></td>
    <td>${StoolAnalysisTest}</td>
  </tr>
  <tr>
    <td><strong>Client/Company Name:</strong></td>
    <td>${clientOrcompanyName}</td>
  </tr>
  <tr>
    <td><strong>Number of Individuals Taking Food Handlers:</strong></td>
    <td>${numberOfIndividualsTakingFoodHandlers}</td>
  </tr>
  <tr>
    <td><strong>Client's Location:</strong></td>
    <td>${clientsLocation}</td>
  </tr>
  <tr>
    <td><strong>Recommended by HELPStation:</strong></td>
    <td>${recommendedByHELPStation}</td>
  </tr>
  <tr>
    <td><strong>Location (If Onsite, Provide Address):</strong></td>
    <td>${locationIsOnsiteProvideAddress}</td>
  </tr>
  <tr>
    <td><strong>Preferred Time:</strong></td>
    <td>${preferredTime}</td>
  </tr>
  <tr>
    <td><strong>Mode of Communication for Follow-Up:</strong></td>
    <td>${modeOfCommunicationForFollowUp}</td>
  </tr>
  <tr>
    <td><strong>Preferred Date:</strong></td>
    <td>${preferredDate}</td>
  </tr>
  <tr>
    <td><strong>FSH Training:</strong></td>
    <td>${FSHTraining}</td>
  </tr>
  <tr>
    <td><strong>Additional Comment or Note:</strong></td>
    <td>${additionalCommentOrNote}</td>
  </tr>
</table>`,
    });

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

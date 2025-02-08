import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  const body = await req.json();

  const {
    clientOrCompanyName,
    email,
    phoneNumber,
    preferredLocation,
    firstAidTraining: { onsite, venueRecommendedByHelpStaion },
    firstAidTrainingRequest: { onsiteTraning, virtualTraining },
    trainingDate,
    trainingTime,
    traineesNumber,
    modeOfCommunication,
    firstTimeCourseOrRefresherCourse: {
      firstTimeCourse,
      refresherCourse,
      bothCourse,
    },
    lastTrainingConducted,
  } = body;

  if (!clientOrCompanyName || !email || !phoneNumber || !preferredLocation) {
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
      to: process.env.FIRSTAID_AMIN as string,
      subject: "New First Aid Form",
      html: `<h1>New First Aid Training Request</h1>
<table>
  <tr>
    <th>Field</th>
    <th>Value</th>
  </tr>
  <tr>
    <td><strong>Client/Company Name:</strong></td>
    <td>${clientOrCompanyName}</td>
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
    <td><strong>Preferred Location:</strong></td>
    <td>${preferredLocation}</td>
  </tr>
  <tr>
    <td><strong>Onsite Training:</strong></td>
    <td>${onsite}</td>
  </tr>
  <tr>
    <td><strong>Venue Recommended by HelpStation:</strong></td>
    <td>${venueRecommendedByHelpStaion}</td>
  </tr>
  <tr>
    <td><strong>Onsite Training Request:</strong></td>
    <td>${onsiteTraning}</td>
  </tr>
  <tr>
    <td><strong>Virtual Training Request:</strong></td>
    <td>${virtualTraining}</td>
  </tr>
  <tr>
    <td><strong>Training Date:</strong></td>
    <td>${trainingDate}</td>
  </tr>
  <tr>
    <td><strong>Training Time:</strong></td>
    <td>${trainingTime}</td>
  </tr>
  <tr>
    <td><strong>Number of Trainees:</strong></td>
    <td>${traineesNumber}</td>
  </tr>
  <tr>
    <td><strong>Mode of Communication:</strong></td>
    <td>${modeOfCommunication}</td>
  </tr>
  <tr>
    <td><strong>First-Time Course:</strong></td>
    <td>${firstTimeCourse}</td>
  </tr>
  <tr>
    <td><strong>Refresher Course:</strong></td>
    <td>${refresherCourse}</td>
  </tr>
  <tr>
    <td><strong>Both Courses:</strong></td>
    <td>${bothCourse}</td>
  </tr>
  <tr>
    <td><strong>Last Training Conducted:</strong></td>
    <td>${lastTrainingConducted}</td>
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

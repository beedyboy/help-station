import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    email,
    phoneNumber,
    clientOrCompanyName,
    eventType,
    eventLocation,
    eventDate,
    eventCapacity,
    eventStartTime,
    eventDuration,
    NumberOfAmbulanceParamedic,
    eventDays,
    otherInformation,
    typeOfserviceRequired: { standByAmbulance, standByParamedic },
    extraNurseOrDoctorOrParamedic,
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

  try {
    await sendEmail({
      to: process.env.EVENT_AMIN as string,
      subject: "New Event Form",
      html: `<h1>New Event Ambulance Service Request</h1>
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
    <td><strong>Client/Company Name:</strong></td>
    <td>${clientOrCompanyName}</td>
  </tr>
  <tr>
    <td><strong>Event Type:</strong></td>
    <td>${eventType}</td>
  </tr>
  <tr>
    <td><strong>Event Location:</strong></td>
    <td>${eventLocation}</td>
  </tr>
  <tr>
    <td><strong>Event Date:</strong></td>
    <td>${eventDate}</td>
  </tr>
  <tr>
    <td><strong>Event Capacity:</strong></td>
    <td>${eventCapacity}</td>
  </tr>
  <tr>
    <td><strong>Event Start Time:</strong></td>
    <td>${eventStartTime}</td>
  </tr>
  <tr>
    <td><strong>Event Duration:</strong></td>
    <td>${eventDuration}</td>
  </tr>
  <tr>
    <td><strong>Number of Ambulance/Paramedic:</strong></td>
    <td>${NumberOfAmbulanceParamedic}</td>
  </tr>
  <tr>
    <td><strong>Event Days:</strong></td>
    <td>${eventDays}</td>
  </tr>
  <tr>
    <td><strong>Other Information:</strong></td>
    <td>${otherInformation}</td>
  </tr>
  <tr>
    <td><strong>Standby Ambulance:</strong></td>
    <td>${standByAmbulance}</td>
  </tr>
  <tr>
    <td><strong>Standby Paramedic:</strong></td>
    <td>${standByParamedic}</td>
  </tr>
  <tr>
    <td><strong>Extra Nurse/Doctor/Paramedic:</strong></td>
    <td>${extraNurseOrDoctorOrParamedic}</td>
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

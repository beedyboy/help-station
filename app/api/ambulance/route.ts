import { sendEmail } from "@/lib/email";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const {
    companyName,
    contactEmail,
    CACRegistrationNumber,
    typeOfAmbulance,
    contactPersonName,
    contactPhoneNumber,
    location,
    avalability,
    HEFAMAAAccreditation,
    numberOfAmbulance,
  } = body;

  if (
    !companyName ||
    !contactEmail ||
    !CACRegistrationNumber ||
    !typeOfAmbulance ||
    !contactEmail
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
      to: process.env.AMBULANCE_AMIN as string,
      subject: "",
      html: `<h1>New Ambulance Form</h1>
<table>
  <tr>
    <th>Field</th>
    <th>Value</th>
  </tr>
  <tr>
    <td><strong>Company Name:</strong></td>
    <td>${companyName}</td>
  </tr>
  <tr>
    <td><strong>Contact Email:</strong></td>
    <td>${contactEmail}</td>
  </tr>
  <tr>
    <td><strong>CAC Registration Number:</strong></td>
    <td>${CACRegistrationNumber}</td>
  </tr>
  <tr>
    <td><strong>Type of Ambulance:</strong></td>
    <td>${typeOfAmbulance}</td>
  </tr>
  <tr>
    <td><strong>Contact Person Name:</strong></td>
    <td>${contactPersonName}</td>
  </tr>
  <tr>
    <td><strong>Contact Phone Number:</strong></td>
    <td>${contactPhoneNumber}</td>
  </tr>
  <tr>
    <td><strong>Location:</strong></td>
    <td>${location}</td>
  </tr>
  <tr>
    <td><strong>Availability:</strong></td>
    <td>${avalability}</td>
  </tr>
  <tr>
    <td><strong>HEFAMAA Accreditation:</strong></td>
    <td>${HEFAMAAAccreditation}</td>
  </tr>
  <tr>
    <td><strong>Number of Ambulances:</strong></td>
    <td>${numberOfAmbulance}</td>
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

import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  const body = await req.json();

  const {
    companyName,
    contactEmail,
    website,
    contactPersonName,
    contactPhoneNumber,
    typeOfHearse,
    numberOfHearse,
    geographicCoverageArea,
    availability,
    insuranceDetails,
    contractWithFuneralHomes,
    certificationAndAccreditation,
    yearsOfExperienceInAmbulance,
    additionServicesOffered,
  } = body;

  if (!companyName || !contactEmail || !contactEmail) {
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
      to: process.env.CONTACT_ADMIN as string,
      subject: "New Hearse Form",
      html: `<h1>New Hearse Service Registration</h1>
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
    <td><strong>Website:</strong></td>
    <td>${website}</td>
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
    <td><strong>Type of Hearse:</strong></td>
    <td>${typeOfHearse}</td>
  </tr>
  <tr>
    <td><strong>Number of Hearse:</strong></td>
    <td>${numberOfHearse}</td>
  </tr>
  <tr>
    <td><strong>Geographic Coverage Area:</strong></td>
    <td>${geographicCoverageArea}</td>
  </tr>
  <tr>
    <td><strong>Availability:</strong></td>
    <td>${availability}</td>
  </tr>
  <tr>
    <td><strong>Insurance Details:</strong></td>
    <td>${insuranceDetails}</td>
  </tr>
  <tr>
    <td><strong>Contract with Funeral Homes:</strong></td>
    <td>${contractWithFuneralHomes}</td>
  </tr>
  <tr>
    <td><strong>Certification and Accreditation:</strong></td>
    <td>${certificationAndAccreditation}</td>
  </tr>
  <tr>
    <td><strong>Years of Experience in Ambulance Services:</strong></td>
    <td>${yearsOfExperienceInAmbulance}</td>
  </tr>
  <tr>
    <td><strong>Additional Services Offered:</strong></td>
    <td>${additionServicesOffered}</td>
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

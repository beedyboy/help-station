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
    address,
    location,
    otherLocation,
    specifyIfAnyOtherLocation,
    HEFAMAAAccreditation,
    checkfacility: {
      facilityOperatingTheatre,
      facilityIntensiveCareUnit,
      facilityHighDependencyUnit,
    },
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
      subject: "Emergency Form",
      html: `<h1>Emergency Form</h1>
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
    <td><strong>Address:</strong></td>
    <td>${address}</td>
  </tr>
  <tr>
    <td><strong>Location:</strong></td>
    <td>${location}</td>
  </tr>
  <tr>
    <td><strong>Other Location:</strong></td>
    <td>${otherLocation}</td>
  </tr>
  <tr>
    <td><strong>Specify If Any Other Location:</strong></td>
    <td>${specifyIfAnyOtherLocation}</td>
  </tr>
  <tr>
    <td><strong>HEFAMAA Accreditation:</strong></td>
    <td>${HEFAMAAAccreditation}</td>
  </tr>
  <tr>
    <td><strong>Facility Operating Theatre:</strong></td>
    <td>${facilityOperatingTheatre}</td>
  </tr>
  <tr>
    <td><strong>Facility Intensive Care Unit:</strong></td>
    <td>${facilityIntensiveCareUnit}</td>
  </tr>
  <tr>
    <td><strong>Facility High Dependency Unit:</strong></td>
    <td>${facilityHighDependencyUnit}</td>
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

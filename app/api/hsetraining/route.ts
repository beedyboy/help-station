import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  const body = await req.json();

  const {
    email,
    phoneNumber,
    cleintOrCompanyName,
    prefferredLocation,
    specificHSETraining: {
      specialHSELevel1_AwardHealthAndSafety,
      specialHSELevel2_RiskAssessmentPractical,
      specialHSELevel3_AwardEnvironmentalManagement,
      specialfireSafetyAwarenessPrinciples,
      specialHSEforConstructionSiteWorkers,
      specialHSEforConstructionSiteManagers,
      specialHSECompetence,
      specialHIRA,
      specialFSH,
      specialofficeSafety,
    },
    locationAddress,
    firstTimeCourseOrRefresherCourse: {
      firstTimeCourse,
      refresherCourse,
      bothCourse,
    },
    modeOfCommunication,
    preferredDate,
    preferredTime,
    otherInformation,
  } = body;

  if (!email || !phoneNumber || !cleintOrCompanyName) {
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
      subject: "New HSETraining Form",
      html: `<h1>New HSE Training Request</h1>
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
    <td>${cleintOrCompanyName}</td>
  </tr>
  <tr>
    <td><strong>Preferred Location:</strong></td>
    <td>${prefferredLocation}</td>
  </tr>
  <tr>
    <td><strong>Special HSE Level 1 - Award Health and Safety:</strong></td>
    <td>${specialHSELevel1_AwardHealthAndSafety}</td>
  </tr>
  <tr>
    <td><strong>Special HSE Level 2 - Risk Assessment Practical:</strong></td>
    <td>${specialHSELevel2_RiskAssessmentPractical}</td>
  </tr>
  <tr>
    <td><strong>Special HSE Level 3 - Award Environmental Management:</strong></td>
    <td>${specialHSELevel3_AwardEnvironmentalManagement}</td>
  </tr>
  <tr>
    <td><strong>Special Fire Safety Awareness Principles:</strong></td>
    <td>${specialfireSafetyAwarenessPrinciples}</td>
  </tr>
  <tr>
    <td><strong>Special HSE for Construction Site Workers:</strong></td>
    <td>${specialHSEforConstructionSiteWorkers}</td>
  </tr>
  <tr>
    <td><strong>Special HSE for Construction Site Managers:</strong></td>
    <td>${specialHSEforConstructionSiteManagers}</td>
  </tr>
  <tr>
    <td><strong>Special HSE Competence:</strong></td>
    <td>${specialHSECompetence}</td>
  </tr>
  <tr>
    <td><strong>Special HIRA:</strong></td>
    <td>${specialHIRA}</td>
  </tr>
  <tr>
    <td><strong>Special FSH:</strong></td>
    <td>${specialFSH}</td>
  </tr>
  <tr>
    <td><strong>Special Office Safety:</strong></td>
    <td>${specialofficeSafety}</td>
  </tr>
  <tr>
    <td><strong>Location Address:</strong></td>
    <td>${locationAddress}</td>
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
    <td><strong>Mode of Communication:</strong></td>
    <td>${modeOfCommunication}</td>
  </tr>
  <tr>
    <td><strong>Preferred Date:</strong></td>
    <td>${preferredDate}</td>
  </tr>
  <tr>
    <td><strong>Preferred Time:</strong></td>
    <td>${preferredTime}</td>
  </tr>
  <tr>
    <td><strong>Other Information:</strong></td>
    <td>${otherInformation}</td>
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

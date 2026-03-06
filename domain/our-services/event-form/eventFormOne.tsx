import InputTemplate from "@/components/input";
import { EventProps } from "@/constants/types";

function EventFormOne({
  eventForm,
  handleChange,
}: {
  eventForm: EventProps;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="w-full">
      <form
        action=""
        className="flex md:flex-row flex-col  gap-4 md:gap-16 items-start"
      >
        <div className="w-full flex flex-col gap-4 md:gap-8 md:w-[50%] ">
          <div>
            <InputTemplate
              type="email"
              labelName="Email"
              name="email"
              value={eventForm.email}
              onchange={handleChange}
              placeholder="Enter email"
            />
          </div>

          <div>
            <InputTemplate
              labelName="Phone Number"
              name="phoneNumber"
              type="tel"
              value={eventForm.phoneNumber}
              onchange={handleChange}
              placeholder="Enter phone number"
            />
          </div>

          <div>
            <InputTemplate
              labelName="Event Location ( Venue)"
              name="eventLocation"
              type="text"
              value={eventForm.eventLocation}
              onchange={handleChange}
              placeholder="Enter event location"
            />
          </div>

          <div>
            <InputTemplate
              labelName="Event Date"
              name="eventDate"
              type="date"
              value={eventForm.eventDate}
              onchange={handleChange}
              placeholder="Enter event date"
            />
          </div>
        </div>

        {/*  */}

        <div className="w-full flex flex-col  md:w-[50%] gap-4 md:gap-8">
          {/*  */}
          <div className="w-full">
            <InputTemplate
              type="text"
              labelName="Name of the Client/Company "
              name="clientOrCompanyName"
              value={eventForm.clientOrCompanyName}
              onchange={handleChange}
              placeholder="Enter client or company name"
            />
          </div>
          {/*  */}

          <div className="w-full">
            <InputTemplate
              type="text"
              labelName="Event Type ( Concert, Parties, Corporate )"
              name="eventType"
              value={eventForm.eventType}
              onchange={handleChange}
              placeholder="Enter event type"
            />
          </div>

          <div className="w-full">
            <InputTemplate
              type="number"
              labelName="Event Capacity e.g 1000, 2000"
              name="eventCapacity"
              value={eventForm.eventCapacity}
              onchange={handleChange}
              placeholder="Enter event capacity"
            />
          </div>

          <div className="w-full">
            <InputTemplate
              type="text"
              labelName="Event Start Time"
              name="eventStartTime"
              value={eventForm.eventStartTime}
              onchange={handleChange}
              placeholder="Enter event start time"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EventFormOne;

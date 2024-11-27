import InputTemplate from "@/components/input";
import { EventProps } from "@/constants/our-service";

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
        className="flex md:flex-row flex-col  gap-3 md:gap-16 items-start"
      >
        <div className="w-full flex flex-col gap-3 md:w-[50%] ">
          <div>
            <InputTemplate
              type="email"
              labelName="Email"
              name="email"
              value={eventForm.email}
              onchange={handleChange}
            />
          </div>

          <div>
            <InputTemplate
              labelName="Phone Number"
              name="phoneNumber"
              type="number"
              value={eventForm.phoneNumber}
              onchange={handleChange}
            />
          </div>

          <div>
            <InputTemplate
              labelName="Event Location ( Venue)"
              name="eventLocation"
              type="text"
              value={eventForm.eventLocation}
              onchange={handleChange}
            />
          </div>

          <div>
            <InputTemplate
              labelName="Event Date"
              name="eventDate"
              type="date"
              value={eventForm.eventDate}
              onchange={handleChange}
            />
          </div>
        </div>

        {/*  */}

        <div className="w-full flex flex-col  md:w-[50%] gap-3">
          {/*  */}
          <div className="w-full">
            <InputTemplate
              type="text"
              labelName="Name of the Client/Company "
              name="clientOrCompanyName"
              value={eventForm.clientOrCompanyName}
              onchange={handleChange}
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
            />
          </div>

          <div className="w-full">
            <InputTemplate
              type="number"
              labelName="Event Capacity e.g 1000, 2000"
              name="eventCapacity"
              value={eventForm.eventCapacity}
              onchange={handleChange}
            />
          </div>

          <div className="w-full">
            <InputTemplate
              type="text"
              labelName="Event Start Time"
              name="eventStart"
              value={eventForm.eventCapacity}
              onchange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EventFormOne;

import { useState } from "react";

// import DatePicker from "react-date-picker";
// import "react-date-picker/dist/DatePicker.css";
// import "react-calendar/dist/Calendar.css";
// import "@/css/datepicker.css"; //modify this, not the above

import Datepicker from "./datepicker/Datepicker";

export const dynamic = "force-dynamic";

const CreateCalendar = () => {
  const [startDate, setStartDate] = useState<any>(new Date());

  return (
    <div className="mt-8">
      <p className="text-white text-base font-semibold ">Start Date</p>
      <Datepicker />
      {/* <DatePicker
        className="mt-1"
        onChange={(date) => setStartDate(date)}
        value={startDate}
        minDate={new Date()}
      /> */}
    </div>
  );
};

export default CreateCalendar;

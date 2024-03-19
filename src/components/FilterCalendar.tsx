import { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "@/css/filtercalendar.css"; //modify this, not the above

export const dynamic = "force-dynamic";

// DELETE THIS FILE AFTER IMPLEMENTING CUSTOM FILTER DATEPICKER

const FilterCalendar = () => {
  const [specificDay, setSpecificDay] = useState<any>(new Date());

  return (
    <div className="mt-8">
      <p className="text-white text-base font-semibold">Specific Day</p>
      <DatePicker
        className=""
        onChange={(date) => setSpecificDay(date)}
        value={specificDay}
        minDate={new Date()}
      />
    </div>
  );
};

export default FilterCalendar;

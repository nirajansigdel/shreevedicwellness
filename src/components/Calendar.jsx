import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({ onChange, form2Data }) => {
  const today = new Date();
  const [startDate, setStartDate] = useState(today);

  const isDateSelectable = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set the time to midnight for accurate comparison
    return date >= today;
  };

  return (
    <div className="border rounded-md px-3 py-3">
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          onChange({ ...form2Data, class_date: date });
        }}
        minDate={today}
        filterDate={isDateSelectable}
      />
    </div>
  );
};

export default DatePickerComponent;

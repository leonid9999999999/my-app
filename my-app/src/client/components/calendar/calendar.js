import "./calendar.css";

import { useState } from "react";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import WrapperPicker from "./WrapperPicker"; // adjust path if needed

const Calendar = ({ values, setFieldValue, getCalendarData }) => {
  const [date, setDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (newValue) => {
    setFieldValue("date", newValue);
    setDate(dayjs(newValue).format("YYYY-MM-DD"));

    // fetch available times for selected date
    if (getCalendarData) {
      getCalendarData(newValue, setAvailableTimes);
    }

    // reset time when date changes
    setSelectedTime(null);
    setFieldValue("time", "");
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setFieldValue("time", time);
  };

  return (
    <div className="dataPickerTime">
      <WrapperPicker>
        <DatePicker
          sx={{ width: "100%" }}
          id="date"
          name="date"
          disablePast
          label="Select date"
          value={values.date ? dayjs(values.date) : null}
          onChange={handleDateChange}
        />
      </WrapperPicker>

      {date !== "" && (
        <div className="timeWrapper">
          <p>Select a time for the date {date}</p>

          <div className="available-times">
            {availableTimes.length !== 0 ? (
              availableTimes.map((time) => (
                <div
                  key={time}
                  className={`time-slot ${
                    selectedTime === time ? "selected" : ""
                  }`}
                  onClick={() => handleTimeSelect(time)}
                >
                  {time}
                </div>
              ))
            ) : (
              <p style={{ color: "red" }}>
                Sorry, we are fully booked. PLEASE PICK ANOTHER DATE
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;

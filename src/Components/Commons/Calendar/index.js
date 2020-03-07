import React, { Component } from "react";
import {
  CalendarWrapper,
  CalenderDateContainer,
  CalenderDetailsContainer,
  MonthWrapper, PickerWrapper,
  DetailsWrapper, MonthSelector,
  CalendarViewWrapper,
  DayViewWrapper,
  DayView,
  DateView
} from './styles'

class Calendar extends Component {
  state = {
    calendar: null,
    activeDate: null,
    availableDates: null,
    region: [],
    replays: { event: [], total: 0 },
    selectedUTC: null,
    replayFilter: false,
    surveyFilter: false,
  };

  render() {
    const {
      weeks,
      current: { month, year }
    } = this.getAllDatesAsWeeks();
    const { activeDate, availableDates } = this.state;
    this.regionList = [];
    return (
      <CalendarWrapper>
        <div className="calendar_row">
          <CalenderDateContainer>
            <PickerWrapper>
              <div className="hdr">

                <div className="calender-selector">
                  {/* <h5>Upcoming events</h5> */}
                  <MonthWrapper>
                    <MonthSelector>
                      <span onClick={this.goBackInTime}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.25rem"
                          height="1.25rem"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z" />
                        </svg>
                      </span>
                      <div className="mname">
                        {month} {year}
                      </div>
                      <span onClick={this.goForwardInTime}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.25rem"
                          height="1.25rem"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z" />
                        </svg>
                      </span>
                    </MonthSelector>
                  </MonthWrapper>
                </div>
              </div>
              <CalendarView
                availableDates={availableDates}
                activeNode={activeDate}
                handleDateSelect={this.handleDateSelect}
                weeks={weeks}
              />


            </PickerWrapper>
          </CalenderDateContainer>

          <CalenderDetailsContainer>
            <DetailsWrapper>
            </DetailsWrapper>

          </CalenderDetailsContainer>
        </div>
      </CalendarWrapper>
    );
  }

  goBackInTime = e => {
    const { activeDate } = this.state;

    // const day = activeDate.getDate()
    const month = activeDate.getMonth() - 1;
    let year = activeDate.getFullYear();

    const date = new Date(year, month, 1);

    this.fetchDateEventsForMonth(date)
  };

  goForwardInTime = e => {
    const { activeDate } = this.state;

    // const day = activeDate.getDate()
    const month = activeDate.getMonth() + 1;
    const year = activeDate.getFullYear();

    const date = new Date(year, month, 1);
    this.fetchDateEventsForMonth(date);
  };

  getAllDatesAsWeeks() {
    const now = this.state.activeDate || new Date();
    const month = now.getMonth();
    const year = now.getFullYear();

    const date = new Date(year, month, 1);
    let currentMonth = date.toLocaleString("en-us", { month: "long" });

    const weeks = [];
    let days = [];
    let dayCount = 0;
    const firstDay = date.getDay();

    while (date.getMonth() === month) {
      if (firstDay - dayCount <= 0) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
      } else {
        days.push(null);
      }

      if (++dayCount % 7 === 0) {
        weeks.push(days);
        days = [];
      }
    }

    return {
      weeks: [...weeks, days],
      current: {
        month: currentMonth,
        year
      }
    };
  }


  componentDidMount() {

    let now = new Date();

    this.fetchDateEventsForMonth(now);
  }

  handleDateSelect = date => {
    console.log('selected date ',date)
  };

  fetchDateEventsForMonth(date) {
    this.setState({
      activeDate: date,
    });
  }


  compareDates(d1, d2) {
    if (!d1 || !d2) return false;

    return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getYear() === d2.getYear()
    );
  }
}

// new working code

class CalendarView extends Component {
  weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  render() {
    const { weeks, activeNode, availableDates } = this.props;
    let lastDate = null;
    const dates = [...(availableDates || [])].filter(e => {
      const dt = new Date(e.date);
      if (!lastDate) {
        lastDate = dt;
        return true;
      }
      let isDup = this.compareDates(dt, lastDate);
      lastDate = dt;
      return !isDup;
    });

    return (
      <div>
        <CalendarViewWrapper>
          <DayViewWrapper>
            {this.weekDays.map((day,inx) => (
              <DayView key={inx}>{day}</DayView>
            ))}
          </DayViewWrapper>
          {weeks.map((w,inx) => {
            return (
              <div key={inx}>
                {w.map((d,inx) => {
                  const first = dates[0];
                  const active =
                    first && this.compareDates(d, new Date(first.date));

                  if (active) {
                    dates.splice(0, 1);
                  }

                  return (
                    <DateView key={inx}>
                      {d && (
                        <div
                          className={
                            this.compareDates(activeNode, d)
                              ? "dot actv"
                              : "dot"
                          }
                          onClick={this.handleDateSelect.bind(this, d)}
                        >
                          {d.getDate()}
                          {active && <span />}
                        </div>
                      )}
                    </DateView>
                  );
                })}
              </div>
            );
          })}
        </CalendarViewWrapper>
      </div>
    );
  }

  compareDates(d1, d2) {
    if (!d1 || !d2) return false;

    return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getYear() === d2.getYear()
    );
  }

  handleDateSelect(date) {
    this.props.handleDateSelect(date);
  }
}

export default Calendar;

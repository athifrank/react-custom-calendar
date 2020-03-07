import styled from 'styled-components';


export const primaryColor = "#5781b1";
export const CalendarWrapper = styled.header`
  margin: 2rem 1rem 3rem 3rem;
  display: flex;
  align-items: flex-start;

  .hdr {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: flex-start;
    }
    h5 {
        margin: 0;
        margin-top: 0.25rem;
        margin-left: 0.5rem;
        color: ${primaryColor};
    }

    svg {
      fill: ${primaryColor};
    }
    
    .calendar_row {
        display: table;
        width: 100%;
    }
`;

export const CalenderDateContainer = styled.div`
    display: table-cell;
    width: 30%;
    vertical-align: top;

    .calender_region {
      clear: both;
      background: #EEEEEE;
      padding: 1rem 2rem;
      margin-bottom: 5px;
      border-radius: 13px;
      margin-right: 5px;
    }
    .calender_region li {
      display: inline-block;
    }
    .calender_region li span {
        cursor: pointer;
      }
    .calender_region li.active span {
        background: #2196F3;
        color: #FFFFFF;
    }
    .event_replay {
      background: #EEEEEE;
      padding: 1rem 2rem;
      margin-bottom: 5px;
      border-radius: 13px;
      margin-right: 5px;
      min-height: 236px;
    }
    ul {
      padding-left: 0px;
      margin-top: 5px;
    }
    label {
      font-size: 0.75rem;
      font-weight: 600;
      color: #999;
      text-transform: capitalize;
    }
    .btn-border {
      font-size: 13px;
      background: #FFFFFF;
      box-shadow: 0px 3px 6px #00000029;
      border: 1px solid transparent;
      border-radius: 15px;
      padding: 0px 10px 2px;
      margin-right: 3px;
      color: #4A4A4A;
      font-weight: 600;
      text-transform: capitalize;
    }
    .event_replay li{
      display: inline-block;
      width: 50%;
      vertical-align: middle;
    }
    .event_replay .view-all{
      text-align: right;
      font-size: 0.75rem;
      font-weight: 600;
      color: #00447C;
      text-transform: capitalize;
    }
    .replay-list {

    }
`;

export const CalenderDetailsContainer = styled.div`
    display: table-cell;
    width: 70%;
    border: 1px solid #EEEEEE;
    border-radius: 13px;
`;

export const MonthWrapper = styled.div`
  color: #999;
`;

export const PickerWrapper = styled.div`
  margin-right: 0.5rem;
  background-color: #F4F7FA;
  padding: 1rem;
  border-radius: 13px;
  min-height: 24.5rem;
  margin-bottom: 7px;

  .calender-selector {
    width: 100%;
  }
`;

export const DetailsWrapper = styled.div`
    height: 850px;   
    position: relative;
`;

export const MonthSelector = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
  width: 100%;

  span {
    display: block;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    margin-right: 0.5rem;
    cursor: pointer;
    background-color: #f3f5f8;
    transition: all 500ms ease;
  }

  span svg {
    transition: all 500ms ease;
  }

  span:hover {
    background-color: ${primaryColor};
  }

  span:active {
    transform: scale(0.8);
  }

  span:hover svg {
    fill: #f3f5f8;
  }

  .mname {
    margin-right: 0.5rem;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.5rem;
    user-select: none;
    width: 6rem;
    text-align: center;
    width: 100%;
  }
`;



export const CalendarViewWrapper = styled.div`
  margin: 1rem 0rem 0 0rem;
  width: 25rem;
`;

export const DayViewWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #434e64;
  border-radius: 0.75rem;
`;

export const DayView = styled.div`
  width: calc(100% / 7);
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  font-weight: 300;
  color: #ce6c7d;
  color: white;
`;

export const DateViewWrapper = styled.div`
  overflow: hidden;
`;

export const DateView = styled.div`
  width: calc(100% / 7);
  color: ${primaryColor};
  cursor: pointer;
  float: left;
  margin-bottom: 0.2rem;

  .dot {
    border-radius: 35%;
    font-size: 0.75rem;
    width: 2rem;
    text-align: center;
    height: 2rem;
    line-height: 2rem;
    display: block;
    font-weight: 700;
    margin: 0.5rem auto;
    transition: all 300ms ease;
    user-select: none;
  }

  .dot:active {
    transform: scale(0.8);
  }

  .dot:hover {
    background-color: #8ac9c9;
    color: white;
  }

  .dot span {
    border-radius: 50%;
    background-color: #333;
    height: 5px;
    width: 5px;
    display: block;
    margin: auto;
    background-color: #58bd9b;
  }

  .inv {
    opacity: 0;
  }

  .actv {
    background-color: #8ac9c9;
    color: white;
  }
`;

export const ReplayWrapper = styled.a`
  height: 10rem;
  width: 100%;
  display: inline-block;
  border-radius: 13px;
  box-sizing: border-box;
  padding-right: 5px;
  position: relative;
  cursor: pointer;
  transition: all 300ms ease;

  :active {
      transform: scale(0.9)
  }

  .player-img {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 1.3rem;
    left: 3rem;
    fill: #ffffff80;
  }
`;

export const ReplayThumb = styled.div`
  height: 7rem;
  background-color: #f1f1f1;
  background-image: url(${props => props.thumb});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 13px 13px 0px 0px;
  ${props => props.thumb ==='' ?
    'background: transparent radial-gradient(closest-side at 50% 50%, #EEEEEE 0%, #777777 120%) 0% 0% no-repeat padding-box;'
    : ''
  }
 
`;

export const ReplayMeta = styled.div`
  padding: 0.5rem 0.5rem;
  height: 3rem;
  border-radius: 0 0 13px 13px;
  border: 1px solid #707070;
  position: relative;

  .video-stories {
    line-height: 0.5;
  }
  .video-stories svg {
    height: auto;
    width: auto;
    fill: #707070;
    position: absolute;
    right: 10px;
    top: 15px;
  }
`;

export const ReplayTitle = styled.div`
  width: 90%;;
  font-size: 0.85rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0;
  color: #4A4A4A;
  white-space: nowrap;
  display: inline-block;
`;


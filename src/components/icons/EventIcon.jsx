import eventIcon from "../../assets/event-icon.svg";
import eventIconGreen from "../../assets/Event-Icon-Green.svg";

export function EventIcon({ className, style }) {
  return <img style={style} className={className} src={eventIcon} alt="" />;
}

export function EventIconGreen({ className, style }) {
  return <img style={style} className={className} src={eventIconGreen} alt="" />;
}

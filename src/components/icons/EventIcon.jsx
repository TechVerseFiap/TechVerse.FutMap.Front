import eventIcon from "../../assets/event-icon.svg";

export default function EventIcon({ className, style }) {
  return <img style={style} className={className} src={eventIcon} alt="" />;
}

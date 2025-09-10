import eventIcon from "/Event-Icon.svg";

export default function EventIcon({ className, style }) {
  return <img style={style} className={className} src={eventIcon} alt="" />;
}

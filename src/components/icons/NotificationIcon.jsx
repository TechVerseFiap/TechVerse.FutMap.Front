import notificationIcon from "../../assets/notification-icon.svg";

export default function NotificationIcon({ className, style }) {
  return <img style={style} className={className} src={notificationIcon} alt="" />;
}

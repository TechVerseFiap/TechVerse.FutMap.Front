import notificationIcon from "../../assets/notification-icon.svg";
import notificationIconPurple from "../../assets/Notification-Icon-Purple.svg";

export function NotificationIcon({ className, style }) {
  return <img style={style} className={className} src={notificationIcon} alt="" />;
}

export function NotificationIconPurple({ className, style }) {
  return <img style={style} className={className} src={notificationIconPurple} alt="" />;
}

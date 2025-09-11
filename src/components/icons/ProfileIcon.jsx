import userIcon from "../../assets/Profile-Icon.svg";

export default function UserIcon({ className, style }) {
  return <img style={style} className={className} src={userIcon} alt="" />;
}

import userIcon from "../../assets/Profile-Icon.svg";
import userIconBlue from "../../assets/Profile-Icon-Blue.svg"

export function UserIcon({ className, style }) {
  return <img style={style} className={className} src={userIcon} alt="" />;
}

export function UserIconBlue({ className, style}){
  return <img style={style} className={className} src={userIconBlue} alt="" />;
}

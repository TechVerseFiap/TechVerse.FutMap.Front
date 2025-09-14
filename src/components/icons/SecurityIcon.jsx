import securityIcon from "../../assets/Security-Icon.svg";

export default function SecurityIcon({ className, style }) {
    return <img style={style} className={className} src={securityIcon} alt="" />;
}
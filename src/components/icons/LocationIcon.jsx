import locationIcon from "../../assets/Location-Icon.svg";

export default function LocationIcon({ className, style }) {
    return <img style={style} className={className} src={locationIcon} alt="" />;
}
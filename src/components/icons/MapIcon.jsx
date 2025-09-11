import mapIcon from "../../assets/Map-Icon.svg";

export default function MapIcon({ className, style }) {
    return <img style={style} className={className} src={mapIcon} alt="" />;
}
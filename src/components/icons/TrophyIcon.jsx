import emptyTrophyIcon from "../../assets/Trophy-Icon-Empty.svg";
import fullTrophyIcon from "../../assets/Trophy-Icon-Full.svg";

export function TrophyIconEmpty({ className, style }) {
    return <img style={style} className={className} src={emptyTrophyIcon} alt="" />;
}

export function TrophyIconFull({ className, style }) {
    return <img style={style} className={className} src={fullTrophyIcon} alt="" />;
}
import emptyTrophyIcon from "../../assets/Trophy-Icon-Empty.svg";
import fullTrophyIcon from "../../assets/Trophy-Icon-Full.svg";
import blackTrophyIcon from "../../assets/Trophy-Icon-Black.svg";

export function TrophyIconEmpty({ className, style }) {
    return <img style={style} className={className} src={emptyTrophyIcon} alt="" />;
}

export function TrophyIconFull({ className, style }) {
    return <img style={style} className={className} src={fullTrophyIcon} alt="" />;
}

export function TrophyIconBlack({ className, style }) {
    return <img style={style} className={className} src={blackTrophyIcon} alt="" />;
}
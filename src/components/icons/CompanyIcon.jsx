import companyIcon from "../../assets/Company-Icon.svg";

export default function CompanyIcon({ className, style }) {
  return <img style={style} className={className} src={companyIcon} alt="" />;
}

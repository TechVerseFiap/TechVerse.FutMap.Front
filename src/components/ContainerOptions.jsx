import ProfileOptions from "./ProfileOptions";

export default function ContainerOptions({ options = [], isAboutContainer = false, className = "" }) {
  return (
    <div className= { `flex flex-col bg-white  rounded-2xl ${className}  ${isAboutContainer == true ? "" : "gap-3 p-4"}` }>
      {options.map((option, index) => (
        <ProfileOptions
          key={index}
          leftIcon={option.leftIcon}
          color={option.color}
          title={option.title}
          titleColor={option.titleColor}
          description={option.description}
          descriptionColor={option.descriptionColor}
          rightIcon={option.rightIcon}
          onClick={option.onClick}
        />
      ))}
    </div>
  );
}

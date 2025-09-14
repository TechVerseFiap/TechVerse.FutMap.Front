import ProfileOptions from "./ProfileOptions";

export default function ContainerOptions({ options = [] }) {
  return (
    <div className="flex flex-col gap-3 bg-white p-4 rounded-2xl">
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

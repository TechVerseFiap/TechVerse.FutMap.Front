import AvatarUpload from "./AvatarUpload";

export default function ProfileHeader({ image, name, position, age, onAvatarClick }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-(--primary-color)">
      <AvatarUpload image={image} onClick={onAvatarClick} />

      <h2 className="mt-3 text-lg font-bold text-white">{name}</h2>

      <p className="text-sm text-white/90">
        {position} • {age} anos
      </p>
    </div>
  );
}

import { CameraIcon } from "./icons/Icons.jsx";

export default function AvatarUpload({ image }) {
  return (
    <div className="relative w-28 h-28">
      <div className="w-full h-full rounded-full border-2 border-white shadow-md overflow-hidden bg-white">
        {image ? (
          <img
            src={image}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>
    </div>
  );
}

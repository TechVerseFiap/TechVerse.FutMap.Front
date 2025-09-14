import CameraIcon from "./icons/CameraIcon";

export default function AvatarUpload({ image, onClick }) {
  return (
    <div className="relative w-28 h-28">
      <div className="w-full h-full rounded-full border-2 border-white shadow-md overflow-hidden bg-gray-500">
        {image ? (
          <img
            src={image}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>

      <button
        onClick={onClick}
        className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <CameraIcon className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
}

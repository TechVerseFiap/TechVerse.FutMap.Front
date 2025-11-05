export default function EmptyState({ message, icon }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 text-gray-500">
      {icon && <div className="mb-4 text-4xl">{icon}</div>}
      <p className="text-lg">{message}</p>
    </div>
  );
}

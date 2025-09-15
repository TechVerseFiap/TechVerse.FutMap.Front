export default function FormContainer({
  title,
  buttonText,
  onSubmit,
  footer,
  children,
}) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-96">
      <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
        {title}
      </h2>

      <form className="space-y-4" onSubmit={onSubmit}>
        {children}
      </form>

      {footer && <div className="mt-4 text-center text-sm">{footer}</div>}
    </div>
  );
}

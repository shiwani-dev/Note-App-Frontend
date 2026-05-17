function InputField({
  label,
  type,
  placeholder,
  register,
  name,
  rules,
  error,
}) {
  return (
    <div>
      <label className="text-sm font-medium text-white">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        className="w-full rounded-2xl border border-white/40 bg-violet-200 mt-2 px-3 py-2 sm:px-4 sm:py-3 text-sm outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
      />
      {error && <p className="text-red-400 text-sm mt-1">{error.message}</p>}
    </div>
  );
}

export default InputField;

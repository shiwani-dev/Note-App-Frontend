import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function AuthButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <button
        type="button"
        className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-violet-200 py-2 sm:py-3 text-xs sm:text-sm font-medium text-slate-700 transition hover:bg-gray-300"
      >
        <FcGoogle size={20} />
        Google
      </button>

      <button
        type="button"
        className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-violet-200 py-2 sm:py-3 text-xs sm:text-sm text-slate-700 transition hover:bg-gray-300"
      >
        <FaFacebook size={20} className="text-blue-600" />
        Facebook
      </button>
    </div>
  );
}

export default AuthButtons;

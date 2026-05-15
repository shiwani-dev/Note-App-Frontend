import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function LoginForm({ register, handleSubmit, errors, onSubmit, loading }) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-linear-to-br from-black via-purple-950 to-purple-700">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-2xl bg-white/25 p-5 sm:p-8 shadow-2xl space-y-4"
      >
        <div className="text-center">
          <h1 className="mb-2 text-xl sm:text-2xl text-white font-extrabold">
            Login
          </h1>
          <p className="mb-5 text-xs sm:text-sm text-white">
            Please enter your details to continue.
          </p>
        </div>

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

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <div className="h-px flex-1 bg-slate-300"></div>
          <span>or</span>
          <div className="h-px flex-1 bg-slate-300"></div>
        </div>

        <div>
          <label className="text-sm font-medium text-white">Email</label>

          <input
            type="email"
            autocomplete="one-time-code"
            autocorrect="off"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email",
              },
            })}
            className="w-full rounded-2xl border border-white/40 bg-violet-200 mt-2 px-3 py-2 sm:px-4 sm:py-3 text-sm outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
          />

          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-white">Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Min 6 characters",
              },
            })}
            className="w-full rounded-2xl border border-white/40 bg-violet-200 mt-2 px-3 py-2 sm:px-4 sm:py-3 text-sm outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
          />

          {errors.password && (
            <p className="text-red-400 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-violet-600 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-white text-sm">
          Don't have an account yet?{" "}
          <Link to="/signup" className="hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;

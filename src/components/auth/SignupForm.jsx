import { Link } from "react-router-dom";
import AuthButtons from "./AuthButtons";

function SignupForm({
  handleSubmit,
  onSubmit,
  register,
  errors,
  errorSignup,
  loadingSignup,
}) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-linear-to-br from-black via-purple-950 to-purple-700">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-xl border border-white/30 bg-white/25 p-5 sm:p-8 shadow-2xl backdrop-blur-md space-y-4"
      >
        <div className="text-center">
          <h1 className="mb-2 text-xl sm:text-2xl text-white font-extrabold">
            Sign Up
          </h1>
          <p className="mb-5 text-xs sm:text-sm text-white">
            Create your account and start organizing your notes.
          </p>
        </div>

        <div>
          <AuthButtons />
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <div className="h-px flex-1 bg-slate-300"></div>
          <span>or</span>
          <div className="h-px flex-1 bg-slate-300"></div>
        </div>

        <div>
          <label className="text-sm text-white font-medium">Full Name</label>
          <input
            placeholder="Enter your full name"
            {...register("name", {
              required: "Name is required",
            })}
            className="mt-2 w-full rounded-2xl border border-white/40 bg-violet-200 px-3 py-2 sm:px-4 sm:py-3 text-sm outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm text-white font-medium">Email</label>
          <input
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email",
              },
            })}
            className="mt-2 w-full rounded-2xl border border-white/40 bg-violet-200 px-3 py-2 sm:px-4 sm:py-3 text-sm outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm text-white font-medium">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            placeholder="Create a password"
            className="mt-2 w-full rounded-2xl border border-white/40 bg-violet-200 px-3 py-2 sm:px-4 sm:py-3 text-sm outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
          />
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
          {errorSignup && (
            <p className="text-red-400 text-sm mt-1">{errorSignup.message}</p>
          )}
        </div>

        <button
          disabled={loadingSignup}
          className="w-full rounded-xl bg-violet-600 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loadingSignup ? "Signing..." : "Signup"}
        </button>

        <p className="text-center text-white text-sm">
          Already have an account?{" "}
          <Link to="/" className="hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignupForm;

import { Link } from "react-router-dom";
import AuthButtons from "./AuthButtons";
import InputField from "./InputField";

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

        <AuthButtons />

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <div className="h-px flex-1 bg-slate-300"></div>
          <span>or</span>
          <div className="h-px flex-1 bg-slate-300"></div>
        </div>

        <InputField
          label="Email"
          type="email"
          placeholder="Enter your email"
          register={register}
          name="email"
          rules={{
            required: "Email is required",
            pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
          }}
          error={errors.email}
        />

        <InputField
          label="Password"
          type="password"
          placeholder="Enter your password"
          register={register}
          name="password"
          rules={{
            required: "Password is required",
            minLength: { value: 6, message: "Min 6 characters" },
          }}
          error={errors.password}
        />

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

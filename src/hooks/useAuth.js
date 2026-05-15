import { loginApi, signupApi } from "@/services/authApi";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useAuth() {
  const loginMutation = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || "Login failed");
    },
  });

  const signupMutation = useMutation({
    mutationFn: signupApi,
    onSuccess: (res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || "Signup failed");
    },
  });

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return {
    login: loginMutation.mutateAsync,
    loading: loginMutation.isPending,
    error: loginMutation.error,

    signup: signupMutation.mutateAsync,
    loadingSignup: signupMutation.isPending,
    errorSignup: signupMutation.error,

    logout,
  };
}

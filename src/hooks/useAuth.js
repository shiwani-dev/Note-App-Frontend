import { loginApi, signupApi } from "@/services/authApi";
import { useMutation } from "@tanstack/react-query";

export function useAuth() {

  const loginMutation = useMutation({
    mutationFn: ({ email, password }) =>
      loginApi({ email, password }),

    onSuccess: (res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
    }
  });

  const signupMutation = useMutation({
    mutationFn: ({ name, email, password }) =>
      signupApi({ name, email, password }),

    onSuccess: (res) => {
      localStorage.setItem("token", res.data.token);
    }
  });

  const logout = () => {
    localStorage.removeItem("token");
  };

  return {
    login: loginMutation.mutateAsync,
    loading: loginMutation.isPending,
    error: loginMutation.error,

    signup: signupMutation.mutateAsync,
    loadingSignup: signupMutation.isPending,
    errorSignup: signupMutation.error,

    logout
  };
}

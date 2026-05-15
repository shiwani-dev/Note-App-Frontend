import { loginApi } from "@/services/authApi";
import { useMutation } from "@tanstack/react-query";

export function useAuth() {
  const loginMutation = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
    },
  });

  const logout = () => {
    localStorage.removeItem("token");
  };

  return {
    login: loginMutation.mutateAsync,
    loading: loginMutation.isPending,
    error: loginMutation.error,

    logout,
  };
}

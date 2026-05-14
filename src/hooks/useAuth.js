import { loginApi, signupApi } from "@/services/authApi";
import {useMutation} from "@tanstack/react-query";

export function useAuth() {

  const loginMutation = useMutation({
    mutationFn: ({email, password}) => 
      loginApi({email, password}),
  

  onSuccess: (res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
  }
 });
 
  const signupMutation = useMutation({
    mutationFn: ({name, email, password}) =>
      signupApi({name, email, password}),

    onSuccess: (res) => {
      localStorage.setItem("token", res.data.token);
    }
  });

  const logout = () => {
    localStorage.removeItem("token");
  };

  return {
    login: loginMutation.mutate,
    loading: loginMutation.isPending,
    error: loginMutation.error,

    signup: signupMutation.mutate,
    loadingSignup: signupMutation.isPending,
    errorSignup: signupMutation.error,
    
     logout
     };
}


/* import { useState } from "react";
import { loginApi, signupApi } from "@/services/authApi";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async ({ email, password },callback) => {
    try {
      setLoading(true);
      setError("");

      const res = await loginApi({ email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      
      if(res){
        callback(true)
      }
      return true;
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const signup = async ({ email, password }) => {
    try {
      setLoading(true);
      setError("");

      const res = await signupApi({ email, password });
      localStorage.setItem("token", res.data.token);

      return true;
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  return { login, signup, logout, loading, error };
}
 */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import SignupForm from "@/components/auth/SignupForm";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, loadingSignup, errorSignup } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await signup(data);
      navigate("/notes");
    } catch {
      // error already handled
    }
  };

  return (
    <SignupForm
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      loading={loadingSignup}
      error={errorSignup}
    />
  );
}

export default Signup;

import Auth from "@/modules/Auth/Auth";
import AuthTitle from "@/modules/Auth/components/AuthTitle";
import AuthSignInForm from "@/modules/Auth/components/Forms/AuthSignInForm";
import AuthSignUpForm from "@/modules/Auth/components/Forms/AuthSignUpForm";

const AuthPage = () => {
  return (
    <Auth>
      <AuthTitle />
      <AuthSignInForm />
      <AuthSignUpForm />
    </Auth>
  );
};

export default AuthPage;

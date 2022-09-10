import AuthLayout from "@/layouts/auth-layout";
import MainLayout from "@/layouts/main-layout";
import LoginForm from "@/features/auth/components/login-form";

export default function Enter() {
  return (
    <MainLayout>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </MainLayout>
  );
}

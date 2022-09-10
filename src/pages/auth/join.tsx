import JoinForm from "@/features/auth/components/join-form";
import AuthLayout from "@/layouts/auth-layout";
import MainLayout from "@/layouts/main-layout";

export default function Join() {
  return (
    <MainLayout>
      <AuthLayout>
        <JoinForm />
      </AuthLayout>
    </MainLayout>
  );
}

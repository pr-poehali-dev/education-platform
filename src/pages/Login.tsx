import { Metadata } from "@/components/ui/metadata";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Вход в систему | ОбразованиеПлюс",
  description: "Войдите в систему, чтобы получить доступ к курсам и домашним заданиям",
};

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary/30">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Вход в ОбразованиеПлюс</h1>
          <p className="mt-2 text-sm text-gray-600">
            Войдите в систему, чтобы продолжить обучение
          </p>
        </div>
        
        <LoginForm />
        
        <div className="text-center text-sm">
          <a href="#" className="text-primary hover:underline">
            Забыли пароль?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

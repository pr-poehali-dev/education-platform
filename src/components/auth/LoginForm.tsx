import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Введите корректный email"),
  password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
  userType: z.enum(["student", "teacher"]),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      userType: "student",
    },
  });
  
  const userType = watch("userType");
  
  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    
    try {
      // Имитация запроса к API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // В реальном приложении здесь был бы запрос к API для аутентификации
      
      toast({
        title: "Успешный вход в систему",
        description: `Вы вошли как ${data.userType === "student" ? "ученик" : "преподаватель"}`,
      });
      
      // Перенаправление на соответствующую страницу дашборда
      navigate(data.userType === "student" ? "/student/dashboard" : "/teacher/dashboard");
    } catch (error) {
      toast({
        title: "Ошибка входа",
        description: "Неверные учетные данные. Пожалуйста, попробуйте снова.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-2 gap-2">
        <Button
          type="button"
          variant={userType === "student" ? "default" : "outline"}
          className="w-full"
          onClick={() => {
            const { setValue } = useForm();
            setValue && setValue("userType", "student");
          }}
        >
          Ученик
        </Button>
        <Button
          type="button"
          variant={userType === "teacher" ? "default" : "outline"}
          className="w-full"
          onClick={() => {
            const { setValue } = useForm();
            setValue && setValue("userType", "teacher");
          }}
        >
          Преподаватель
        </Button>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Пароль</Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>
      
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Вход...
          </>
        ) : (
          "Войти в систему"
        )}
      </Button>
    </form>
  );
};

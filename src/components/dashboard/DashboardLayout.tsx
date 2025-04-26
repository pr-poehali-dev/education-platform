import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, User, LogOut, List, BarChart, Home, FilePlus, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";

interface DashboardLayoutProps {
  children: ReactNode;
  userType: "student" | "teacher";
}

const DashboardLayout = ({ children, userType }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // В реальном приложении здесь был бы API-запрос для выхода
    toast({
      title: "Выход из системы",
      description: "Вы успешно вышли из системы",
    });
    navigate("/login");
  };
  
  return (
    <div className="flex min-h-screen bg-secondary/10">
      {/* Боковое меню */}
      <aside className="w-64 bg-white border-r shadow-sm">
        <div className="p-4">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-semibold text-lg">ОбразованиеПлюс</span>
          </Link>
        </div>
        
        <Separator />
        
        <div className="p-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-sm">
                {userType === "student" ? "Ученик" : "Преподаватель"}
              </p>
              <p className="text-xs text-gray-500">example@email.com</p>
            </div>
          </div>
          
          <nav className="space-y-1">
            <Link
              to={`/${userType}/dashboard`}
              className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-primary/10 text-gray-700 hover:text-primary transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Главная</span>
            </Link>
            
            {userType === "student" ? (
              <>
                <Link
                  to={`/${userType}/assignments`}
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-primary/10 text-gray-700 hover:text-primary transition-colors"
                >
                  <List className="h-4 w-4" />
                  <span>Домашние задания</span>
                </Link>
                <Link
                  to={`/${userType}/courses`}
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-primary/10 text-gray-700 hover:text-primary transition-colors"
                >
                  <Book className="h-4 w-4" />
                  <span>Мои курсы</span>
                </Link>
                <Link
                  to={`/${userType}/progress`}
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-primary/10 text-gray-700 hover:text-primary transition-colors"
                >
                  <BarChart className="h-4 w-4" />
                  <span>Прогресс обучения</span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={`/${userType}/assignments`}
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-primary/10 text-gray-700 hover:text-primary transition-colors"
                >
                  <List className="h-4 w-4" />
                  <span>Задания учеников</span>
                </Link>
                <Link
                  to={`/${userType}/create-assignment`}
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-primary/10 text-gray-700 hover:text-primary transition-colors"
                >
                  <FilePlus className="h-4 w-4" />
                  <span>Создать задание</span>
                </Link>
                <Link
                  to={`/${userType}/courses`}
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-primary/10 text-gray-700 hover:text-primary transition-colors"
                >
                  <Book className="h-4 w-4" />
                  <span>Мои курсы</span>
                </Link>
                <Link
                  to={`/${userType}/analytics`}
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-primary/10 text-gray-700 hover:text-primary transition-colors"
                >
                  <BarChart className="h-4 w-4" />
                  <span>Аналитика успеваемости</span>
                </Link>
              </>
            )}
          </nav>
        </div>
        
        <div className="mt-auto p-4">
          <Button
            variant="outline"
            className="w-full justify-start text-gray-700"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Выйти
          </Button>
        </div>
      </aside>
      
      {/* Основное содержимое */}
      <main className="flex-1">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;

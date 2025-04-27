import { ReactNode, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  BookOpen, 
  GraduationCap, 
  Home, 
  LogOut, 
  Menu, 
  X, 
  Book, 
  BarChart, 
  Calendar, 
  Settings,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";

interface DashboardLayoutProps {
  children: ReactNode;
  userType: "student" | "teacher";
}

const DashboardLayout = ({ children, userType }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Выход из системы",
      description: "Вы успешно вышли из системы",
    });
    navigate("/login");
  };

  const studentNavItems = [
    { href: "/student/dashboard", label: "Главная", icon: Home },
    { href: "/student/courses", label: "Мои курсы", icon: Book },
    { href: "/student/homework", label: "Домашние задания", icon: BookOpen },
    { href: "/student/progress", label: "Мой прогресс", icon: BarChart },
    { href: "/student/schedule", label: "Расписание", icon: Calendar },
    { href: "/student/messages", label: "Сообщения", icon: MessageSquare },
  ];

  const teacherNavItems = [
    { href: "/teacher/dashboard", label: "Главная", icon: Home },
    { href: "/teacher/courses", label: "Мои курсы", icon: Book },
    { href: "/teacher/homework", label: "Домашние задания", icon: BookOpen },
    { href: "/teacher/students", label: "Ученики", icon: GraduationCap },
    { href: "/teacher/schedule", label: "Расписание", icon: Calendar },
    { href: "/teacher/messages", label: "Сообщения", icon: MessageSquare },
  ];

  const navItems = userType === "student" ? studentNavItems : teacherNavItems;

  const userName = userType === "student" ? "Иван Петров" : "Елена Смирнова";
  const userRole = userType === "student" ? "Ученик" : "Преподаватель";

  return (
    <div className="flex h-screen bg-secondary/10">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Sidebar for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white border-r shadow-sm transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:flex`}
      >
        <div className="flex h-full w-full flex-col">
          {/* Sidebar header */}
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">ОбразованиеПлюс</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* User info */}
          <div className="flex items-center gap-3 px-4 py-3 border-b">
            <Avatar>
              <AvatarImage src={userType === "student" ? "https://i.pravatar.cc/150?img=33" : "https://i.pravatar.cc/150?img=23"} alt={userName} />
              <AvatarFallback>{userName.split(" ").map(n => n[0]).join("")}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-sm">{userName}</p>
              <p className="text-xs text-gray-500">{userRole}</p>
            </div>
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1 py-2">
            <nav className="grid gap-1 px-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-primary text-white"
                        : "hover:bg-primary/10"
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-gray-500"}`} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </ScrollArea>

          {/* Sidebar footer */}
          <div className="border-t p-4">
            <Button 
              variant="outline" 
              className="w-full justify-start gap-2"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Выйти
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto py-6 px-4 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;

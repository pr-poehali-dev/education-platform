import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarTrigger, 
  SidebarHeader, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton, 
  SidebarFooter,
  SidebarSeparator
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Home, 
  GraduationCap, 
  CheckSquare, 
  LineChart, 
  Settings, 
  LogOut,
  UserCircle,
  BookText,
  Bell
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  userType: 'student' | 'teacher';
}

export default function DashboardLayout({ children, userType }: DashboardLayoutProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Здесь будет логика выхода
    navigate("/login");
  };

  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full grid-cols-[auto_1fr]">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">ОбразованиеПлюс</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Главная" onClick={() => navigate(`/${userType}/dashboard`)}>
                  <Home className="h-5 w-5" />
                  <span>Главная</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              {userType === 'student' ? (
                <>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Курсы">
                      <BookText className="h-5 w-5" />
                      <span>Мои курсы</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Задания">
                      <CheckSquare className="h-5 w-5" />
                      <span>Домашние задания</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Успеваемость">
                      <LineChart className="h-5 w-5" />
                      <span>Успеваемость</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </>
              ) : (
                <>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Курсы">
                      <GraduationCap className="h-5 w-5" />
                      <span>Мои курсы</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Ученики">
                      <UserCircle className="h-5 w-5" />
                      <span>Ученики</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Задания">
                      <CheckSquare className="h-5 w-5" />
                      <span>Задания</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </>
              )}
            </SidebarMenu>
          </SidebarContent>

          <SidebarSeparator />
          
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Настройки">
                  <Settings className="h-5 w-5" />
                  <span>Настройки</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Выйти" onClick={handleLogout}>
                  <LogOut className="h-5 w-5" />
                  <span>Выйти</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <div className="flex items-center gap-2 px-4 py-2">
              <Avatar>
                <AvatarImage alt="User" />
                <AvatarFallback className="bg-primary text-white">
                  {userType === 'student' ? 'ИИ' : 'ОМ'}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">
                  {userType === 'student' ? 'Иван Иванов' : 'Ольга Михайловна'}
                </span>
                <span className="text-xs text-muted-foreground">
                  {userType === 'student' ? 'Ученик' : 'Преподаватель'}
                </span>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <div className="flex flex-col">
          <header className="h-16 border-b bg-background flex items-center px-6 justify-between">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <div className="text-lg font-semibold">
                {userType === 'student' ? 'Личный кабинет ученика' : 'Кабинет преподавателя'}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
            </div>
          </header>
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

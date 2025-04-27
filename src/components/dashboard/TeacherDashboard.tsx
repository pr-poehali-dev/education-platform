import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Users, 
  CheckCircle, 
  Clock, 
  Calendar,
  BarChart,
  Star
} from "lucide-react";
import { useState } from "react";

// Тип для задания
interface HomeworkItem {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  assigned: number;
  completed: number;
}

// Тип для ученика
interface Student {
  id: string;
  name: string;
  avatar: string;
  course: string;
  progress: number;
  lastActivity: string;
}

// Тип для курса
interface Course {
  id: string;
  title: string;
  students: number;
  homeworkCompletion: number;
  nextLesson: string;
}

// Демо-данные
const homeworkItems: HomeworkItem[] = [
  {
    id: "hw1",
    title: "Задачи по алгебре",
    course: "Математика",
    dueDate: "29 апреля",
    assigned: 15,
    completed: 8
  },
  {
    id: "hw2",
    title: "Эссе по литературе",
    course: "Литература",
    dueDate: "30 апреля",
    assigned: 12,
    completed: 5
  },
  {
    id: "hw3",
    title: "Лабораторная по физике",
    course: "Физика",
    dueDate: "1 мая",
    assigned: 10,
    completed: 7
  }
];

const students: Student[] = [
  {
    id: "student1",
    name: "Иван Петров",
    avatar: "https://i.pravatar.cc/150?img=33",
    course: "Математика",
    progress: 75,
    lastActivity: "Вчера"
  },
  {
    id: "student2",
    name: "Анна Сидорова",
    avatar: "https://i.pravatar.cc/150?img=32",
    course: "Литература",
    progress: 60,
    lastActivity: "Сегодня"
  },
  {
    id: "student3",
    name: "Михаил Кузнецов",
    avatar: "https://i.pravatar.cc/150?img=60",
    course: "Физика",
    progress: 85,
    lastActivity: "3 дня назад"
  },
  {
    id: "student4",
    name: "Екатерина Иванова",
    avatar: "https://i.pravatar.cc/150?img=30",
    course: "Математика",
    progress: 45,
    lastActivity: "Сегодня"
  },
  {
    id: "student5",
    name: "Алексей Смирнов",
    avatar: "https://i.pravatar.cc/150?img=59",
    course: "Литература",
    progress: 55,
    lastActivity: "Вчера"
  }
];

const courses: Course[] = [
  {
    id: "course1",
    title: "Математика",
    students: 18,
    homeworkCompletion: 65,
    nextLesson: "29 апреля, 15:00"
  },
  {
    id: "course2",
    title: "Литература",
    students: 15,
    homeworkCompletion: 42,
    nextLesson: "30 апреля, 10:00"
  },
  {
    id: "course3",
    title: "Физика",
    students: 12,
    homeworkCompletion: 78,
    nextLesson: "1 мая, 13:30"
  }
];

// Данные для графика успеваемости
const performanceData = [
  { month: "Январь", average: 78 },
  { month: "Февраль", average: 82 },
  { month: "Март", average: 80 },
  { month: "Апрель", average: 85 }
];

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState<string>("homework");

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Добро пожаловать, Елена! 👋</h1>
          <p className="text-gray-500">Вот ваш преподавательский дашборд</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Расписание занятий
          </Button>
          <Button>
            <BookOpen className="mr-2 h-4 w-4" />
            Создать задание
          </Button>
        </div>
      </div>

      {/* Статистика */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Всего учеников</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-gray-500 mt-2">
              +3 новых за последний месяц
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Активные курсы</CardTitle>
            <BookOpen className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{courses.length}</div>
            <p className="text-xs text-gray-500 mt-2">
              Курсы в процессе обучения
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Требуют проверки</CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-500 mt-2">
              Домашние задания на проверке
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Средняя успеваемость</CardTitle>
            <Star className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76%</div>
            <p className="text-xs text-gray-500 mt-2">
              +5% по сравнению с прошлым месяцем
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Управление курсами */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Управление заданиями</CardTitle>
            <CardDescription>
              Создавайте и отслеживайте домашние задания учеников
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="homework" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger 
                  value="homework" 
                  onClick={() => setActiveTab("homework")}
                >
                  Активные задания
                </TabsTrigger>
                <TabsTrigger 
                  value="needs-review" 
                  onClick={() => setActiveTab("needs-review")}
                >
                  Требуют проверки
                </TabsTrigger>
              </TabsList>
              <TabsContent value="homework" className="space-y-4">
                {homeworkItems.map((homework) => (
                  <div 
                    key={homework.id} 
                    className="flex flex-col p-3 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{homework.title}</h4>
                      <div className="text-sm text-gray-500">
                        До: {homework.dueDate}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-sm text-gray-500">
                        {homework.course}
                      </div>
                      <div className="text-sm">
                        Выполнено: <span className="font-medium">{homework.completed}/{homework.assigned}</span>
                      </div>
                    </div>
                    <Progress value={(homework.completed / homework.assigned) * 100} className="mb-2" />
                    <div className="flex justify-end gap-2 mt-2">
                      <Button size="sm" variant="outline">Редактировать</Button>
                      <Button size="sm">Просмотреть ответы</Button>
                    </div>
                  </div>
                ))}
                <Button className="w-full">
                  Создать новое задание
                </Button>
              </TabsContent>
              <TabsContent value="needs-review" className="space-y-4">
                <div className="p-6 text-center border rounded-lg">
                  <CheckCircle className="mx-auto h-8 w-8 text-primary/50 mb-2" />
                  <h3 className="font-medium">Все задания проверены</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    На данный момент нет заданий, требующих проверки
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Студенты */}
        <Card className="col-span-1">
          <CardHeader className="flex justify-between items-center">
            <div>
              <CardTitle>Мои ученики</CardTitle>
              <CardDescription>
                Отслеживайте прогресс ваших учеников
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              Все ученики
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {students.slice(0, 4).map((student) => (
                <div key={student.id} className="flex items-center gap-4 p-3 border rounded-lg hover:bg-gray-50">
                  <Avatar>
                    <AvatarImage src={student.avatar} alt={student.name} />
                    <AvatarFallback>{student.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium">{student.name}</h4>
                      <span className="text-sm text-gray-500">
                        {student.progress}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {student.course}
                      </span>
                      <span className="text-xs text-gray-500">
                        Активность: {student.lastActivity}
                      </span>
                    </div>
                    <Progress value={student.progress} className="mt-2" />
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                Показать всех учеников
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Курсы */}
      <Card>
        <CardHeader>
          <CardTitle>Мои курсы</CardTitle>
          <CardDescription>
            Управление вашими активными курсами
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course) => (
              <div key={course.id} className="p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{course.title}</h3>
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {course.students} учеников
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-3">
                  Следующее занятие: {course.nextLesson}
                </p>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Выполнение заданий</span>
                    <span>{course.homeworkCompletion}%</span>
                  </div>
                  <Progress value={course.homeworkCompletion} />
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Button size="sm" variant="outline">Материалы</Button>
                  <Button size="sm">Управление</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* График успеваемости */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Динамика успеваемости</CardTitle>
            <CardDescription>
              Средняя успеваемость по всем ученикам
            </CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <BarChart className="mr-2 h-4 w-4" />
            Подробная статистика
          </Button>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] w-full">
            <div className="flex h-full items-end gap-2">
              {performanceData.map((data, index) => (
                <div 
                  key={index}
                  className="relative flex h-full w-full flex-col justify-end"
                >
                  <div 
                    className="bg-primary rounded-t-md animate-in fade-in-50" 
                    style={{ height: `${data.average}%` }}
                  />
                  <span className="mt-2 text-xs text-center font-medium">
                    {data.month}
                  </span>
                  <span className="absolute top-0 left-[50%] -translate-x-[50%] -translate-y-7 text-xs font-medium">
                    {data.average}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherDashboard;

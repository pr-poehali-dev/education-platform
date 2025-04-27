import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, CheckCircle, Clock, Award, Calendar } from "lucide-react";
import { useState } from "react";

// Тип для домашнего задания
interface HomeworkItem {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  status: 'pending' | 'completed' | 'overdue';
}

// Тип для курса
interface CourseItem {
  id: string;
  title: string;
  teacher: string;
  progress: number;
  nextLesson: string;
}

// Демо-данные
const upcomingHomework: HomeworkItem[] = [
  {
    id: "hw1",
    title: "Решение задач по алгебре",
    course: "Математика",
    dueDate: "29 апреля",
    status: "pending"
  },
  {
    id: "hw2",
    title: "Написание эссе по литературе",
    course: "Литература",
    dueDate: "30 апреля",
    status: "pending"
  },
  {
    id: "hw3",
    title: "Лабораторная работа по физике",
    course: "Физика",
    dueDate: "1 мая",
    status: "pending"
  }
];

const completedHomework: HomeworkItem[] = [
  {
    id: "hw4",
    title: "Тест по английскому языку",
    course: "Английский язык",
    dueDate: "25 апреля",
    status: "completed"
  },
  {
    id: "hw5",
    title: "Практические задания по информатике",
    course: "Информатика",
    dueDate: "24 апреля",
    status: "completed"
  }
];

const courses: CourseItem[] = [
  {
    id: "course1",
    title: "Математика",
    teacher: "Елена Сергеевна",
    progress: 65,
    nextLesson: "29 апреля, 15:00"
  },
  {
    id: "course2",
    title: "Литература",
    teacher: "Ольга Николаевна",
    progress: 42,
    nextLesson: "30 апреля, 10:00"
  },
  {
    id: "course3",
    title: "Физика",
    teacher: "Александр Петрович",
    progress: 78,
    nextLesson: "1 мая, 13:30"
  }
];

// Расписание на неделю
const schedule = [
  { day: "Понедельник", lessons: ["Математика (15:00)", "Литература (16:30)"] },
  { day: "Вторник", lessons: ["Физика (14:00)", "Английский язык (16:00)"] },
  { day: "Среда", lessons: ["Информатика (15:30)"] },
  { day: "Четверг", lessons: ["Математика (15:00)", "Физика (16:30)"] },
  { day: "Пятница", lessons: ["Литература (14:30)", "Английский язык (16:00)"] },
  { day: "Суббота", lessons: [] },
  { day: "Воскресенье", lessons: [] }
];

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState<string>("upcoming");

  // Общий прогресс обучения
  const overallProgress = 68;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Привет, Иван! 👋</h1>
          <p className="text-gray-500">Вот твой прогресс обучения на сегодня</p>
        </div>
        <Button>
          <Calendar className="mr-2 h-4 w-4" />
          Мое расписание
        </Button>
      </div>

      {/* Карточки со статистикой */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Прогресс обучения</CardTitle>
            <Award className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallProgress}%</div>
            <Progress value={overallProgress} className="mt-2" />
            <p className="text-xs text-gray-500 mt-2">Общий прогресс по всем курсам</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Активные курсы</CardTitle>
            <BookOpen className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{courses.length}</div>
            <p className="text-xs text-gray-500 mt-2">Количество курсов в процессе обучения</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ожидают выполнения</CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingHomework.length}</div>
            <p className="text-xs text-gray-500 mt-2">Количество предстоящих домашних заданий</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Выполнено</CardTitle>
            <CheckCircle className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedHomework.length}</div>
            <p className="text-xs text-gray-500 mt-2">Количество выполненных домашних заданий</p>
          </CardContent>
        </Card>
      </div>

      {/* Домашние задания */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Домашние задания</CardTitle>
            <CardDescription>
              Управляйте вашими текущими и выполненными заданиями
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger 
                  value="upcoming" 
                  onClick={() => setActiveTab("upcoming")}
                >
                  Предстоящие
                </TabsTrigger>
                <TabsTrigger 
                  value="completed" 
                  onClick={() => setActiveTab("completed")}
                >
                  Выполненные
                </TabsTrigger>
              </TabsList>
              <TabsContent value="upcoming" className="space-y-4">
                {upcomingHomework.map((homework) => (
                  <div 
                    key={homework.id} 
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium">{homework.title}</h4>
                      <div className="text-sm text-gray-500">
                        {homework.course} • Сдать до: {homework.dueDate}
                      </div>
                    </div>
                    <Button size="sm">Выполнить</Button>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="completed" className="space-y-4">
                {completedHomework.map((homework) => (
                  <div 
                    key={homework.id} 
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium">{homework.title}</h4>
                      <div className="text-sm text-gray-500">
                        {homework.course} • Сдано: {homework.dueDate}
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Просмотреть</Button>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Мои курсы */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Мои курсы</CardTitle>
            <CardDescription>
              Отслеживайте ваш прогресс по текущим курсам
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {courses.map((course) => (
                <div key={course.id} className="p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{course.title}</h4>
                    <span className="text-sm text-gray-500">
                      {course.progress}%
                    </span>
                  </div>
                  <Progress value={course.progress} className="mb-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Преподаватель: {course.teacher}
                    </span>
                    <span className="text-gray-500">
                      Следующий урок: {course.nextLesson}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Расписание */}
      <Card>
        <CardHeader>
          <CardTitle>Расписание на неделю</CardTitle>
          <CardDescription>
            Ваше текущее расписание занятий
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schedule.map((day, index) => (
              <div key={index} className="p-3 border rounded-lg">
                <h4 className="font-medium mb-2">{day.day}</h4>
                {day.lessons.length > 0 ? (
                  <ul className="space-y-1">
                    {day.lessons.map((lesson, idx) => (
                      <li key={idx} className="text-sm text-gray-600">{lesson}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500">Нет занятий</p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDashboard;

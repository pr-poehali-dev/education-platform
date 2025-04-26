import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, BookOpen, Calendar } from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold tracking-tight">Личный кабинет ученика</h2>
        <p className="text-muted-foreground">
          Добро пожаловать, Иван! Вот ваш прогресс обучения и задания.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Курсы</CardTitle>
            <CardDescription>Всего записей на курсы</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Завершено заданий</CardTitle>
            <CardDescription>Выполненные задания</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12/18</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Средний балл</CardTitle>
            <CardDescription>За все задания</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">4.7</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="homework">
        <TabsList>
          <TabsTrigger value="homework">Домашние задания</TabsTrigger>
          <TabsTrigger value="progress">Прогресс обучения</TabsTrigger>
          <TabsTrigger value="courses">Мои курсы</TabsTrigger>
        </TabsList>
        <TabsContent value="homework" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Активные задания</CardTitle>
              <CardDescription>
                Задания, требующие выполнения
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <div className="space-y-4">
                  {[
                    { id: 1, title: "Решение уравнений", subject: "Математика", deadline: "27.04.2025", status: "pending" },
                    { id: 2, title: "Эссе по роману 'Война и мир'", subject: "Литература", deadline: "29.04.2025", status: "pending" },
                    { id: 3, title: "Практика с условными операторами", subject: "Программирование", deadline: "30.04.2025", status: "in-progress" }
                  ].map((task) => (
                    <div key={task.id} className="flex items-start space-x-4 p-3 rounded-lg border">
                      <div className={`mt-0.5 ${task.status === 'pending' ? 'text-amber-500' : 'text-blue-500'}`}>
                        {task.status === 'pending' ? <Clock size={18} /> : <BookOpen size={18} />}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{task.title}</p>
                          <span className="text-xs bg-secondary px-2 py-1 rounded-full">{task.subject}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar size={14} className="mr-1" />
                          <span>Срок сдачи: {task.deadline}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Выполненные задания</CardTitle>
              <CardDescription>
                Последние проверенные задания
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="space-y-4">
                  {[
                    { id: 4, title: "Тест по теме 'Электричество'", subject: "Физика", date: "20.04.2025", grade: "5" },
                    { id: 5, title: "Практическая работа с массивами", subject: "Программирование", date: "18.04.2025", grade: "4" },
                    { id: 6, title: "Лабораторная работа №3", subject: "Химия", date: "15.04.2025", grade: "5" }
                  ].map((task) => (
                    <div key={task.id} className="flex items-start space-x-4 p-3 rounded-lg border">
                      <div className="mt-0.5 text-green-500">
                        <CheckCircle size={18} />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{task.title}</p>
                          <span className="text-sm font-semibold text-primary">Оценка: {task.grade}</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground text-sm">
                          <span>{task.subject}</span>
                          <span>{task.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="progress" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Прогресс по курсам</CardTitle>
              <CardDescription>
                Ваша активность по всем курсам
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Математика</div>
                  <div className="text-sm text-muted-foreground">75%</div>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Программирование</div>
                  <div className="text-sm text-muted-foreground">60%</div>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Литература</div>
                  <div className="text-sm text-muted-foreground">40%</div>
                </div>
                <Progress value={40} className="h-2" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Успеваемость</CardTitle>
              <CardDescription>
                Динамика оценок за последний месяц
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center">
                <p className="text-muted-foreground">График успеваемости будет доступен после загрузки данных</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="courses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Мои курсы</CardTitle>
              <CardDescription>
                Курсы, на которые вы записаны
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { id: 1, title: "Алгебра и геометрия", teacher: "Петрова О.М.", progress: 75 },
                  { id: 2, title: "Основы программирования", teacher: "Сидоров И.П.", progress: 60 },
                  { id: 3, title: "Русская литература", teacher: "Иванов А.С.", progress: 40 }
                ].map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="h-2 bg-primary" style={{ width: `${course.progress}%` }} />
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">Преподаватель: {course.teacher}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Прогресс: {course.progress}%</span>
                        <span className="text-xs text-primary font-medium">Активный</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

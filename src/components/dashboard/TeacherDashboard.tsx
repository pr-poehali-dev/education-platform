import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, CheckCircle, PlusCircle, Clock, FileCheck } from "lucide-react";

export default function TeacherDashboard() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold tracking-tight">Кабинет преподавателя</h2>
        <p className="text-muted-foreground">
          Добро пожаловать, Ольга Михайловна! Вот ваши курсы и задания учеников.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Активные курсы</CardTitle>
            <CardDescription>Курсы в текущем семестре</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-muted-foreground mr-3" />
              <span className="text-3xl font-bold">4</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Всего учеников</CardTitle>
            <CardDescription>На всех ваших курсах</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Users className="h-8 w-8 text-muted-foreground mr-3" />
              <span className="text-3xl font-bold">28</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Работы на проверке</CardTitle>
            <CardDescription>Требуют вашего внимания</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <FileCheck className="h-8 w-8 text-muted-foreground mr-3" />
              <span className="text-3xl font-bold">12</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="assignments">
        <TabsList>
          <TabsTrigger value="assignments">Задания</TabsTrigger>
          <TabsTrigger value="students">Ученики</TabsTrigger>
          <TabsTrigger value="courses">Мои курсы</TabsTrigger>
        </TabsList>
        <TabsContent value="assignments" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Управление заданиями</h3>
            <Button size="sm">
              <PlusCircle className="h-4 w-4 mr-2" /> Создать задание
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>На проверке</CardTitle>
              <CardDescription>
                Работы, требующие вашей проверки
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <div className="space-y-4">
                  {[
                    { id: 1, title: "Решение уравнений", student: "Иванов Иван", course: "Математика", submitted: "25.04.2025" },
                    { id: 2, title: "Эссе по роману 'Война и мир'", student: "Петрова Анна", course: "Литература", submitted: "24.04.2025" },
                    { id: 3, title: "Практика с условными операторами", student: "Сидоров Алексей", course: "Программирование", submitted: "24.04.2025" },
                    { id: 4, title: "Контрольная работа №2", student: "Козлов Дмитрий", course: "Математика", submitted: "23.04.2025" }
                  ].map((assignment) => (
                    <div key={assignment.id} className="flex items-start space-x-4 p-3 rounded-lg border">
                      <div className="mt-0.5 text-amber-500">
                        <Clock size={18} />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{assignment.title}</p>
                          <Badge variant="outline">{assignment.course}</Badge>
                        </div>
                        <div className="flex justify-between text-muted-foreground text-sm">
                          <span>Ученик: {assignment.student}</span>
                          <span>Сдано: {assignment.submitted}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="secondary">Проверить</Button>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Недавно проверенные</CardTitle>
              <CardDescription>
                Последние проверенные вами работы
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="space-y-4">
                  {[
                    { id: 5, title: "Тест по теме 'Электричество'", student: "Соколова Мария", course: "Физика", date: "20.04.2025", grade: "5" },
                    { id: 6, title: "Практическая работа с массивами", student: "Иванов Иван", course: "Программирование", date: "18.04.2025", grade: "4" },
                    { id: 7, title: "Лабораторная работа №3", student: "Петрова Анна", course: "Химия", date: "15.04.2025", grade: "5" }
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
                          <span>{task.student} • {task.course}</span>
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
        <TabsContent value="students" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Список учеников</CardTitle>
              <CardDescription>
                Все ученики на ваших курсах
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-4 items-center border-b px-4 py-3 font-medium">
                  <div>Имя</div>
                  <div>Курс</div>
                  <div>Прогресс</div>
                  <div className="text-center">Средняя оценка</div>
                </div>
                <div className="divide-y">
                  {[
                    { id: 1, name: "Иванов Иван", course: "Математика", progress: "75%", grade: "4.8" },
                    { id: 2, name: "Петрова Анна", course: "Литература", progress: "60%", grade: "4.5" },
                    { id: 3, name: "Сидоров Алексей", course: "Программирование", progress: "80%", grade: "4.9" },
                    { id: 4, name: "Козлова Елена", course: "Математика", progress: "45%", grade: "3.7" },
                    { id: 5, name: "Смирнов Дмитрий", course: "Литература", progress: "65%", grade: "4.2" }
                  ].map((student) => (
                    <div key={student.id} className="grid grid-cols-4 items-center px-4 py-3">
                      <div className="font-medium">{student.name}</div>
                      <div className="text-muted-foreground">{student.course}</div>
                      <div>{student.progress}</div>
                      <div className="text-center font-medium">{student.grade}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="courses" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Мои курсы</h3>
            <Button size="sm">
              <PlusCircle className="h-4 w-4 mr-2" /> Добавить курс
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { id: 1, title: "Алгебра и геометрия", students: 8, completionRate: "75%", status: "Активный" },
              { id: 2, title: "Дискретная математика", students: 6, completionRate: "60%", status: "Активный" },
              { id: 3, title: "Математический анализ", students: 10, completionRate: "40%", status: "Активный" },
              { id: 4, title: "Статистика и теория вероятностей", students: 4, completionRate: "85%", status: "Активный" }
            ].map((course) => (
              <Card key={course.id}>
                <CardHeader className="pb-2">
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>
                    {course.students} учеников • Выполнено: {course.completionRate}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{course.status}</Badge>
                    <Button variant="ghost" size="sm">Просмотр</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

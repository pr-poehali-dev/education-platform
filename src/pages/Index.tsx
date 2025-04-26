import { Button } from "@/components/ui/button";
import { GraduationCap, Book, Award, CheckCircle, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent to-primary/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Школа дополнительного образования
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              Развивайте навыки, отслеживайте прогресс и достигайте новых высот 
              с нашей современной образовательной платформой
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/register">Начать обучение</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/courses">Наши курсы</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества нашей платформы</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-secondary rounded-lg p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Book className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Домашние задания</h3>
              <p className="text-gray-600">Удобная система для создания, выполнения и проверки домашних заданий</p>
            </div>
            
            <div className="bg-secondary rounded-lg p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Прогресс обучения</h3>
              <p className="text-gray-600">Отслеживайте успеваемость и динамику прохождения материалов</p>
            </div>
            
            <div className="bg-secondary rounded-lg p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Личные кабинеты</h3>
              <p className="text-gray-600">Удобный интерфейс для учеников и преподавателей</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать обучение?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-600">
            Присоединяйтесь к нашей платформе и получите доступ к качественным 
            образовательным материалам и опытным преподавателям
          </p>
          <Button asChild size="lg">
            <Link to="/register">Зарегистрироваться</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-10 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">ОбразованиеПлюс</span>
            </div>
            <div className="flex gap-8">
              <Link to="/about" className="text-sm hover:text-primary transition-colors">О нас</Link>
              <Link to="/courses" className="text-sm hover:text-primary transition-colors">Курсы</Link>
              <Link to="/contacts" className="text-sm hover:text-primary transition-colors">Контакты</Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ОбразованиеПлюс. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, LogIn } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold">ОбразованиеПлюс</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            О школе
          </Link>
          <Link to="/courses" className="text-sm font-medium hover:text-primary transition-colors">
            Курсы
          </Link>
          <Link to="/teachers" className="text-sm font-medium hover:text-primary transition-colors">
            Преподаватели
          </Link>
          
          <Button asChild variant="outline" size="sm" className="ml-4">
            <Link to="/login"><LogIn className="mr-2 h-4 w-4" /> Войти</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

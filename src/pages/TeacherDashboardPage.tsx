import DashboardLayout from "@/components/dashboard/DashboardLayout";
import TeacherDashboard from "@/components/dashboard/TeacherDashboard";

const TeacherDashboardPage = () => {
  return (
    <DashboardLayout userType="teacher">
      <TeacherDashboard />
    </DashboardLayout>
  );
};

export default TeacherDashboardPage;

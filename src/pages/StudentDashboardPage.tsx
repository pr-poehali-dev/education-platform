import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StudentDashboard from "@/components/dashboard/StudentDashboard";

const StudentDashboardPage = () => {
  return (
    <DashboardLayout userType="student">
      <StudentDashboard />
    </DashboardLayout>
  );
};

export default StudentDashboardPage;

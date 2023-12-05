import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./Component/Layout/Rootlayout";
import User from "./Component/Dashboard/User/User";
import Registration from "./Component/Dashboard/Registration/Registration";
import Pending from "./Component/Dashboard/Pending/Pending";
import Plan from "./Component/Dashboard/Plan/Plan";
import Cancel from "./Component/Dashboard/Cancel/Cancel";
import BlockedUser from "./Component/Dashboard/Blocked User/BlockedUser";
import Report from "./Component/Dashboard/Report/Report";
import Employees from "./Component/Dashboard/Employees/Employees";
import Recovery from "./Component/Dashboard/Recovery/Recovery";
import DashboardOverview from "./Component/Dashboard/DashboardOverview/DashboardOverview";
import Dashboard from "./Component/Dashboard/Dashboard";
import Login from "./Component/Login/Login";
import LoginAdmin from "./Component/Login/LoginAdmin";

import ForgetPassword from "./Component/Login/ForgetPasssword";
import UserOutlet from "./Component/Dashboard/User/UserOutlet";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";
import EmployeeProfileEdit from "./Component/Dashboard/Employees/EmployessProfileEdit";
import EmployeeForm from "./Component/Dashboard/Employees/EmployeeForm";
import PendingForm from "./Component/Dashboard/Pending/PendingForm";
import RegistrationForm from "./Component/Dashboard/Registration/RegistrationForm";
import ReportForm from "./Component/Dashboard/Report/ReportForm";
import UserLogin from "./Component/Login/UserLogin";
import UserSidebar from "./Component/Dashboard/UserSidebar/UserSidebar";
import UserDashBoard from "./Component/Dashboard/UserSidebar/UserDashBoard";

import NewAssignment from "./Component/Dashboard/UserSidebar/Assignment/Newassignment";
import AssignmentReport from "./Component/Dashboard/UserSidebar/Assignment/AssignmentReport";
import Assignment from "./Component/Dashboard/UserSidebar/Assignment/Assignment";
import SignUp from "./Component/Login/SignUP";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/admin" element={<LoginAdmin />} />
      <Route path="/userlogin" element={<UserLogin />} />
      <Route path="/ForgetPassword" element={<ForgetPassword />} />

      <Route path="/" element={<RootLayout />}>

        {/* ADMIN PART */}
        <Route
          path="dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        >
          <Route index element={<DashboardOverview />} />
        </Route>

        <Route
          path="user"
          element={<ProtectedRoute element={<UserOutlet />} />}
        >
          <Route index element={<User />} />
          <Route path="registration" element={<Registration />} />
          <Route path="registrationform" element={<RegistrationForm />} />
          <Route path="pending" element={<Pending />} />
          <Route path="pendingform" element={<PendingForm />} />
          <Route path="plan" element={<Plan />} />
          <Route path="cancel" element={<Cancel />} />
        </Route>
        <Route path="blockeduser" element={<BlockedUser />} />
        <Route path="report" element={<Report />} />
        <Route path="reportform" element={<ReportForm />} />
        <Route path="recovery" element={<Recovery />} />
        <Route path="employees" element={<Employees />} />
        <Route path="employeeprofileedit" element={<EmployeeProfileEdit />} />
        <Route path="employeeform" element={<EmployeeForm />} />
        <Route index element={<UserDashBoard />} />
        <Route path="assignment" element={<Assignment />} />
        <Route path="newassignment" element={<NewAssignment />} />
        <Route path="assignmentreport" element={<AssignmentReport />} />
     
      {/* <Route
        path="usersidebar"
        element={<ProtectedRoute element={<Dashboard />} />}
      > */}
        {/* Add routes specific to the user dashboard */}
       
     
      </Route>

      {/* <Route path="" element={<UserSidebar />} /> */}
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

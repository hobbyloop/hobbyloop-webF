import HomePage from "components/pages/HomePage";
import TestComponents from "components/pages/TestComponents";
import AdminLoginPage from "components/pages/auth/AdminLoginPage";
import InstructorLoginPage from "components/pages/auth/InstructorLoginPage";
import CompanyRegisterPage from "components/pages/company/CompanyRegisterPage";
import CourseManage from "components/pages/course/CourseManage";
import CourseRegister from "components/pages/course/CourseRegsiter";
import FacilityRegisterPage from "components/pages/facility/FacilityRegisterPage";
import ProfileSelectPage from "components/pages/facility/ProfileSelectPage";
import SubscriptionManage from "components/pages/subscription/SubscriptionManage";
import SubscriptionRegister from "components/pages/subscription/SubscriptionRegister";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "utils/constants/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.gray_EFEFE8};
  gap: 5px;
  width: 100%;
  height: 100%;
`;

const router = createBrowserRouter([
  { index: true, element: <HomePage /> },
  {
    path: "login_admin",
    element: <AdminLoginPage />,
  },
  {
    path: "login_instructor",
    element: <InstructorLoginPage />,
  },
  {
    path: "company/register",
    element: <CompanyRegisterPage />,
  },
  {
    path: "facility",
    element: <ProfileSelectPage />,
  },
  {
    path: "facility/register",
    element: <FacilityRegisterPage />,
  },
  {
    path: "subscription/register",
    element: <SubscriptionRegister />,
  },
  {
    path: "subscription/manage",
    element: <SubscriptionManage />,
  },
  {
    path: "course/register",
    element: <CourseRegister />,
  },
  {
    path: "course/manage",
    element: <CourseManage />,
  },
  {
    path: "test",
    element: <TestComponents />,
  },
]);

function App() {
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;

import HomePage from "components/pages/HomePage";
import AdminLoginPage from "components/pages/auth/AdminLoginPage";
import InstructorLoginPage from "components/pages/auth/InstructorLoginPage";
import CompanyRegisterPage from "components/pages/company/CompanyRegisterPage";
import FacilityRegisterPage from "components/pages/facility/FacilityRegisterPage";
import ProfileSelectPage from "components/pages/facility/ProfileSelectPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
]);

function App() {
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;

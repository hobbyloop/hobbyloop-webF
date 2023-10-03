import AdminLoginPage from "pages/AdminLoginPage";
import HomePage from "pages/HomePage";
import InstructorLoginPage from "pages/InstructorLoginPage";
import FacilityRegisterPage from "pages/facility/FacilityRegisterPage";
import ProfileSelectPage from "pages/facility/ProfileSelectPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const router = createBrowserRouter([
  { path: "home", element: <HomePage /> },
  {
    path: "login_admin",
    element: <AdminLoginPage />,
  },
  {
    path: "login_instructor",
    element: <InstructorLoginPage />,
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

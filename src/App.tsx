import AdminLoginPage from 'components/pages/AdminLoginPage';
import HomePage from 'components/pages/HomePage';
import InstructorLoginPage from 'components/pages/InstructorLoginPage';
import NaverCallbackPage from 'components/pages/NaverCallbackPage';
import FacilityRegisterPage from 'components/pages/facility/FacilityRegisterPage';
import ProfileSelectPage from 'components/pages/facility/ProfileSelectPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const router = createBrowserRouter([
  { index: true, element: <HomePage /> },
  {
    path: 'login_admin',
    element: <AdminLoginPage />,
  },
  {
    path: 'login_instructor',
    element: <InstructorLoginPage />,
  },
  {
    path: 'auth/naver/callback',
    element: <NaverCallbackPage />,
  },
  {
    path: 'facility',
    element: <ProfileSelectPage />,
  },
  {
    path: 'facility/register',
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

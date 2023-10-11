import axios from 'axios';
import { useEffect } from 'react';
import { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } from 'utils/constants/auth';

function NaverCallbackPage() {
  useEffect(() => {
    const fetchAccessCode = async () => {
      const code = new URL(window.location.href).searchParams.get('code');
      console.log(code);

      try {
        // 네이버 로그인 API 호출 및 리다이렉션
        // CORS
        const response = await axios.get(
          `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${NAVER_CLIENT_ID}&client_secret=${NAVER_CLIENT_SECRET}&code=${code}&state=test`,
        );
        console.log(response);

        // 네이버 로그인 페이지로 리다이렉션
        window.location.href = response.data;
      } catch (error) {
        console.error('네이버 로그인 오류:', error);
      }
    };
    fetchAccessCode();
  });

  return <div>callback page</div>;
}

export default NaverCallbackPage;

import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false, // mount 됐을 때 data가 오래됐다고 판단한 경우 자동으로 query 수행 여부
      refetchOnReconnect: false, // 네트워크가 reconnect됐을 때 query 수행 여부
      refetchOnWindowFocus: false, // 브라우저 focus가 다시 돌아왔을 때 query 수행 여부
      retry: false, // 에러 발생 시 자동 query 수행 여부
    },
  },
});

export default queryClient;

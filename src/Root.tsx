import { QueryClientProvider } from "@tanstack/react-query";
import App from "App";
import { GlobalFonts } from "components/styles/GlobalFonts";
import { GlobalStyles } from "components/styles/GlobalStyles";
import { RecoilRoot } from "recoil";
import queryClient from "utils/config/react-query";

/**
 * @description 최상위 컴포넌트로서 설정 담당
 */
function Root() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalFonts />
        <GlobalStyles />
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default Root;

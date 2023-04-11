import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

// import { AppLayout } from "./components/layouts";
import { ChakraProvider } from "@chakra-ui/react";
// import BasicStyle from "./theme/basicStyle";
// import GlobalStyle from "./theme/globalStyle";

import { theme } from "./theme/Theme.base";
import { PublicRoutes } from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ChakraProvider theme={theme} cssVarsRoot={undefined}>
        {/* <BasicStyle />
        <GlobalStyle /> */}
        <QueryClientProvider client={queryClient}>
          <Router>
            <PublicRoutes />
          </Router>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}

export default App;

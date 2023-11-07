import Router from "./route/Index";

import { Toaster } from "react-hot-toast";
import ThemeProvider from "./layout/provider/Theme";

const App = () => {
  return (
    <ThemeProvider>
      <Router />
      <Toaster />
    </ThemeProvider>
  );
};
export default App;

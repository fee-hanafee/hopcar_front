import { AuthContextProvider } from "./feature/context/authProvider";
import { RenderContextProvider } from "./feature/context/renderProvider";
import Router from "./route";

function App() {
  return (
    <AuthContextProvider>
      <RenderContextProvider>
        <Router />
      </RenderContextProvider>
    </AuthContextProvider>
  );
}

export default App;

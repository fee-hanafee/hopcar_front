import { AuthContextProvider } from "./feature/context/authProvider";
import { ManageContextProvider } from "./feature/context/manageProvider";
import { RenderContextProvider } from "./feature/context/renderProvider";
import Router from "./route";

function App() {
  return (
    <AuthContextProvider>
      <RenderContextProvider>
        <ManageContextProvider>
          <Router />
        </ManageContextProvider>
      </RenderContextProvider>
    </AuthContextProvider>
  );
}

export default App;

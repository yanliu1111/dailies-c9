import "./App.css";
import { RestofApp } from "./compoent/RestofApp";
import { AuthProvider } from "./provider/AuthProvider";
import { FirebaseProvider } from "./provider/FirebaseProvider";

function App() {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <RestofApp />
      </AuthProvider>
    </FirebaseProvider>
  );
}

export default App;

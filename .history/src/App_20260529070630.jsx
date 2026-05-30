import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";

export default function App() {
  const [page, setPage] = useState("login");
  if (page === "signup") {
    return <Signup setPage={setPage} />;
  }
  return <LoginPage setPage={setPage} />;
}

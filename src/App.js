import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setName, setEmail } from "./redux/reducers/userReducer";
import { setTheme } from "./redux/reducers/themeReducer";
import { Routes, Route } from "react-router-dom";
import RouterList from "./routes/router-list";
import { Template } from "./components/main-components";
import Header from "./components/partials/Header/index";
import Footer from "./components/partials/Footer/index";

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme);

  return (
    <Template>
      <Header />
      <RouterList />
      <Footer />
    </Template>
  );
}

import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setName, setEmail } from "./redux/reducers/userReducer";
import { setTheme } from "./redux/reducers/themeReducer";
import { Routes, Route } from "react-router-dom";
import RouterList from "./routes/router-list";

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme);

  return (
    <div>
      <RouterList />
    </div>
  );
}

import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./router/AppRouter";
import store from "./store/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          Hello and welcome to Plus FIT <strong>Boss, Mahmoud!</strong>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ThemeContextProvider } from "./assets/contexts/share/theme.context";
import AppWrapper from "./AppWrapper";
import { Provider } from "react-redux";
import store from "./assets/redux/store";

const ProjectRoot = ReactDOM.createRoot(document.getElementById("root")!)
const Template = (
  <HashRouter>
      <Provider store={store}>
        <ThemeContextProvider>
          <AppWrapper />
        </ThemeContextProvider>
      </Provider>
  </HashRouter>
);

const render = () => {
  ProjectRoot.render(
    Template
  )
}
render()

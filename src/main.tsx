import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ThemeContextProvider } from "./assets/contexts/share/theme.context";
import AppWrapper from "./AppWrapper";

const ProjectRoot = ReactDOM.createRoot(document.getElementById("root")!)
const Template = (
  <HashRouter>
      <ThemeContextProvider>
        <AppWrapper />
      </ThemeContextProvider>
  </HashRouter>
);

const render = () => {
  ProjectRoot.render(
    Template
  )
}
render()

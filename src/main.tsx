import ReactDOM from "react-dom/client";
import React from "react";
import App from "./modules/App";
import theme from "./common/theme";
import { ThemeProvider } from "styled-components";
import { GameStateProvider } from "@providers/GameState";
import { Layout } from "./common/components";
import "./common/theme/globalStyles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GameStateProvider>
        <Layout>
          <App />
        </Layout>
      </GameStateProvider>
    </ThemeProvider>
  </React.StrictMode>
);

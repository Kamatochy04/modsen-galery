import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./pages/Router";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400&500&600&700&300display=swap");

:root {
  --light-color: #fff;

  --dark-color: #393939;

  --main-color: #f17900;
  --second-color: #e0a449;
}

* {
  box-sizing: border-box;
  font-family: "Lexend Deca", sans-serif;
  margin: 0;
  padding: 0;
}

input {
  outline: none;
}
a {
  text-decoration: none;
  color: inherit;
}

body {
  background: #fafafa;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
  outline: none;
  border: none;
}

input {
  outlet: none;
  border: none;
}

`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Global />
      <Router />
    </BrowserRouter>
  </StrictMode>
);

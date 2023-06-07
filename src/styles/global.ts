import { createGlobalStyle } from "styled-components"
import * as Styles from "./variables"

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${Styles.gray}
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
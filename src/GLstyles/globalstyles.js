import { createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
     font-family: "Roboto", sans-serif;
}
body {
    display: flex;
    align-items: center;
    justify-content: center;
        background: #121212;
}
`


export default GlobalStyle
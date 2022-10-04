import { Stack, Box } from "@mui/material";
import "./App.css";
import styled from "styled-components";

import { createTheme, ThemeProvider } from "@mui/material";

import Header from "./components/header/Header";
import ImageBg from "./components/body/ImageBg";
import ImagesGrid from "./components/body/ImagesGrid";
import RedDots from "./components/body/RedDots";
import Carousel from "./components/body/Carousel";
import Footer from "./components/footer/Footer";

const App = () => {
    const theme = createTheme({
        typography: {
            fontFamily: ["Montserrat", "sans-serif"].join(","),
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Stack sx={{ height: "100vh" }}>
                <Header />
                <BodyWrapper className="body-wrapper">
                    <ImageBg />
                    <ImagesGrid />
                    <RedDots />
                    <Carousel />
                    <Footer />
                </BodyWrapper>
            </Stack>
        </ThemeProvider>
    );
};

const BodyWrapper = styled(Box)`
    ::-webkit-scrollbar {
        display: none;
    }

    height: 100%;
    overflow-y: scroll;
`;

export default App;

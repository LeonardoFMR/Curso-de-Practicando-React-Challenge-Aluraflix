import Pie from "components/Pie/Pie";
import Cabecera from "components/Cabecera/Cabecera";
import Inicio from "pages/Inicio";
import NuevoVideo from "pages/NuevoVideo/NuevoVideo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { VideoProvider } from "contexts/VideoContext";
import Container from "components/Container/Container";

function AppRoutes() {
    return (
        <VideoProvider>
            <BrowserRouter>

                <Container>
                    <Cabecera />
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/nuevo" element={<NuevoVideo />}></Route>
                    </Routes>
                    <Pie />
                </Container>

            </BrowserRouter>
        </VideoProvider>
    );
}

export default AppRoutes;

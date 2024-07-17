import Pie from "components/Pie/Pie";
import Cabecera from "components/Cabecera/Cabecera";
import Inicio from "pages/Inicio";
import NuevoVideo from "pages/NuevoVideo/NuevoVideo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "components/Container/Container";
import { VideoProvider } from "contexts/VideoContext";

function AppRoutes() {
    return (
        <VideoProvider>
        <BrowserRouter>
            <Cabecera />
            <Container>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/nuevo" element={<NuevoVideo />}></Route>
            </Routes>
            </Container>
            <Pie />
        </BrowserRouter>
        </VideoProvider>
    )
}
export default AppRoutes;
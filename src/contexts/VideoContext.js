import React, { createContext, useState } from "react";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);

    const registrarNuevo = (nuevoVideo) => {
        setVideos([...videos, nuevoVideo]);
    };

    const eliminarVideo = (titulo) => {
        setVideos(videos.filter(video => video.titulo !== titulo));
    };

    return (
        <VideoContext.Provider value={{ videos, registrarNuevo, eliminarVideo }}>
            {children}
        </VideoContext.Provider>
    );
};

export { VideoContext, VideoProvider };

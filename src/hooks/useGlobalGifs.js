import { useContext } from "react";

import { Context } from "../context/gifContext";

export const useGlobalGifs = () => {
    const { gifs } = useContext(Context);
    return gifs
}
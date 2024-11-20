import { useContext } from "react";
import { SnackbarContext } from "../context/SnackbarContext";


export const useSnackbar = () => useContext(SnackbarContext)
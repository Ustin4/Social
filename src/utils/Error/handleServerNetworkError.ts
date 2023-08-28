import {setAppError, setAppStatus} from "../../redux/auth-reducer";
import {AppDispatch} from "../../redux/redux-store";
import axios from "axios";

export const handleServerNetworkError = (err: unknown, dispatch: AppDispatch): void => {
    let errorMessage = "Some error occurred";


    if (axios.isAxiosError(err)) {
        errorMessage = err.response?.data?.message || err?.message || errorMessage;
    } else if (err instanceof Error) {
        errorMessage = `Native error: ${err.message}`;
    } else {
        errorMessage = JSON.stringify(err);
    }

    dispatch(setAppError(errorMessage))
    dispatch(setAppStatus("failed"));
};
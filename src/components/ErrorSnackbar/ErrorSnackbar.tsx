import React from "react";
import {useSelector} from "react-redux";
import {AlertProps, Snackbar} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import {AppRootStateType, useAppDispatch} from "../../redux/redux-store";
import {setAppError} from "../../redux/auth-reducer";


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function ErrorSnackbar() {
    const error = useSelector((state: AppRootStateType) => state.auth.error);
    const dispatch = useAppDispatch();

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch(setAppError(null));
    };

    const isOpen =  error !== null;

    return (
        <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {error}
            </Alert>
        </Snackbar>
    );
}

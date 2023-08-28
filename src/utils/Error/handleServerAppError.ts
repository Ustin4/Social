import {Dispatch} from "redux";
import {setAppError, setAppStatus} from "../../redux/auth-reducer";

export type BaseResponse<D = {}> = {
    resultCode: number;
    messages: Array<string>;
    data: D;
};

export const handleServerAppError = <D>(data: BaseResponse<D>, dispatch: Dispatch) => {
    if (data.messages.length) {
        dispatch(setAppError(data.messages[0]));
    } else {
        dispatch(setAppError( "Some error occurred"));
    }
    dispatch(setAppStatus( "failed"));
};


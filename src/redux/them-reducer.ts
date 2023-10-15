const initialState = {
    darkMode: false
};

type InitialStateType = typeof initialState

const themReducer = (state: InitialStateType = initialState, action: ActionThemTypes) => {
    switch (action.type) {
        case "SET-DARK-MODE":
            return {
                ...state, darkMode: action.darkMode
            }
        default:
            return state
    }

}


export type ActionThemTypes = ReturnType<typeof setDarkMode>

export const setDarkMode = (darkMode: boolean) => ({type: 'SET-DARK-MODE', darkMode} as const)


export default themReducer
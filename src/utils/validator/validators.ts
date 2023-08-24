type validateFromMyPostsType = {
    send: string
}

type validateFromLoginType = {
    email: string,
    password: string,
    rememberMe: boolean
}
export const validateFromMyPosts = (values: validateFromMyPostsType) => {
    if (!values.send) {
        return {
            send: 'send is required'
        }
    } else if (values.send.length > 30) {
        return {
            send: 'Max Length is 30 symbols'
        }
    }
}

export const validateFromLogin = (values: validateFromLoginType) => {
    if (!values.email) {
        return {
            email: "Email is required",
        }
    }
    if (!values.password) {
        return {
            password: "Password is required",
        }
    }
}


// export const required = (value: any) => {
//     if (value) return undefined
//     return "Field is required"
// }
//
// export const maxLengthCreator = (maxLength: any) => (value: any) => {
//     if (value.length > maxLength) return `Max length is ${maxLength} symbols`
//     return undefined
// }
//
// export const maxLength30 = (value: string) => {
//     if (value.length > 30) return "Max length is 30 symbols"
//     return undefined
// }
// type validateType = {
//     send?: string
//     email?: string,
//     password?: string,
//     rememberMe?: boolean
// }
//

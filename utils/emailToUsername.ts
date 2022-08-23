export const convertEmail = (email: string) => {
    return email.split("@")[0].replace(".", "")
}
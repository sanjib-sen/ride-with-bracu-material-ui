export interface Profile {
    uid: string
    username: string
    email: string
    name: string
    image: string | null
    gender?: string | null
    area?: string | null
}
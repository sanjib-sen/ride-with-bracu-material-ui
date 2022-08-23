import { getDatabase, ref, set } from "firebase/database";
import { Profile } from "../types/Profile";

export function WriteUserData(profile: Profile) {
    const db = getDatabase()
    console.log(profile);
    set(ref(db, 'users/' + profile.uid), profile)
}
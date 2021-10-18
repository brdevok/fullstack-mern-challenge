import { ProfileData } from "./Home";

/**
 * Provide the available values of the user context.
 */
export interface UserContextProps {
    user:ProfileData|undefined,
    isParent:boolean|undefined
}
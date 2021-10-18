import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { GetProfileResponse, ProfileData } from "../../../../types/Home";
import { UserContextProps } from "../../../../types/UserContext";

export const UserContext = createContext({} as UserContextProps);

export const UserProvider:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    const [user, setUser] = useState<ProfileData>();
    const [isParent, setIsParent] = useState<boolean>();

    const getUser = async ():Promise<void> => {

        const _user = await axios.get<GetProfileResponse>("/api/profile");

        if (_user.data) setUser(_user.data);
        if (_user.data.children) {
            setIsParent(true);
        } else {
            setIsParent(false);
        }

    }

    useEffect(() => { getUser(); }, []);

    return(
        <UserContext.Provider
            value={{
                user,
                isParent
            }}
        >
            {children}
        </UserContext.Provider>
    );

}
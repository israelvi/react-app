import React, { createContext, MutableRefObject } from 'react';

interface ContextProps {
    scrollRef: MutableRefObject<{scrollPos: number;}>;
 }

const UserContext = createContext({} as ContextProps);

export default UserContext;

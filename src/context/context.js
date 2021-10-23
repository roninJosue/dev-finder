import {createContext} from "react";

const DevFinderContext = createContext({})

export const DevFinderProvider = DevFinderContext.Provider
export const DevFinderConsumer = DevFinderContext.Consumer

export default DevFinderContext

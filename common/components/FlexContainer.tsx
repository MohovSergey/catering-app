import { ReactNode } from "react"

type FlexContainerType = {
    children: ReactNode;
    className?: string;
}

export const FlexContainer = ({children, className = ''}: FlexContainerType) => {
    return < div className= {`${className} w-full  px-4 sm:px-6 md:px-8 lg:px-12 mx-auto max-w-300`}>
        {children}
    </div>
}




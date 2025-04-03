import { ReactNode } from "react"

interface ContainerProps{
    children: ReactNode;  // The children components to be rendered within the container.  // prop-types library is used for type checking.  // PropTypes.node allows any type of React node (including null or undefined).  // PropTypes.element allows only React elements (not null or undefined).  // PropTypes.elementType allows only React types (not null or undefined).  // PropTypes.shape allows a specific shape of object.  // PropTypes.func allows only functions.  // PropTypes.instanceOf allows only instances of a certain class.  // PropTypes.array allows only arrays.  // PropTypes.object allows only objects.  // PropTypes.bool allows only boolean values.  // PropTypes.string allows only strings.  // PropTypes.number allows only numbers.  // PropTypes.symbol allows only symbols.  // PropTypes.any allows any type.  // PropTypes.objectOf allows only objects with specific property types.  // PropTypes.arrayOf allows only arrays with
}

export const Container: React.FC<ContainerProps> = ({children})=>{

    return(
        <>
            <div className="max-w-screen-xl mx-auto px-3">

                {children}

            </div>
        </>
    )
}
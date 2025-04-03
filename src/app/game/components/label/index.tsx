
interface LabelProps{
    name: string
}

export const Label: React.FC<LabelProps> = ({name})=>{
    return(
        <div
            className="flex-grow sm:flex-grow-0 py-1 px-3 text-base bg-blue-500 text-white rounded-lg text-center 
            hover:font-bold hover:bg-blue-600 transition-all duration-300 ease-in-out cursor-default"
        >

            {name}

        </div>
    )
}
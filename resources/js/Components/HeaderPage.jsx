export const HeaderPage = ({icon, title}) => {

    return (
        <div className="bg-gray-700 flex p-2 space-x-3 items-center mb-4 rounded-tr-md  border-b-red-100">
            <span>{icon}</span>
            <h2 className="text-xl">{title}</h2>
        </div>
    )
}


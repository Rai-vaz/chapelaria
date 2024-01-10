export const HeaderPage = ({icon, title}) => {

    return (
        <div className="bg-header-color flex p-3 space-x-3 items-center rounded-tr-md border-b">
            <span>{icon}</span>
            <h2 className="text-xl">{title}</h2>
        </div>
    )
}


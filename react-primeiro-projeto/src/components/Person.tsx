type Props = {
    name: string;
    avatar?: string;
    roles: string[];
}

export const Person = (props: Props) => {
    
    const {name, avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNuq8F_2PRinfLuxr3n_33tyQoSBe2K3kmw&s', roles}  = props;

    return (
        <div className="p-3">
            <h1>{name}</h1>
            <img 
                src={avatar}
                alt={name}
                className="w-40"
            />
            <h2>Suas Empresas:</h2>
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>
        </div>
    );
}
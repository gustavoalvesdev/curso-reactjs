type Props = {
    name: string;
    description: string;
    avatar: string;
    roles: string[];
}

export const Person = (props: Props) => {
    
    const {name, description, avatar, roles}  = props;

    return (
        <>
            <h1 style={{ color: 'red', fontSize: '30px' }}>{name}</h1>
            <img 
                src={avatar}
                alt={name}
                className="w-40"
            />
            <h2>Suas Empresas:</h2>
            <ul>
                <li>{description}</li>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>
        </>
    );
}
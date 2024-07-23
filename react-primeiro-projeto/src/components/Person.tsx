const getWeekDay = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(today);
}

export const Person = () => {
    
    const data = {
        name: 'Elon Musk',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTam7dK4a6nCf6yhn8M0RPFBa1yIbNrD_9EUJ3NNEk7-o0KGCIZ',
        roles: [
            'CEO da Tesla',
            'CEO da SpaceX'
        ]
    }

    return (
        <>
            <h1 style={{ color: 'red', fontSize: '30px' }}>{data.name} - {getWeekDay(new Date())}</h1>
            <img 
                src={data.avatar}
                alt={data.name}
                className="w-40"
            />
            <h2>Suas Empresas:</h2>
            <ul>
                <li>Fundador, diretor executivo e diretor técnico da <strong>SpaceX</strong></li>
                <li>{data.roles[0]}</li>
                <li>{data.roles[1]}</li>
            </ul>
        </>
    );
}
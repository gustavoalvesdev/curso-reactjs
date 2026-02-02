
export const Hora = () => {

    const dataAtual = new Date();
    const hora: number = dataAtual.getHours();
    const minutos = dataAtual.getMinutes().toString().padStart(2, '0');

    return (
        <div className="text-center">
            <h1 className="text-white text-7xl">{`${hora.toString().padStart(2, '0')}:${minutos}`}</h1>
            
            {hora >= 0 && hora < 12  &&
                <p className="text-white text-3xl font-bold">Bom dia 😃</p>
            }

            {hora >= 12 && hora < 18 &&
                <p className="text-white text-3xl font-bold">Boa tarde 😃</p>
            } 

            {hora >= 18 && hora <= 23 &&
                <p className="text-white text-3xl font-bold">Boa noite 😃</p>
            }       
    
        </div>
    );
}
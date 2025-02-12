
export const Hora = () => {

    const dataAtual = new Date();
    const hora = dataAtual.getHours().toString().padStart(2, '0');
    const minutos = dataAtual.getMinutes().toString().padStart(2, '0');

    return (
        <div className="text-center">
            <h1 className="text-white text-7xl">{`${hora}:${minutos}`}</h1>
            <p className="text-white text-3xl font-bold">Bom dia 😃</p>
        </div>
    );
}
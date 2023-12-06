import "./card.css";

interface CardProps {
    price: number,
    title: string,
    descricao: string,
    image: string
}

export function Card({ price, image, title, descricao } : CardProps){
    return(
        <div className="card">
            <img src={image}/>
            <h2>{title}</h2>
            <p>{descricao}</p>
            <p><b>Valor:</b>{price}</p>
        </div>
    )
}
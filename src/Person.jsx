

export const Person = ({ id, name, age, image }) => {
    return (
        <article className='person'>
            <img src={image} alt={image} className="img" />
            <div>
                <h4>{name}</h4>
                <p>{age}</p>
            </div>
        </article>
    );
}


import './Card.css';

const Card = (props) => {
    return (
        <div style={{ width: "20vw", height: "20vh", border: "2px solid black", overflow: "hidden", margin: "20px" }}>
            <h2>Hi, {props.name}</h2>
            <p>I am {props.age}yrs old.</p>
        </div>
    )
}

export default Card 
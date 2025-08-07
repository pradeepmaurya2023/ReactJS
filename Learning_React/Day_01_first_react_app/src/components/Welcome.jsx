import Button from "./Button";
import './Welcome.css';

const Welcome = () => {
    return (
        <>
            <div className="welcome-container">
                <h1>Welcome</h1>
                <h3>Thanks for Visiting our site.</h3>
                <img src="https://media.tenor.com/u6LphR6oID0AAAAi/bubu-dudu-sseeyall.gif" alt="welcome-image" />
                <div className="btns">
                    <Button text={"Get Started"} />
                    <Button text={"Learn More"} />
                </div>
            </div>
        </>
    )
}

export default Welcome  
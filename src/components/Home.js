import {useState} from "react";

const Home = () => {
    const [hover, setHover] = useState(false); // initial false

    const HoverData = "Опять этот COVID!:(";

    const onHover = (e) => {
        e.preventDefault();
        setHover(true); // turn true
        console.log("hovered");
    };

    const onHoverOver = (e) => {
        e.preventDefault(); // turn false
        setHover(false);
    };

    return (
        <>
            <h2>Home Page</h2>
            {hover && <h3 className={hover}>{HoverData}</h3>}
            <img onMouseEnter={(e) => onHover(e)}
                 onMouseLeave={(e) => onHoverOver(e)}
                 alt=""
                 src={'https://user.vse42.ru/files/P_S1280x1022q80/Wnone/ui-5e43be04728d09.15102221.jpeg'}></img>
        </>
    );
};

export default Home;

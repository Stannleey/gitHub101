import React, {useState, useEffect} from 'react';
import "./PracticeEffect.css";

function PracticeEffect(){

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    });

    function addCount(){
        setCount(c => c + 1)};

    function subtractCount(){
        setCount(c => c - 1);
    };

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        console.log("Event listener added");

        return() => {
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed");
        }
    }, []);

    useEffect(()=> {
        document.title = `Size: ${width} × ${height}`;
    }, [width, height]);
    

    return(<>
        <p>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>);
}

export default PracticeEffect
import React,{useState} from 'react';
import './StopWatch.css';

let adjustInterval = undefined;
function StopWatch(){
    const [watch, setWatch] = useState(0);
    const [started, setStarted] = useState(false);
    function start(){
        adjustInterval = setInterval(()=>{
            setWatch((x)=>x+1)
        },1000)

        setStarted(true);
    }

    function stop(){
        clearInterval(adjustInterval);
        setStarted(false);
    }

    function reset(){
        setWatch(0);
        clearInterval(adjustInterval);
        setStarted(false);
    }

    return(
        <div>
            <h1>Start Stop Watch</h1>
            <h2>{watch}</h2>
            <button className='start' disabled={started} onClick={start}>Start</button>
            <button className='stop' onClick={stop}>Stop</button>
            <button className='reset' onClick={reset}>Reset</button>
        </div>
    )
}

export default StopWatch;
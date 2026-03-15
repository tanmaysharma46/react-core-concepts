import { useState } from "react"

export default function Batsman(){
    let  [runs,setRuns] =useState(0);
    const handleRunsOne =()=>{
        const newRun =runs+1;
        setRuns(newRun)

    }
       const handleRunsFours=()=>{
        const newRun=runs+4;
        setRuns(newRun);
    }

      const handleRunsSix =()=>{
        const newRun =runs+6;
        setRuns(newRun)

    }
 
    return(
        <div>
            <h3>Player : Bangla Batsman </h3>
            <p>Runs : {runs}</p>
            <button onClick={handleRunsOne}>Sigles </button>
            <button onClick={handleRunsFours}>fours </button>
            <button onClick={handleRunsSix}>sixes</button>
        </div>
    )
}



//5 case of useState()
/**
 * State management 
 * conditional rendering 
 * Toggle flags (true or false )
 * counter 
 * store Api data in state 
 * 
 */
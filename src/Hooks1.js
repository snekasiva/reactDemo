import React, { useState } from 'react'

function Hooks1() {
    const [example, setexample] = useState(0);
    const [para, setpara] = useState(false);
    return (
        <div>
            <button className='btn btn-sm btn-outline-danger m-2' onClick={() => setexample(example - 1)} disable="(count<=0)" >
                - </button>
            {example}
            <button className='btn btn-sm btn-outline-primary m-2' onClick={() => setexample(example + 1)} disable="(count>=10)">
                + </button>
            <div className='par m-5'>
                <button className={para?'btn btn-sm btn-outline-danger':'btn btn-sm btn-outline-primary'} onClick={()=>setpara(!para)}>{para?"hide":"show"}</button>
                {
                para? <p>he href attribute requires a valid value to be accessible. 
                    Provide a valid, navigable address as the href value. If you
                 cannot provide a valid href, but still need the element to resemble a link,</p>:""
                 }
                
            </div>
        </div>
    )
}

export default Hooks1
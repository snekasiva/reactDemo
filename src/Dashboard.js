import React from 'react'

function Dashboard() {
    const data = [
        {
            name:"primary card",
            color:"primary"
        },
        {
            name:"warning card",
            color:"warning"
        },
        {
            name:"success card",
            color:"success"
        },
        {
            name:"danger card",
            color:"danger"
        },
    ]
    return (
        
        <div className='container'>
            <div className='row'>
                {
                    data.map((item)=>{
                        return <div className='col-3'>
                        <div class={`card bg-${item.color} text-white`}>                            
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p>{item.name}</p>                               
                                </blockquote>
                            </div>
                            <div class="card-header">view details</div>
                        </div>
                    </div>
                    })
                }
                
            </div>
        </div>
    )
}

export default Dashboard
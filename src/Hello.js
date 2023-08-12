import React from 'react'

function Hello() {
    const data = [
        {
            name: "free",
            price: "0",
            user: "single user",
            storage: "5 GB Storage",
            subdomain: "Free subdomain"
        },
        {
            name: "plus",
            price: "9",
            user: "50 user",
            storage: "5 GB Storage",
            subdomain: "Free subdomain"
        },
        {
            name: "pro",
            price: "49",
            user: "unlimited user",
            storage: "150 GB Storage",
            subdomain: "Unlimited Free subdomain"
        }
    ]
    return (
        <div>
            <section class="pricing py-5">
                <div class="container">
                    <div class="row">
                        {
                            data.map((item) => {
                                return <div class="col-lg-4">
                                    <div class="card mb-5 mb-lg-0">
                                        <div class="card-body">
                                            <h5 class="card-title text-muted text-uppercase text-center">
                                                {item.name}</h5>
                                            <h6 class="card-price text-center">
                                                {item.price}$0<span class="period">/month</span></h6>
                                            <hr />
                                            <ul class="fa-ul">
                                                <li><span class="fa-li"><i class="fa fa-check"></i></span>
                                                    {item.name === "free" ? item.user : <b>{item.user}</b>}
                                                </li>
                                                <li><span class="fa-li">
                                                    <i class="fa fa-check"></i></span>
                                                    {item.storage}</li>
                                                <li><span class="fa-li">
                                                    <i class="fa fa-check"></i>
                                                </span>Unlimited Public Projects</li>
                                                <li><span class="fa-li">
                                                    <i class="fa fa-check"></i>
                                                </span>Community Access</li>
                                                <li class="text-muted">
                                                    <span class="fa-li">
                                                        <i class={item.name === 'free' ? "fa fa-times" : "fa fa-check"}></i>
                                                    </span>Unlimited Private Projects
                                                </li>
                                                <li class="text-muted"><span class="fa-li">
                                                    <i class={item.name === 'free' ? "fa fa-times" : "fa fa-check"}></i>
                                                </span>Dedicated  Phone Support
                                                </li>
                                                <li class="text-muted"><span class="fa-li">
                                                    <i class={item.name === 'free' ? "fa fa-times" : "fa fa-check"}></i>
                                                </span>{item.name === 'pro' ? <><b>unlimited</b>{item.subdomain}</> : item.subdomain}
                                                </li>
                                                <li class="text-muted"><span class="fa-li">
                                                    <i class={item.name === 'pro' ? "fa fa-check" : "fa fa-times"}></i>
                                                </span>Monthly Status
                                                    Reports</li>
                                            </ul>
                                            <div class="d-grid">
                                                <a href="#" class="btn btn-primary text-uppercase">Button</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hello
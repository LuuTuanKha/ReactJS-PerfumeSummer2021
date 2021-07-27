import React, { useState } from 'react'
import GetProduct from './GetProduct'
import { Link, Route } from 'react-router-dom'


const GetProductIndex = () => {
    
    const [Activeindexstate, setActiveindexstate] = useState([' active', ' '])
    const [indexstate, setindexstate] = useState(0)
    // const [indexTabstate, setindexTabstate] = useState(-1)
   
    const tabOnCLick = (index) => {
        let temp = [...Activeindexstate]
        temp.fill('')
        temp[index] = ' active'
        setindexstate(index)


        setActiveindexstate(temp)
        console.log(Activeindexstate)

    }
    return (
        <div className="">
            <div class="card text-center ">
                <div class="card-header">
                    <ul class="justify-content-center nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <Route>
                                <Link class={`nav-link ${Activeindexstate[0]}`} aria-current="true" onClick={() => tabOnCLick(0)}  >Tất cả sản phẩm</Link>
                            </Route>
                        </li>
                        <li class="nav-item" >
                            <Link class={`nav-link ${Activeindexstate[1]}`} onClick={() => tabOnCLick(1)}>Bán chạy nhất</Link>
                        </li>
                        {/* <li class="nav-item" >
                            <Link class={`nav-link ${Activeindexstate[1]}`} onClick={()=>tabOnCLick(1)}>Link</Link>
                        </li> */}

                    </ul>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Chào mừng đến với thế giới nước hoa của TK Shop</h5>
                    <p class="card-text">
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                    {/* <Link class="btn btn-primary animated infinite bounce delay-2s">Go somewhere</Link> */}
                </div>
                {/* <GetProduct /> */}
                <div class="">
                {indexstate === 0 && <GetProduct />}
                </div>
                
            </div>


        </div>
    )
}

export default GetProductIndex

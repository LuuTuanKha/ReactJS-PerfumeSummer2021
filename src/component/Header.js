import React, { useState } from 'react'
import { BrowserRouter as Link, NavLink } from "react-router-dom";
import logo from '../assets/image/WTM.png'
const Header = () => {
    const [indexHeader, setindexHeader] = useState(0)

    const [valueHeaderClass, setvalueHeaderClass] = useState([' active', ' '])
    const headerOnClick = (CurrentIndexOfHeader) => {
        setindexHeader(CurrentIndexOfHeader)
        let temp = [...valueHeaderClass]
        temp.fill('')
        temp[CurrentIndexOfHeader] = ' active'
        setvalueHeaderClass(CurrentIndexOfHeader)
        setvalueHeaderClass(temp)
        console.log('xx' + valueHeaderClass + indexHeader)

    }
    return (

        <header>

            {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"> */}

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <a class="navbar-brand mt-2 mt-lg-0" href="/trang-chu">
                            <img
                                src={logo}
                                height="15"
                                alt=""
                                loading="lazy"
                            />
                        </a>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li>
                            <NavLink to="/trang-chu" className = "nav-link" activeClassName="nav-link active">
                                  <strong>Trang chủ</strong> 
                                </NavLink>
                            </li>
                            <li>
                            <NavLink to="/bo-suu-tap" className = "nav-link" activeClassName="nav-link active">
                            <strong>Bộ sưu tập</strong> 
                                </NavLink>
                            </li>
                            <li>
                            <NavLink to="/faq3" className = "nav-link" activeClassName="nav-link active">
                            <strong>Khác</strong> 
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>

                    <div class="d-flex align-items-center">
                        <a class="text-reset me-3" href="#">
                            <i class="fas fa-shopping-cart"></i>
                        </a>

                        <a
                            class="text-reset me-3 dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i class="fas fa-bell"></i>
                            <span class="badge rounded-pill badge-notification bg-danger">1</span>
                        </a>
                        <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <li>
                                <a class="dropdown-item" href="#">Some news</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Another news</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>

                        <a
                            class="dropdown-toggle d-flex align-items-center hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                                class="rounded-circle"
                                height="25"
                                alt=""
                                loading="lazy"
                            />
                        </a>
                        <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <li>
                                <a class="dropdown-item" href="#">My profile</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Settings</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>




        </header>

    )


}

export default Header

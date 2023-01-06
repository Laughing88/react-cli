import React, {Component} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import "./router.less"
import Home from "../home/home";
import About from "../about/about";
class Router extends Component {
    render() {
        return (
            <div className="main">
                <BrowserRouter>
                    <div className="nav">
                        <Link to="/">首页</Link>
                        <Link to="/about">关于</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/about" element={<About/>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default Router;

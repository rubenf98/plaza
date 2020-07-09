import React from 'react'
import { Link } from "react-router-dom";
import { Row } from "antd";
import { Parallax } from 'react-parallax';
import RegisterForm from "./RegisterForm";

class Home extends React.Component {
    render() {
        return (
            <div className="homepage-container">
                <Parallax
                    bgImage="https://colorlib.com/preview/theme/publishingcompany/images/bg_1.jpg"
                    strength={400}
                >
                    <Row className="homepage-header" type="flex" align="middle">
                        <div className="header-container">
                            <h1 className="header-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                            <RegisterForm></RegisterForm>
                        </div>
                    </Row>
                </Parallax>


                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatibus quidem, excepturi tempore quae architecto ipsam facere veniam facilis iusto reprehenderit, temporibus cum et reiciendis quis quod, quas veritatis labore?
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatibus quidem, excepturi tempore quae architecto ipsam facere veniam facilis iusto reprehenderit, temporibus cum et reiciendis quis quod, quas veritatis labore?
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatibus quidem, excepturi tempore quae architecto ipsam facere veniam facilis iusto reprehenderit, temporibus cum et reiciendis quis quod, quas veritatis labore?
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatibus quidem, excepturi tempore quae architecto ipsam facere veniam facilis iusto reprehenderit, temporibus cum et reiciendis quis quod, quas veritatis labore?
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatibus quidem, excepturi tempore quae architecto ipsam facere veniam facilis iusto reprehenderit, temporibus cum et reiciendis quis quod, quas veritatis labore?
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatibus quidem, excepturi tempore quae architecto ipsam facere veniam facilis iusto reprehenderit, temporibus cum et reiciendis quis quod, quas veritatis labore?
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatibus quidem, excepturi tempore quae architecto ipsam facere veniam facilis iusto reprehenderit, temporibus cum et reiciendis quis quod, quas veritatis labore?
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatibus quidem, excepturi tempore quae architecto ipsam facere veniam facilis iusto reprehenderit, temporibus cum et reiciendis quis quod, quas veritatis labore?
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatibus quidem, excepturi tempore quae architecto ipsam facere veniam facilis iusto reprehenderit, temporibus cum et reiciendis quis quod, quas veritatis labore?
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatibus quidem, excepturi tempore quae architecto ipsam facere veniam facilis iusto reprehenderit, temporibus cum et reiciendis quis quod, quas veritatis labore?
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatibus quidem, excepturi tempore quae architecto ipsam facere veniam facilis iusto reprehenderit, temporibus cum et reiciendis quis quod, quas veritatis labore?
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatibus quidem, excepturi tempore quae architecto ipsam facere veniam facilis iusto reprehenderit, temporibus cum et reiciendis quis quod, quas veritatis labore?
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatibus quidem, excepturi tempore quae architecto ipsam facere veniam facilis iusto reprehenderit, temporibus cum et reiciendis quis quod, quas veritatis labore?
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatibus quidem, excepturi tempore quae architecto ipsam facere veniam facilis iusto reprehenderit, temporibus cum et reiciendis quis quod, quas veritatis labore?
                </h1>
                <ul>
                    <li>
                        <Link to="/example">Example</Link>
                    </li>
                </ul>
            </div>

        );
    }
}

export default Home
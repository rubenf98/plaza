
import DashboardLayout from '../DashboardLayout';
import React from 'react';
import { Row, Col, Button } from "antd";
import { Document } from 'react-pdf/dist/entry.webpack';
import { Page } from 'react-pdf'
import { LeftOutlined, RightOutlined, DownloadOutlined } from '@ant-design/icons';
import PdfDocument from '../../common/PdfDocument';


class Orcamentos extends React.Component {


    render() {

        return (
            <DashboardLayout >
                <div className="orcamento-page-container">
                    <Row type="flex" justify="center" className="pdf-document-container">
                        <Row type="flex" justify="space-around">

                            <PdfDocument pdf={`${window.location.origin}/api/pdf/orcamento`} />

                            <ul className="orcamento-list">

                                <li className="orcamento-item">
                                    Orçamento Agosto 2019 a Setembro 2020
                                    </li>
                                <li className="orcamento-item">
                                    Orçamento Agosto 2019 a Setembro 2020
                                    </li>
                                <li className="orcamento-item">
                                    Orçamento Agosto 2019 a Setembro 2020
                                    </li>
                                <li className="orcamento-item">
                                    Orçamento Agosto 2019 a Setembro 2020
                                    </li>

                                <li className="orcamento-item">
                                    Orçamento Agosto 2019 a Setembro 2020
                                    </li>
                                <li className="orcamento-item">
                                    Orçamento Agosto 2019 a Setembro 2020
                                    </li>
                                <li className="orcamento-item">
                                    Orçamento Agosto 2019 a Setembro 2020
                                    </li>
                            </ul>

                        </Row>

                    </Row>
                </div>

            </DashboardLayout>
        );
    }
}

export default Orcamentos;

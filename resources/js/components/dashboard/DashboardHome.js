import React from 'react'
import DashboardLayout from './DashboardLayout';
import { Link } from "react-router-dom";

class DashboardHome extends React.Component {
    render() {
        return (
            <DashboardLayout>
                <ul>
                    <li>
                        <Link to="/painel/pagamentos"> Pagamentos</Link>
                    </li>
                    <li>
                        <Link to="/painel/contas"> Contas</Link>
                    </li>
                </ul>
            </DashboardLayout>
        );
    }
}

export default DashboardHome
import React, { Fragment } from 'react';
import { isParameterNull } from '../../../helper';
import moment from 'moment';

const ProfileOverview = (props) => {
    return (
        <Fragment>
            <h1 className="name">{props.user.nome}</h1>

            <h3 className="title">Informação Geral</h3>
            <ul>
                <li>
                    <span className="list-title">Data de Nascimento</span> <span className="list-bday"> {props.user.b_day ? moment(props.user.b_day).format('MMM DD, YYYY') : isParameterNull(props.user.b_day)}
                    </span></li>
                <li>
                    <span className="list-title">Fração</span> {props.userHasFracao ? "Bloco " + props.user.fracaos[0].bloco + ", Fração " + props.user.fracaos[0].nome : isParameterNull(null)}
                </li>
                <li>
                    <span className="list-title">Email</span> {props.user.email}
                </li>
                <li>
                    <span className="list-title">Contacto</span> {isParameterNull(props.user.contacto)}
                </li>
            </ul>
        </Fragment>
    );
}

export default ProfileOverview;



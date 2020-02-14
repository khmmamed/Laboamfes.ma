import * as React from 'react';
import { Link } from 'react-router-dom';
import { ContainerWrapper } from '../../../components/react-wrapper/src/ContainerWrapper';

interface IAppProps {
}

const Dashboard: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <div>
            <div style={{width : '250px', height : '100%'}}>sidebar</div>
            <ContainerWrapper>

                <h3> Mon Compte </h3>
                <h3> <Link to="/admin/addRequest" >Ajouter Demande </Link></h3>
                <h5> entrer Patien </h5>
                <h5> Methode de Reglement </h5>
                <h5> Ajouter Analyses </h5>
                <h3> Calculer Bilan</h3>
                <h3> Voir Resultat </h3>

            </ContainerWrapper>
        </div>
    )
};

export default Dashboard;

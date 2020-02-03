import * as React from 'react';
import { ContainerWrapper } from '../../components/react-wrapper/src'
import { Button } from '../../containers/Button';
import { Link } from 'react-router-dom';
import { Input } from '../../containers/Input';
import { connect } from 'react-redux';

interface IForgotPasswordProps {
}

const FP: React.FunctionComponent<IForgotPasswordProps> = (props) => {
  return (
    <ContainerWrapper>
      <p>Email : <Input /></p>

      <Button > Envoyer La Recuperation </Button>
      <p><Button ><Link to="/connexion">vous avez un compte</Link></Button></p>
      <p><Button ><Link to="/Enregistrement"> Enregistrer-vous </Link> </Button></p>
    </ContainerWrapper>
  );
};

export const ForgotPassword = connect()(FP);

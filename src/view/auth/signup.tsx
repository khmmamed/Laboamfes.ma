import * as React from 'react';
import { connect } from 'react-redux';
import { ContainerWrapper } from '../../components/react-wrapper/src'
import { Input } from '../../containers/Input';
import {Button} from '../../containers/Button';
import { Link } from 'react-router-dom';
import Auth from '../../components/authentification-redux-lib/src';
import { Dispatch } from 'redux';


interface ISignupProps {
  dispatch : Dispatch
}

const SignupComponent: React.FunctionComponent<ISignupProps> = ({dispatch} : any) => {

  const signUp = new Auth(dispatch, 'users');

  return(
      <ContainerWrapper>
          <p>Email : <Input onChange={e=> signUp.setEmail(e.target.value)}/></p>
          <p>MOT DE PASSE : <Input type="password" onChange={e => signUp.setPassword(e.target.value)} /></p>
          <p>CONFIRMER MOT DE PASSE : <Input type="password" onChange={e => signUp.setConfirmPassword(e.target.value)} /></p>

          <Button onClick={ e => signUp.applyForRegistration() }> Enregistrer-vous </Button>
          <p><Button ><Link to="/connexion">vous avez un compte</Link></Button></p>
          <p><Button ><Link to="/Recupere-mot-de-passe"> Recuper Mot de Passe </Link> </Button></p>
      </ContainerWrapper>
  );
};

export const Signup = connect()(SignupComponent);

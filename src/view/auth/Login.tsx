import * as React from 'react';
import { Input } from '../../containers/Input';
import { Button } from '../../containers/Button';
import Auth from '../../components/authentification-redux-lib/src';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { LabFesState } from '../../store/index';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';


interface ILoginProps extends Login{
  dispatch : Dispatch
}

const LoginComponent: React.FunctionComponent<ILoginProps> = ({dispatch, isAuth, token, email}) => {

  const login = new Auth(dispatch, 'users');

  if(!token && !isAuth)
    return(
        <div style={{marginTop : '250px', padding : "0 25px"}}>
          <p><Input placeholder="Email" onChange={e=> login.setEmail(e.target.value)}/></p>
          <p><Input type="password" placeholder="Password" onChange={e=> login.setPassword(e.target.value)}/></p>
          <Button onClick={e=> login.goIn()}>Entrer </Button>
          <p><Button ><Link to="/Enregistrement">S'Enregistrer</Link></Button></p>
          <p><Button ><Link to="/Recupere-mot-de-passe"> Recuper Mot de Passe </Link> </Button></p>
        </div>
    ) ;
  else if(token && !isAuth){
    login.fetchUserdata(token)
      return(
        <div style={{marginTop : '250px'}}>

            <h5> Loading.... </h5>
            
        </div> 
      )
    }
  return(
    <Redirect to="/admin/:user/dashboard" />
  )
};

const mapStateToProps = ({auth} : LabFesState) =>({
  isAuth : auth.login.isAuth,
  token  : auth.login.token,
  email  : auth.login.email
})

export const Login = connect(mapStateToProps)(LoginComponent);

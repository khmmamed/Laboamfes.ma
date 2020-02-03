import * as React from 'react';
import { Input } from '../../../containers/Input';
import { ContainerWrapper } from '../../../components/react-wrapper/src/ContainerWrapper';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface IAddRequestProps {
  dispatch : Dispatch
}

const AddRequest: React.FunctionComponent<IAddRequestProps> = ({
  dispatch
}) => {
  return(
    <ContainerWrapper>
      <h4>Patient Information</h4>
        <p>Civilite : 
        <select>
          <option>Mr</option>
          <option>Mlle</option>
          <option>Enf</option>
          <option>NNe</option>
        </select></p>
        nom : <Input />
        prenom : <Input />
        Date de naissance : <Input />
        Prix : <Input placeholder={`100 dhs`} disabled/>

      <h4>Methode de Reglement</h4>
        <p>Bilan :</p>
        Entrer Les analyses : <Input onChange={e=>dispatch({type : "try_to_fetch_tests"})}/>
    </ContainerWrapper>
  )
};

export default connect()(AddRequest);
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CatalogClass } from '../controller/catalog';
import { LabFesState } from '../../../../../store';
import Table from '../../../../../components/react-tables/src'
import styled from 'styled-components';
import { TableStyled, TableRow, TableHeaderCell, TableBodyCell } from '../../../../../components/react-tables/src/index';

const ModalConfirmCatalogUpdating = styled.div`
  position: fixed; /* Stay in place */
  z-index: 99; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`
const ModalClose = styled.span`
  position: absolute;
  top: 0;
  color: #aaaaaa;
  font-size: 35px;
  font-weight: bold;
  right: 0;
`
const ModalHeader = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
`

interface ICatalogProps extends CatalogState {
    dispatch : Dispatch    
}

export const LabCatalog: React.FC<ICatalogProps> = ({
  dispatch, catalogList, catalogListFetching, catalogUpdateConfirmMsg, updatedCatalog
}) => {

    const catalog = new CatalogClass(dispatch);

    if(catalogUpdateConfirmMsg && updatedCatalog && updatedCatalog.length > 0){

      return <ModalConfirmCatalogUpdating>
        <ModalContent>
          <ModalHeader>
            <h3>Liste des analyses Modifiees : </h3>
            <ModalClose onClick={e=>catalog.ModulConfirmationClose()}>&times;</ModalClose></ModalHeader>
          <TableStyled>
            <thead>
              <TableRow>
                <TableHeaderCell>analyse</TableHeaderCell>
                <TableHeaderCell>traitance</TableHeaderCell>
                <TableHeaderCell>Envoi</TableHeaderCell>
                <TableHeaderCell>Delai</TableHeaderCell>
                <TableHeaderCell>Supprimer</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
            {updatedCatalog.map(updatedTest =>
              <TableRow>
                <TableBodyCell>{updatedTest.testName}</TableBodyCell>
                <TableBodyCell>{updatedTest.testPrice}</TableBodyCell>
                <TableBodyCell>{updatedTest.testReferred}</TableBodyCell>
                <TableBodyCell>{updatedTest.testReported}</TableBodyCell>
                <TableBodyCell>&times;</TableBodyCell>
              </TableRow>
            )}
            </tbody>
          </TableStyled>
        </ModalContent>
      </ModalConfirmCatalogUpdating>
    }

   return<>
    <h2 >
      Catalogue de Laboratoire Fes
    </h2>

    <SaveButton onClick={e=>catalog.debug()}> 
      Enrgistrer 
      <span></span>
    </SaveButton>
    <CancelButton > Annuler </CancelButton>

    {!catalogListFetching && catalogList.length <1 ? 
      catalog.fetchExistingCatalog() && <div>Loading...</div>
     :

    <Table 

            Header = {[
                {title : 'Nom de Test', width : "50%"},
                {title : 'Bcode', width : "10%"},                
                {title : 'Tarif', width : "10%"},
                {title : 'Traitance', width : "10%"},
                {title : 'Envoi', width : "10%"},
                {title : 'Delai', width : "10%"}
            ]}

            filterDataList = {e=>catalog.filterCatalogList(e.target.value)}

            getInputValue = {e=>catalog.catalogListFill(e.target)}

            handleReferredValue = {e=>catalog.catalogListFill(e.target)}

            onBlurTest = {catalog.TestOnBlure}

            Data = {catalogList}
         
    />
    }
  </>

};

const SaveButton = styled.button`
  margin : 5px;
  padding : 5px;
`
const CancelButton = styled.button`
  margin : 5px;
  padding : 5px;
`

const mapStateToprops = ({catalog} : LabFesState) =>({
  catalogList : catalog.catalogList,
  catalogListFetching : catalog.catalogListFetching,
  catalogUpdateConfirmMsg : catalog.catalogUpdateConfirmMsg,
  updatedCatalog : catalog.updatedCatalog
})


export default connect(mapStateToprops)(LabCatalog);
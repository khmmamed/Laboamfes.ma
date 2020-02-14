import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CatalogClass } from '../controller/catalog';
import { LabFesState } from '../../../../../store';
import Table from '../../../../../components/react-tables/src'
import styled from 'styled-components';


interface ICatalogProps extends CatalogState {
    dispatch : Dispatch    
}

export const LabCatalog: React.FC<ICatalogProps> = ({dispatch, catalogList, catalogListFetching}) => {

    const catalog = new CatalogClass(dispatch);

   return<>
    <h2 onClick={e=> catalog.fetchExistingCatalog()}>Catalogue de Laboratoire Fes</h2>

    <SaveButton > Enrgistrer </SaveButton>
    <SaveButton > Annuler </SaveButton>

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

            getInputValue = {e=>catalog.setCatalogListPrice(e.target.value)}

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
  catalogListFetching : catalog.catalogListFetching
})


export default connect(mapStateToprops)(LabCatalog);
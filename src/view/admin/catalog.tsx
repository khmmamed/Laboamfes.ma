import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CatalogClass } from './labCatalog/src/controller/catalog';
import { LabFesState } from '../../store';
import Table from '../../components/react-tables/src'


interface ICatalogProps extends CatalogState {
    dispatch : Dispatch    
}

export const LabCatalog: React.FC<ICatalogProps> = ({dispatch, catalogList, catalogListFetching}) => {

    const catalog = new CatalogClass(dispatch);

   return<>
    <h2>this is a catalog</h2>

    <button>Enregistrer </button>
    <button>Annuler Modifcation</button>

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

            onChange = {e=>catalog.filterCatalogList(e.target.value)}

            Data = {catalogList}
         
    />
    }
  </>

};


const mapStateToprops = ({catalog} : LabFesState) =>({
  catalogList : catalog.catalogList,
  catalogListFetching : catalog.catalogListFetching
})


export default connect(mapStateToprops)(LabCatalog);
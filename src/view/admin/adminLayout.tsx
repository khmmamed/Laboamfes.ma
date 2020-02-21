import * as React from 'react';
import Header from '../website/Header';
import Catalog from './labCatalog/src/admin/catalog';
import styled, { css } from '../../theme';


interface IAdminLayoutProps {
}

export const AdminLayout: React.FunctionComponent<IAdminLayoutProps> = (props) => {
  return(
      <div style={{display : 'flex'}}>
        
        <section>
          <Header />
        </section>

        <div style={{display : 'flex', alignContent : 'space-between', marginTop: '250px', width: "100%"}}>
            <AdminSidebar>
              <ul>
                <li>Compte</li>
                <li>Personelles</li>
                <li>Catalogue</li>
                <li>Demandes</li>
                <li>Rapport</li>
                <li>Referer</li>
              </ul>
            </AdminSidebar>
            <AdminContainer >

              <Catalog />
              
            </AdminContainer>
        </div>
      </div>
  ) ;
};
const mobile = (args : any) => css`
  @media (max-width: 920px) {
    ${css(args)};
  }
`
const AdminSidebar = styled.section`

  flex : 0 0 20%;

  ${mobile`
      display : none;
  `}

`

const AdminContainer = styled.section`

  flex : 0 0 74% ; 
  padding : 0 20px 0 0;

  ${mobile`
    flex : 0 0 100%;
  `}

`


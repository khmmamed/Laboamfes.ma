import * as React from 'react';
import Header from '../website/Header';
import Catalog from './catalog';


interface IAdminLayoutProps {
}

export const AdminLayout: React.FunctionComponent<IAdminLayoutProps> = (props) => {
  return(
      <div style={{display : 'flex'}}>
        
        <section>
          <Header />
        </section>

        <div style={{display : 'flex', alignContent : 'space-between', marginTop: '250px', width: "100%"}}>
            <section style={{flex : '0 0 20%'}}>
              <ul>
                <li>Compte</li>
                <li>Personelles</li>
                <li>Catalogue</li>
                <li>Demandes</li>
                <li>Rapport</li>
                <li>Referer</li>
              </ul>
            </section>
            <section style={{ flex : " 0 0 74%", padding : '0 20px 0 0' }}>

              <Catalog />
              
            </section>
        </div>
      </div>
  ) ;
};
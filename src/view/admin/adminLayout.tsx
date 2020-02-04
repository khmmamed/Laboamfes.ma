import * as React from 'react';
import Header from '../website/Header';

interface IAdminLayoutProps {
}

export const AdminLayout: React.FunctionComponent<IAdminLayoutProps> = (props) => {
  return(
      <div style={{display : 'flex'}}>
        <section><Header /></section>
        <div style={{display : 'flex', alignContent : 'space-between', marginTop: '250px', width: "100%"}}>
            <section style={{flex : '0 0 250px'}}>
              <ul>
                <li>Compte</li>
                <li>Personelles</li>
                <li>Catalogue</li>
                <li>Demandes</li>
                <li>Rapport</li>
              </ul>
            </section>
            <section >
              editable dataTable
            </section>
        </div>
      </div>
  ) ;
};
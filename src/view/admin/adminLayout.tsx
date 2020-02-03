import * as React from 'react';

interface IAdminLayoutProps {
}

const AdminLayout: React.FunctionComponent<IAdminLayoutProps> = (props) => {
  return(
      <div style={{display : 'flex'}}>
        <section id="">Header</section>
        <div style={{display : 'flex'}}>
            <section id="">sidebar ...</section>
            <section id="">content ...</section>
        </div>
      </div>
  ) ;
};

export default AdminLayout;

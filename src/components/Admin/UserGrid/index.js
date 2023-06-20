import React, { useContext, useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import axios from 'axios';

// CSS
import "../admin.css"
import { Link } from 'react-router-dom';


function UserGrid() {

  const [data, setData] = useState([]);

  useEffect(() => { 
    axios.get('http://localhost:8800/api/users/find')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, [])

  const styleBtn = {color: "#FFCD02", background: "#C00A27"};

  const btnUpdate = (params) => {
    // const onClick = (e) => {
    //   e.stopPropagation(); // don't select this row after clicking

    //   const api = params.api;
    //   const thisRow = {};

    //   api
    //     .getAllColumns()
    //     .filter((c) => c.field !== "__check__" && !!c)
    //     .forEach(
    //       (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
    //     );

    //   return alert(JSON.stringify(thisRow, null, 4));
    // };
    return <Button style={styleBtn}>Update</Button>;
  };

  const btnDelete = () => {
    return <Button style={styleBtn}>Delete</Button>;
  };
  
  const columns = [ 
      { field: "id", headerName: 'id', width: 150, headerClassName: "header-datagrid" },
      { field: 'username', headerName: 'username', width: 150, headerClassName: "header-datagrid" },
      { field: 'email', headerName: 'email', width: 150, headerClassName: "header-datagrid" },
      { field: 'admin', headerName: 'admin', width: 150, headerClassName: "header-datagrid" },
      { field: 'update', headerName: 'update', width: 150, headerClassName: "header-datagrid", renderCell: btnUpdate},
      { field: 'delete', headerName: 'delete', width: 150, headerClassName: "header-datagrid", renderCell: btnDelete },
  ];

  return (
    <section>
      <Link to="/admin/adduser" className="btn-back">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Ajouter Un Utilisateur
      </Link>

      <div style={{ height: "100%", width: '100%', display: "flex", marginTop: "2vw", background: "white" }}>
        <DataGrid 
          style={{alignItems: "center", borderTop: "none", borderBottom: "none"}} 
          rows={data} 
          columns={columns}
          loading={data.length === 0}
          disableRowSelectionOnClick
          disableCellSelectionOnClick
          getRowId={(row) => row.id} // Assign unique key to each row
          pageSizeOptions={[5, 10, 25]}
        />
      </div>
    </section>
  )
}

export default UserGrid
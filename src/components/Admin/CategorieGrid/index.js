import React, { Fragment, useContext, useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

// CSS
import "../admin.css"



function CategorieGrid() {

  const [data, setData] = useState([]);

  useEffect(() => { 
    axios.get('http://localhost:8800/api/categories/find')
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
      { field: 'base', headerName: 'base', width: 150, headerClassName: "header-datagrid" },
      { field: 'update', headerName: 'update', width: 150, headerClassName: "header-datagrid", renderCell: btnUpdate},
      { field: 'delete', headerName: 'delete', width: 150, headerClassName: "header-datagrid", renderCell: btnDelete },
  ];

  return (
    <>
      <Link to="/admin/addcategorie" className="btn-back" style={{marginLeft: "31.6vw"}}>
        
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Ajouter Une Categorie
      </Link>

      <div style={{ height: 300, width: '100%', display: "flex", marginTop: "2vw" }}>

        <DataGrid 
          style={{alignItems: "center", borderTop: "none", borderBottom: "none"}} 
          rows={data} 
          columns={columns}
          loading={data.length === 0}
          disableRowSelectionOnClick
          disableCellSelectionOnClick
          initialState={{
            ...data.initialState,
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25]}
        />
      </div>
    </>
  )
}

export default CategorieGrid
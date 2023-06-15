import React, { useContext, useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

// CSS
import "../admin.css"

function PizzaGrid() {

  const [data, setData] = useState([]);

  useEffect(() => { 
    axios.get('http://localhost:8800/api/pizzas/find')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, [])

  const styleBtn = {color: "#FFCD02", background: "#C00A27"};

  const btnUpdate = (params) => {
    const onClick = (e) => {
      e.stopPropagation(); // don't select this row after clicking

      const api = params.api;
      const thisRow = {};

      api
        .getAllColumns()
        .filter((p) => p.field !== "__check__" && !!p)
        .forEach(
          (p) => (thisRow[p.field] = params.getValue(params.id, p.field))
        );

      return alert(JSON.stringify(thisRow, null, 4));
    };
    return <Link to={`/admin/updatepizza/${params.id}`}><Button style={styleBtn}>Update</Button></Link>;
  };

  const btnDelete = () => {
    return <Button style={styleBtn}>Delete</Button>;
  };
  
  const columns = [ 
      { field: "id_pizza", headerName: 'id', width: 150, headerClassName: "header-datagrid" },
      { field: 'nom', headerName: 'nom', width: 150, headerClassName: "header-datagrid" },
      { field: 'description', headerName: 'description', width: 150, headerClassName: "header-datagrid" },
      { field: 'prix', headerName: 'prix', width: 150, headerClassName: "header-datagrid" },
      { field: 'image', headerName: 'image', width: 150, headerClassName: "header-datagrid" },
      { field: 'categorie_base', headerName: 'categorie_base', width: 150, headerClassName: "header-datagrid" },
      { field: 'update', headerName: 'update', width: 150, headerClassName: "header-datagrid", renderCell: btnUpdate},
      { field: 'delete', headerName: 'delete', width: 150, headerClassName: "header-datagrid", renderCell: btnDelete },
  ];

  return (
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
          pagination: { paginationModel: { pageSize: 25 } },
        }}
        pageSizeOptions={[5, 10, 25]}
      />
    </div>
  )
}

export default PizzaGrid
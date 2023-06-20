import React, { Fragment, useContext, useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// CSS
import "../admin.css"

function CategorieGrid() {
  
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { 
    axios.get('http://localhost:8800/api/categories/find')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, [navigate])

  const styleBtn = {color: "#FFCD02", background: "#C00A27"};

  const btnUpdate = (params) => {
    const onClick = (id) => {
      navigate('/admin/updatecategorie/' + id);
    };

    return <Button style={styleBtn} onClick={() => onClick(params.row.id)}>Update</Button>;
  };

  const btnDelete = (params) => {
    const handleDelete = (id) => {
      axios.delete('http://localhost:8800/api/categories/delete/'+ id)
      .then(res => console.log("success"))
      .catch(err => console.log(err));
    }

    return <Button style={styleBtn} onClick={(e) => handleDelete(params.row.id)}>Delete</Button>;
  };
  
  const columns = [ 
    { field: "id", headerName: 'id', width: 150, headerClassName: "header-datagrid" },
    { field: 'base', headerName: 'base', width: 150, headerClassName: "header-datagrid" },
    { field: 'update', headerName: 'update', width: 150, headerClassName: "header-datagrid", renderCell: btnUpdate },
    { field: 'delete', headerName: 'delete', width: 150, headerClassName: "header-datagrid", renderCell: btnDelete },
  ];

  return (
    <section>
      <Link to="/admin/addcategorie" className="btn-back">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Ajouter Une Categorie
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

export default CategorieGrid;

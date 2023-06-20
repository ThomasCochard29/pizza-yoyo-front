import React, { useContext, useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// CSS
import "../admin.css"
import { ToastContainer, toast } from 'react-toastify';

function PizzaGrid() {

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { 
    axios.get('http://localhost:8800/api/pizzas/find')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, [navigate])

  console.log(data);
  
  const styleBtn = {color: "#FFCD02", background: "#C00A27"};

  const btnUpdate = (params) => {
    const onClick = (id_pizza) => {
      navigate('/admin/updatepizza/' + id_pizza);
    };
    return <Button style={styleBtn} onClick={() => onClick(params.row.id_pizza)}>Update</Button>;;
  };

  const btnDelete = (params) => {
    const handleDelete = (id_pizza) => {
      axios.delete('http://localhost:8800/api/pizzas/delete/'+ id_pizza)
      .then(res => console.log("success"+ id_pizza))
      .catch(err => console.log(err));
      toast.success("Success")
      window.location.reload()
    }

    return <Button style={styleBtn} onClick={(e) => handleDelete(params.row.id_pizza)}>Delete</Button>;
  };
  
  const columns = [ 
      { field: 'id_pizza', headerName: 'id_pizza', width: 150, headerClassName: "header-datagrid" },
      { field: 'nom', headerName: 'nom', width: 150, headerClassName: "header-datagrid" },
      { field: 'description', headerName: 'description', width: 150, headerClassName: "header-datagrid" },
      { field: 'prix', headerName: 'prix', width: 150, headerClassName: "header-datagrid" },
      { field: 'image', headerName: 'image', width: 150, headerClassName: "header-datagrid", renderCell: (params) => ( <img src={`${process.env.REACT_APP_API_URL}${params.value}`} width={100}/>) },
      { field: 'categorie_base', headerName: 'categorie_base', width: 150, headerClassName: "header-datagrid" },
      { field: 'update', headerName: 'update', width: 150, headerClassName: "header-datagrid", renderCell: btnUpdate},
      { field: 'delete', headerName: 'delete', width: 150, headerClassName: "header-datagrid", renderCell: btnDelete },
  ];

  return (
      <section>
        <Link to="/admin/addpizza" className="btn-back">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Ajouter Une Pizza
        </Link>

      <div style={{ height: "100%", width: '100%', display: "flex", marginTop: "2vw", background: "white" }}>
        <DataGrid 
          style={{alignItems: "center", borderTop: "none", borderBottom: "none"}} 
          rows={data} 
          columns={columns}
          loading={data.length === 0}
          disableRowSelectionOnClick
          disableCellSelectionOnClick
          getRowId={(row) => row.id_pizza} // Assign unique key to each row
          initialState={{
            ...data.initialState,
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          pageSizeOptions={[5, 10, 25]}
        />
      </div>
      <ToastContainer/>
    </section>
  )
}

export default PizzaGrid
import MaterialTable from "@material-table/core";
import { Paper, TableContainer } from "@mui/material";
import React , {useState,useEffect} from "react";
import { Axios } from "../../axiosInstance";


export const AdminDashboard = () => {
    const [clientDetails , setClientDetails] = useState([])
    useEffect(() => {
        const getData = async  () => {
            const {data} = await Axios.get('/admin/getBookedClass')
            console.log(data)
            setClientDetails(data)
        }
        getData()

    },[])
    console.log(clientDetails)
    const columns = [
        {title:"Email",field:"email"},
        {title:"Course",field:"courseName"},
        {title:"Class",field:"className"},
        {title:"Date",field:"date"},
    ]
  return(
    <>
         <TableContainer
        component={Paper}
        sx={{
          maxHeight: "500px",
        //   width: "1000px",
          marginTop: "30px",
        //   marginLeft: "260px",
        }}
      >
        <MaterialTable  title="Booked Class " columns={columns}  data={clientDetails} 
        options={{
            exportMenu: true,
            exportAllData: true,
            exportButton: true,
            toolbar: true,
            search: false
        }}
        />
        </TableContainer>
    </>
  )
};

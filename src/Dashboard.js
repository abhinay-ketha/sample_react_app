import React, {useState,useEffect} from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


 
function Dashboard(props) {

    const [employee,setEmployee] =  useState(null)
    const [users,setUsers] =  useState(null)
    const columns = [
        { field: 'name', header: 'Name'},
        { field: 'email', header: 'Email'},
        { field: 'role', header: 'Role'}
    ]

    const location = useLocation();

    useEffect(() => {
        if(location.state.details.role === 'EMPLOYEE'){
            setEmployee(location.state.details)
        } else fetchAllUsers()

    }, [location]);
 

    const rowClass = (data) => {
        return {
            'highlight1': (data.id % 2) === 0,
        }
    }

    const fetchAllUsers = () => {
        axios.get('http://localhost:4000/user/fetchAll').then(response => {
            console.log(response)
            setUsers(response.data)
        }).catch(error => {
            console.error(error)
        });
    }
 
    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} field={col.field} header={col.header} style={{width:'25%'}}/>;
    });

     
    return (
        <div >
            {employee && <div className='login_styles'>
                <h2>Profile</h2>
                <ol>Name:  {employee.name}</ol>
                <ol>Email:  {employee.email}</ol>
                <ol>Role:  {employee.role}</ol>
                </div>}

            {users && 
            <div className='admin_datatable'> <h2 style={{textAlign: 'left'}}>User Details</h2>
                <DataTable 
                rowClassName={rowClass}
                value={users}>
                    {dynamicColumns}
                </DataTable>
             </div>
            }
        
        </div>
    );
    }
 
export default Dashboard;
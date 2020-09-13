import React from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';
import './table.css';

const Table = ( {data, handleSort, sortType, sortRow, showColumnData} ) => {

    return (
        <BootstrapTable striped bordered hover variant="dark" size="sm">
            <thead>
                <tr>
                    <th
                        className={sortRow === 'id' ? `sorting_${sortType}` : ''} 
                        onClick={()=>{handleSort('id')}}> Id
                    </th>
                    <th 
                        className={sortRow === 'firstName' ? `sorting_${sortType}` : ''}
                        onClick={()=>{handleSort('firstName')}}>First Name
                    </th>
                    <th 
                        className={sortRow === 'lastName' ? `sorting_${sortType}` : ''} 
                        onClick={()=>{handleSort('lastName')}}>Last Name
                    </th>
                    <th 
                        className={sortRow === 'email' ? `sorting_${sortType}` : ''} 
                        onClick={()=>{handleSort('email')}}>Email
                    </th>
                    <th 
                        className={sortRow === 'phone' ? `sorting_${sortType}` : ''}  
                        onClick={()=>{handleSort('phone')}}>Phone
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map(i => (
                    <tr key={i.id + Math.random()} onClick={()=>{showColumnData(i)}}>
                        <td>{i.id}</td>
                        <td>{i.firstName}</td>
                        <td>{i.lastName}</td>
                        <td>{i.email}</td>
                        <td>{i.phone}</td>
                    </tr>
                ))}
            </tbody>
        </BootstrapTable>
    );
}
export default Table;
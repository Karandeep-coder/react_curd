import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table,Button } from "react-bootstrap";

function List() {

    const [list, setList] = useState([]);

    const fetchData=()=>{
        axios.get('http://localhost:8080/student/').then(
            (respone) => {
                console.log(respone.data);
                setList(respone.data);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    const deleteById=(id)=>{
        axios.delete('http://localhost:8080/student/'+id).then(
            (respone) => {
                console.log(respone);
                removeById(id)
            },
            (error) => {
                console.log(error);
            }
        )
    }

    const removeById=(id)=>{
        setList(list.filter((e)=>e.id !== id));
    }

    useEffect(() => {
        fetchData();
    },[]);

    return (
        <Container className="list-container">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>

                        <th>First Name</th>
                        <th>Roll No.</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item) => {
                            return(
                                <tr key={item.id}>
                                <td>{item.studentName}</td>
                                <td>{item.rollNo}</td>
                                <td> <Button variant="danger"
                                    onClick={()=>{
                                        deleteById(item.id);
                                    }}
                                >Delete</Button>{' '}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}

export default List;
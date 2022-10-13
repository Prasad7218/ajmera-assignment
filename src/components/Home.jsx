import Axios from 'axios'
import { useEffect, useState } from 'react';
import './Home.css'
const Home=()=>{
    const[data,setData]=useState([]);

    useEffect(()=>{
        Axios.get("https://reqres.in/api/users?page=2").then((res)=>{
            console.log(res.data.data);
            setData(res.data.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return(
        <>
                    <table className="box">
                        <tr>
                            <th>Roll no.</th>
                            <th>Photo</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>E-mail</th>
                        </tr>
                        {
            data.map(ele=>{
                return(
                    <>
                        <tr>
                            <td>{ele.id}</td>
                            <td><img className="img" src={ele.avatar}/></td>
                           
                            <td>{ele.first_name}</td>
                            <td>{ele.last_name}</td>
                            <td>{ele.email}</td>
                        </tr>
                    </>
                )
            })
        }
        </table>
        </>
    )
}

export default Home;
import Axios from 'axios'
import { useEffect, useState } from 'react';
import './Home.css'
const Home=()=>{
    const[data,setData]=useState([]);
    const[fname,setFname]=useState('');
    const[lname,setLname]=useState('');
    const[email,setEmail]=useState('');

    const handleChange=(e)=>{
        setFname(e.target.value);
    }
    const handleChange1=(e)=>{
        setLname(e.target.value);
    }
    const handleChange2=(e)=>{
        setEmail(e.target.value);
    }

    const postData=(e)=>{
        e.preventDefault();
        Axios.post("https://reqres.in/api/users?page=2",{
          first_name:fname,
          last_name:lname,
          email:email
        }).then((res)=>{
          console.log(res.data);
        }).catch((err)=>{
          console.log(err);
        })
      }



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
        <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add User</button>
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




<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <label>First Name</label>
        <input onChange={handleChange} value={fname} type="text"/><br/><br/>
        <label>Last Name</label>
        <input  onChange={handleChange1} value={lname} type="text"/><br/><br/>
        <label>E-Mail</label>
        <input  onChange={handleChange2} value={email} type="email"/><br/><br/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" onClick={postData} className="btn btn-primary">Add to the list</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Home;
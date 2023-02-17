import React, { useEffect, useState } from 'react'
import './App.css'
import Pagination from './components/Pagination';
import Users from './Users';
import {AiOutlineDoubleLeft,AiOutlineDoubleRight,AiOutlineRight,AiOutlineLeft} from 'react-icons/ai';

function Admin() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    // Select all the checkboxes by 'select all' checkbox --

    const handleChange=(e)=>{
        const startIndex= page*10-10;
        const endIndex= page*10;
        const updatedbox= users.map((user,index)=>{
            if(index>=startIndex && index<endIndex){
                return {...user,checked:e.target.checked};
            }
            return user ; 
        });
        setUsers(updatedbox);
    }


    // getting data by dynamically pages 

    useEffect(() => {
        setLoading(true);
        fetch(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`)
        .then((res)=>res.json())
        .then((res)=> {
            setUsers(res);
            setLoading(false)
        });
    }, [page])

    // delete single user---

    const handleDelete=(id)=>{
        console.log(id);
     let updated=users.filter((user)=> user.id!==id);
     setUsers(updated);
    }

    // search by any field - email,name,role.

    const handleSearch=(e)=>{
       let text= e.target.value;
            let updated= users.filter((el)=> el.name.includes(text) ||
            el.email.includes(text) || el.role.includes(text))
            setUsers(updated)
    }

    // select multiple checkboxes---

    const handleCheckbox= (e,el)=>{
        const updatedel = users.map(u => u.id === el ? { ...u, checked: e.target.checked } : u);
        setUsers(updatedel)
    }

    // delete multiple users --
    
    const handleDeleteSelected=()=>{
        const updateU = users.filter(u => !u.checked);
        setUsers(updateU)
    }

  return (
    <div>
        <div className='search-div'>
            <input type="text" className='search-input'
            placeholder='Search by name email or role'
            onChange={handleSearch}
            />
        </div>
        <div>
            <table>
                <tr>
                    <th>
                        <input type="checkbox" 
                        onChange={handleChange}
                        />
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
                {loading && <h3>Loading...</h3>}
                {users? users.slice(page*10-10,page*10).map((user)=> 
                <Users key={user.id} id={user.id} name={user.name} email={user.email} role={user.role} handleDelete={handleDelete} users={users} setUsers={setUsers} handleCheckbox={handleCheckbox} checked={user.checked}/>): 
                    <h3>NO users</h3>
                }
            </table>
        </div>
        <div className='btn-div'>
            <button className='multi-del-btn' onClick={handleDeleteSelected}>Delete selected</button>
            <button className={page==1? "disable-page-btn":"active-page-btn"} disabled={page==1} onClick={()=>setPage(1)}><AiOutlineDoubleLeft/></button>
            <button className={page==1? "disable-page-btn":"active-page-btn"} disabled={page==1 } onClick={()=>setPage(page-1)}><AiOutlineLeft/></button>
            <Pagination current={page} total={Math.ceil(users.length/10)} onChange={setPage}/>
            <button className={page==Math.ceil(users.length/10)? "disable-page-btn":"active-page-btn"} disabled={page==Math.ceil(users.length/10)} onClick={()=>setPage(page+1)}><AiOutlineRight/></button>
            <button className={page==Math.ceil(users.length/10)? "disable-page-btn":"active-page-btn"} disabled={page==Math.ceil(users.length/10)} onClick={()=>setPage(Math.ceil(users.length/10))}><AiOutlineDoubleRight/></button>
            
        <div></div>
        </div>
    </div>
  )
}

export default Admin
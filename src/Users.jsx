import React, { useState } from 'react';
import {FiEdit} from 'react-icons/fi';
import {AiOutlineDelete} from 'react-icons/ai';
import {RxCross2} from 'react-icons/rx';
import {MdDone} from 'react-icons/md';

function Users({id,name,email,role,handleDelete,users,setUsers,handleCheckbox,checked}) {
    //console.log(id,name,email,role);
    const [editable, setEditable] = useState(false);
    const [username, setUserName] = useState(users.filter((user)=> user.id==id)[0].name);
    const [useremail, setUserEmail] = useState(users.filter((user)=> user.id==id)[0].email);
    const [userrole, setUserRole] = useState(users.filter((user)=> user.id==id)[0].role);


    const handleEdit=()=>{
      setEditable(!editable)
    }

    const handleUpdate=(userid)=>{
        
        if(username==""|| useremail==""|| userrole==""){
          alert(`Empty fields can't be saved`)
        }else{
           let updatedUser= users.map((el)=> el.id==userid? {...el,userid,name: username,email:useremail,role:userrole}:el);
           setUsers(updatedUser);
           setEditable(false);
        }
        
        // console.log(username,useremail,userrole);
        
    }
  return (
    <tr key={id} style={{backgroundColor: checked? "#e6e6e6":"white"}}>
        <td>
            <input type="checkbox" checked={checked} onChange={(e)=>handleCheckbox(e,id)}/>
        </td>
        <td>
          {editable? <input defaultValue={name} onChange={(e)=>setUserName(e.target.value)}/> :<h5>{name}</h5>}
        </td>
        <td>
        {editable? <input defaultValue={email} onChange={(e)=> setUserEmail(e.target.value)}/>:<h5>{email}</h5>}
        </td>
        <td>
        {editable?<input defaultValue={role} onChange={(e)=>setUserRole(e.target.value)}/>:<h5>{role}</h5>}
        </td>
        <td>
            {editable? <div>
              <button onClick={()=>handleUpdate(id)} className='save-btn'><MdDone color='white'/></button>
              <button onClick={()=>setEditable(false)} className='cancel-btn'><RxCross2 color='white'/></button>
              </div>:<button onClick={handleEdit}><FiEdit/></button>}
            <button onClick={()=>handleDelete(id)}><AiOutlineDelete color='red'/></button>
            
        </td>
    </tr>
  )
}

export default Users
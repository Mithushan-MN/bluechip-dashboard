import React,{useState,useEffect} from 'react'
import {useHistory, useParams,useNavigate} from "react-router-dom"
import './AddEdit.css'
import { database } from '../../FirebaseConfig'
import {toast} from "react-toastify"
import Sidebar from '../Sidebar'
import Header from './Header'



const initialState = {
    name: "",
    email:"",
    contact: "",
};


const AddEdit = () => {
    const [state,setState] = useState(initialState);
    const [data,setData] = useState({});

    const {name,email,contact} = state;

    const navigate = useNavigate();

    const handleInputChange = (e) =>{
        const {name,value} =e.target;
        setState({...state,[name]:value});
    }; 
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name || !email || !contact){
            toast.error("Please add value");
        } else {
            database.child("contacts").push(state,(err)=>{
                if (err){
                    toast.error(err);
                }else{
                    toast.success("Contact added Successfully")
                }
            });
            setTimeout(()=> navigate.push("/Customers"),500);
        }
    };
  


  return (
      <Sidebar>
        <Header/>
        <div style={{marginTop:"100px"}}>
            <form style={{
                margin:"auto",
                padding:"15px",
                maxWidth:"400px",
                alignContent:"center",
                }}
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Name</label>
                <input type='text' 
                id="name" name="name" 
                placeholder='your Name..' 
                value={name} 
                onChange={handleInputChange}
                />

                <label htmlFor="email">Email</label>
                <input type='text' 
                id="email" name="email" 
                placeholder='your Email..' 
                value={email} 
                onChange={handleInputChange}
                />

                <label htmlFor="contact">Contact</label>
                <input type='number' 
                id="contact" name="contact" 
                placeholder='your contact No..' 
                value={contact} 
                onChange={handleInputChange}
                />

                <input type='submit' value="Save"/>
            </form>
        </div>

         
      </Sidebar>


  )
}

export default AddEdit

import axios from 'axios'
import React, { useEffect , useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {FaPencilAlt} from "react-icons/fa"
// import './EditPet.css';

const EditPet = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [err, setErr] = useState("");
    // const [errors, setErrors] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios
          .get(`http://localhost:8001/api/pets/${id}`)
          .then((res) => {
            setName(res.data.name);
            setType(res.data.type);
            setDesc(res.data.desc);
            setSkill1(res.data.skill1);
            setSkill2(res.data.skill2);
            setSkill3(res.data.skill3);
          })
          .catch((err) =>{
            
        // console.log(err.response.data.errors.name.message);
       
          });
      }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
      .put(`http://localhost:8001/api/pets/${id}`, {
        name,
        type,
        desc,
        skill1,
        skill2,
        skill3
      })
      .then((res) => {
        navigate('/');
      })
      .catch((err) =>{
        setErr(err.response.data.message)
      });
    }
  return (
    <div>
        <div className='header'>
            <h1>Pet Shelter</h1>
            <Link  className='link' to={`/`}>back to home</Link>
        </div>
        <h3>Edit {name}</h3>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form1' >

            <label htmlFor='name'>Pet Name:</label>
            <input type='text' id='name' value={name} onChange={ e => setName(e.target.value)} />
           
            <label htmlFor='type'>Pet Type:</label>
            <input type='text' id='type' value={type} onChange={ e => setType(e.target.value)} />
           
            <label htmlFor='desc'>Pet Description:</label>
            <input type='text' id='desc' value={desc} onChange={ e => setDesc(e.target.value)} />
            { {err} !== '' ? <p className='err'>{err}</p> : ''}
            <button className='button'><FaPencilAlt className='icon'/>Edit Pet</button>

          </div>
          <div className='form2'>

            <p className='skills'>Skills (optional):</p>
            <label htmlFor='skill1'>Skill1:</label>
            <input type='text' id='skill1' value={skill1} onChange={ e => setSkill1(e.target.value)} />
            <label htmlFor='skill2'>Skill2:</label>
            <input type='text' id='skill2' value={skill2} onChange={ e => setSkill2(e.target.value)} />
            <label htmlFor='skill3'>Skill3:</label>
            <input type='text' id='skill3' value={skill3} onChange={ e => setSkill3(e.target.value)} />
          </div>
        </form>
    </div>
  )
}

export default EditPet
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './CreatePet.css';
import {FaUpload} from "react-icons/fa"

const CreatePet = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [nameErr, setNameErr] = useState("");
    const [typeErr, setTypeErr] = useState("");
    const [descErr, setDescErr] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        axios
      .post('http://localhost:8001/api/pets', {
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
      .catch((err) => {
        console.log(err.response.data.errors.name.message.split('.')[1]);
        if (err.response.data.errors.name && (err.response.data.errors.name.message == "Pet name is required" || err.response.data.errors.name.message == "The name should be at least 3 characters long!" || err.response.data.errors.name.message.split('.')[0] == "Error, expected `name` to be unique")){
          setNameErr(err.response.data.errors.name.message)
        }
        // else if (err.response.data.message && ) {
          
        // }
        else {
          setNameErr("");
        }
        if (err.response.data.errors.type && (err.response.data.errors.type.message == "Pet type is required" || err.response.data.errors.type.message == "The pet type should be at least 3 characters long!")){
          setTypeErr(err.response.data.errors.type.message)
        }
            else {
              setTypeErr("");
            }
            if (err.response.data.errors.desc && (err.response.data.errors.desc.message == "Pet description is required" || err.response.data.errors.desc.message == "The description should be at least 3 characters long!")){
              setDescErr(err.response.data.errors.desc.message)
            }
        else {
          setDescErr("")
        }
        // console.log(err.response.data.errors)
      }
      );
    }
  return (
    <div>
        <div className='header'>
            <h1>Pet Shelter</h1>
            <Link className='link' to={`/`}>back to home</Link>
        </div>
        <h3>Know a pet needing a home?</h3>
        <form  className='form' onSubmit={handleSubmit}>
          <div className='form1'>

            <label htmlFor='name'>Pet Name:</label>
            <input type='text' id='name' value={name} onChange={ e => setName(e.target.value)} />
            {{nameErr} !== '' ? <p className='err'>{nameErr}</p> : ''}
            <label htmlFor='type'>Pet Type:</label>
            <input type='text' id='type' value={type} onChange={ e => setType(e.target.value)} />
            {{typeErr} !== '' ? <p className='err'>{typeErr}</p> : ''}
            <label htmlFor='desc'>Pet Description:</label>
            <input type='text' id='desc' value={desc} onChange={ e => setDesc(e.target.value)} />
            { {descErr} !== '' ? <p className='err'>{descErr}</p> : ''}
            <button className='button'><FaUpload className='icon'/>Add Pet</button>
          </div>
          <div className='form2' >
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

export default CreatePet
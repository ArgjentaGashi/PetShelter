import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {FaHandPointRight, FaHome} from "react-icons/fa"

const Pet = () => {
    const [pet, setPet] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
    axios
        .get(`http://localhost:8001/api/pets/${id}`)
        .then((res) => {
            setPet(res.data);
        })
        .catch((err) => console.log('GET PET BY ID ERROR', err));
    }, [id]);
    const deletePet= (petId) => {
        axios
        .delete(`http://localhost:8001/api/pets/${petId}`)
        .then((res) => {
            navigate('/');
        })
        .catch((err) => console.log(err));
    };
  return (
    <div>
        <div className='header'>
            <h1>Pet Shelter</h1>
            <Link className='link' to={`/`}>back to home</Link>
        </div>
        <div className='single-details'>
            <h3>Details about: {pet.name}</h3>
            <button onClick={() => deletePet(pet._id)}> <FaHome className='icon' /> Adopt {pet.name}</button>
        </div>
        <div className='details'>
            <div className='details12'>
            <div className='details1'> 
                <h4>Pet type:</h4>
                <h4>Description:</h4>
                <h4>Skills:</h4>
            </div>
            <div className='details2' > 
                <p>{pet.type}</p>
                <p>{pet.desc}</p>
                <div>
                    <p>{pet?.skill1}</p>
                    <p>{pet?.skill2}</p>
                    <p>{pet?.skill3}</p>
                </div>
            </div>
            </div>
        <div className='likes'>
            <button> <FaHandPointRight className='icon' /> Like {pet.name}</button>
            <p>Likes</p>
        </div>
        </div>
    </div>
  )
}

export default Pet
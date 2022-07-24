import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const PetList = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios
          .get('http://localhost:8001/api/pets')
          .then((res) => {
            setPets(res.data);
          })
          .catch((err) => console.log(err));
      }, []);


  return (
    <div>
        <div className='header' >
        <h1>Pet Shelter</h1>
        <Link  className='link'  to={`/pets/new`}>add a pet to the shelter</Link>
        </div>
        <h3>These pets are looking for a good home</h3>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            {pets.map((pet) => {
                return (

                    <tbody key={pet._id}>
                <tr>
                    <td>{pet.name}</td>
                    <td>{pet.type}</td>
                    <td>
                        <Link to={`/pets/${pet._id}`}>details</Link>
                        <span> | </span>
                        <Link to={`/pets/${pet._id}/edit`} >edit</Link>
                    </td>
                </tr>
            </tbody>
                )
            })}
        </table>

    </div>
  )
}

export default PetList
import { useState, useEffect } from "react"

const Form = ({ patients, setPatients }) => {
    const[name, setName] = useState('');
    const[owner, setOwner] = useState('');
    const[email, setEmail] = useState('');
    const[date, setDate] = useState('');
    const[symptoms, setSymptoms] = useState('');

    const[error, setError] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        if([name, owner, email, date, symptoms].includes('')){
            console.log('There is at least one empty field')
            setError(true)
            return;
        }

        setError(false)

        const objectPatient = {
            name,
            owner,
            email,
            date,
            symptoms
        }

        setPatients([...patients, objectPatient]);

        setName('')
        setOwner('')
        setEmail('')
        setDate('')
        setSymptoms('')
    }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5" >
      <h2 className="font-black text-3xl text-center">Patient follow-up</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add patients and {""}
        <span className="text-indigo-600 font-bold">Manage them</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

        { error && 
            <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded">
                <p>All fields are required</p>
            </div>
        }
        <div className="mb-5">

            <label htmlFor="pet" className="block text-gray-700 uppercase font-bold ">
                Name pet
            </label>

            <input
                id="pet"
                type="text"
                placeholder="Name of pet"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={name}
                onChange={ (e) => setName(e.target.value)}
            />
        </div>
        
        <div className="mb-5">
            <label htmlFor="owner" className="block text-gray-700 uppercase font-bold ">
                Name owner
            </label>

            <input
                id="owner"
                type="text"
                placeholder="Name of owner"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={owner}
                onChange={ (e) => setOwner(e.target.value)}
            />
        </div>

        <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold ">
                Email
            </label>

            <input
                id="email"
                type="email"
                placeholder="Email contact"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
            />
        </div>

        <div className="mb-5">
            <label htmlFor="high" className="block text-gray-700 uppercase font-bold ">
                High
            </label>

            <input
                id="high"
                type="date"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={date}
                onChange={ (e) => setDate(e.target.value)}
            />
        </div>

        <div className="mb-5">
            <label htmlFor="Symptoms" className="block text-gray-700 uppercase font-bold ">
                Symptoms
            </label>
            <textarea
                name="" 
                id="Symptoms" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                placeholder="Describe the symptoms"
                value={symptoms}
                onChange={ (e) => setSymptoms(e.target.value)}
            />

        </div>
        <input 
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value="Add patient"
        />

      </form>
    </div>
  )
}

export default Form

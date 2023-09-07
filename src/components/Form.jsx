const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Patient follow-up</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add patients and {""}
        <span className="text-indigo-600 font-bold">Manage them</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">

            <label htmlFor="pet" className="block text-gray-700 uppercase font-bold ">
                Name pet 
            </label>

            <input
                id="pet"
                type="text"
                placeholder="Name of pet"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
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

import Patient from "./Patient"

const PatientList = ({patients, setPatient, deletePatient}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Patient list</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Manage your {''}
            <span className="text-indigo-600 font-bold">Patients and lists</span>
          </p>

          { patients.map( patient => (
            <Patient
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
                deletePatient={deletePatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">There are no patients</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Start adding patients {''}
              <span className="text-indigo-600 font-bold">and will be added below</span>
            </p>
        </>
      )}

    </div>
  )
}

export default PatientList
 
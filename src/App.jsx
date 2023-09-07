import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/patientList"

function App() {
  return (
  <div className="container mx-auto mt-20">
    <Header />
    <Form />
    <PatientList />
  </div>    
  )
}

export default App

import Employees from './components/Employees'

const App = () => {

  const employees = [
      { id: 1, firstname: "John", lastname: "Doe", job: "Developer" },
      { id: 2, firstname: "Anna", lastname: "Tiger", job: "Developer" },
      { id: 2, firstname: "Jim", lastname: "Lion", job: "UX/UI" },
  ];

  return(
    <div>
      <Employees employees = {employees}/>
    </div>
  )
}

export default App
import students from "./data.js";

function App() {
  const getStatus = (student) => {
    if (student.marks < 50) {
      return "Fail";
    }

    if (student.attendance < 60) {
      return "Attendance Short";
    }

    return "Pass";
  };

  return (
    <div>
      <h2>Student Result Table</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Marks</th>
            <th>Attendance</th>
            <th>Final Status</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.marks}</td>
              <td>{student.attendance}%</td>
              <td>{getStatus(student)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
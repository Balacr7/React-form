import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useFormik } from 'formik';
import reportWebVitals from './reportWebVitals';


const EmployeeComponent = () => {
  const formik = useFormik({
    initialValues:{Id:'', Name:'', Location:'',Salary:''},
      onSubmit:values=>{
        alert(JSON.stringify(values));
      }
    });

    return(
      <div>
        <h2>New Employee Form</h2>
        <form onSubmit={formik.handleSubmit}>
          <p>
            <label htmlFor="Id">Employee ID:</label> 
            <input type ="text" name ="Id" Id="Id" value={formik.values.Id} onChange= {formik.handleChange}></input> 
          </p>
          <p>
            <label htmlFor="name">Employee Name: </label> 
            <input type ="text" name ="Name" name="name" value={formik.values.Name} onChange= {formik.handleChange}></input>
          </p>
          <p>
            <label htmlFor="location">Employee Location:</label> 
            <input type ="text" name ="Location" lo value={formik.values.Location} onChange= {formik.handleChange}></input>
          </p>
          <p>
            <label htmlFor="salary">Employee Salary:</label> 
            <input type = "number" name ="Salary"value={formik.values.Salary} onChange= {formik.handleChange}></input>
          </p>
          <button  type="submit"> Create</button>
        </form>
      </div>
    )
}

const element = <EmployeeComponent></EmployeeComponent>

ReactDOM.render(element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

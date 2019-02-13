import React from 'react';

const StudentRow = (props) => {
    const {id, name, course, grade} = props.student;

  return (
      <tr>
          <td>{name}</td>
          <td>{course}</td>
          <td>{grade}</td>
          <td className='center'>
              <button onClick={() => {props.delete(id)}} className='btn btn-small red darken-2'>Delete</button>
          </td>
      </tr>
  )
};

export default StudentRow;
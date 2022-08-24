import React from 'react'
import { Table } from 'react-bootstrap'
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";


export const TicketTable = () => {
  //if(!tickets.length)
  const { searchTicketList, isLoading, error } = useSelector(
    (state) => state.tickets
  );
  if (isLoading) return <h3>Loading ...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
       {searchTicketList.length ? (
         searchTicketList.map((row) => (
            <tr key={row._id}>
              <td>{row._id}</td>
              <td>
                <Link to={`/ticket/${row._id}`}>{row.subject}</Link>
              </td>
              <td>{row.status}</td>
              <td>{row.openAt && new Date(row.openAt).toLocaleString()}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No ticket show{" "}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};


//   return (
//     <Table striped hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Subjects</th>
//           <th>Status</th>
//           <th>Opened Date</th>
//         </tr>
//       </thead>
//       <tbody>
//         {tickets.length ?
//         tickets.map((row) =>(
//           <tr key={row.id}>
//             <td>
//               {row.id}
//               </td>
//             <td>
//             <Link to={`/ticket/${row.id}`}>
//                 {row.subject}
//                 </Link>
//                 </td>
//             <td>{row.status}</td>
//             <td>{row.addedAt}</td>
//           </tr>
//         )) : (
//         <td colSpan="4" className="text-center">
//           No ticket to show</td>
//         )
// }
//       </tbody>
//     </Table>
//   )
// }

// // TicketTable.protoTypes={
// //   tickets:PropTypes.array.isRequired,
// // };
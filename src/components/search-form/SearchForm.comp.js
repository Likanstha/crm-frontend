import React from "react";
import { useDispatch } from "react-redux";
import { filterSerachTicket } from "../../pages/ticket-list/ticketsAction";

import { Form, Row, Col } from "react-bootstrap";

export const SearchForm = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { value } = e.target;
    console.log(e.target);

   dispatch(filterSerachTicket(value));
  };

  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Search:
          </Form.Label>
          <Col sm="9">
            <Form.Control
              name="searchStr"
              onChange={handleOnChange}
              placeholder="Search ..."
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};


// import React from 'react'
// import{Form,Row,Col} from "react-bootstrap";
// import ProTypes from "prop-types";

// export const SearchForm = ({handleOnChange,str}) => {
    
//   return (
//     <div>
//         <Form>
//             <Form.Group as={Row}>
//                 <Form.Label column sm= "2"> Search:{""}
//                 </Form.Label>
//                 <Col sm="10">
//                 <Form.Control
//                 name="search"
//                 onChange={handleOnChange}
//                 value={str}
//                 placeholder='Search...'></Form.Control>
//                 </Col>
//             </Form.Group>
//         </Form>
//     </div>
//   );
// };

// // SearchForm.protoTypes={
// //     handleOnChange:ProTypes.func.isRequired,
// //     str:ProTypes.func.isRequired
// // };


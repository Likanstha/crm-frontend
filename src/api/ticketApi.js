import axios from "axios";

const rootUrl = "http://localhost:3001/v1/";
// const ticketUlr = rootUrl + "ticket/";
// const closeTicketUrl = rootUrl + "ticket/close-ticket/";

export const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/v1/ticket", {
        headers: {
          Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxpa2FuLnN0aGFAZ21haWwuY29tIiwiaWF0IjoxNjYxMzM2Mzg4LCJleHAiOjE2NjEzMzk5ODh9.k_W2w_y2_33iMlvsuz8fwBqe9Iy-QS_ovyVNGjfNlK8"
          //sessionStorage.getItem("accessJWT"),
        },
      });
      console.log(result);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

// export const getSingleTicket = (_id) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const result = await axios.get(ticketUlr + _id, {
//         headers: {
//           Authorization: sessionStorage.getItem("accessJWT"),
//         },
//       });

//       resolve(result);
//     } catch (error) {
//       console.log(error.message);
//       reject(error);
//     }
//   });
// };

// export const updateReplyTicket = (_id, msgObj) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const result = await axios.put(ticketUlr + _id, msgObj, {
//         headers: {
//           Authorization: sessionStorage.getItem("accessJWT"),
//         },
//       });

//       resolve(result.data);
//     } catch (error) {
//       console.log(error.message);
//       reject(error);
//     }
//   });
// };

// export const updateTicketStatusClosed = (_id) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const result = await axios.patch(
//         closeTicketUrl + _id,
//         {},
//         {
//           headers: {
//             Authorization: sessionStorage.getItem("accessJWT"),
//           },
//         }
//       );

//       resolve(result.data);
//     } catch (error) {
//       console.log(error.message);
//       reject(error);
//     }
//   });
// };

// export const createNewTicket = (frmData) => {
//   console.log("from api", frmData);
//   return new Promise(async (resolve, reject) => {
//     try {
//       const result = await axios.post(ticketUlr, frmData, {
//         headers: {
//           Authorization: sessionStorage.getItem("accessJWT"),
//         },
//       });

//       resolve(result.data);
//     } catch (error) {
//       console.log(error.message);
//       reject(error);
//     }
//   });
// };
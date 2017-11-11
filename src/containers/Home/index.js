// import React, { Component } from 'react';
// import ItemList from '../components/itemlist.components.js';
// import { connect } from 'react-redux';
// // import { getCards } from '../../actions/cards';

// class Home extends Component{
//   constructor(props){
//     super(props);
//   }


//   render(){
//     return(
//       <div className="home">

//         <div className="welcome-message">
//           <h2>Welcome</h2>
//         </div>

//         <div className="list-view">
//         </div>

//       </div>
//       );
//   }
// }
// // maps store state to local props
// const mapStateToProps = (state) => {
//   return {
//     users : state.userList
//   };
// };

// //maps store dispatch to local props
// const mapDispatchToProps = (dispatch) => {
//   return{
//     loginUser: (loginCreds) => {
//       dispatch(loginUser(loginCreds));
//     },

//     loadUsers: () => {
//       dispatch(loadUsers());
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Home);
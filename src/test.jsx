import * as axios from 'axios';
// import React, { useEffect, useState } from 'react';

const Test = (props) => {

  // axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      
  // console.log(props.SetUsers(response.data.items));
  // })


  // var axios = require("axios");
  // var MockAdapter = require("axios-mock-adapter");

  // var mock = new MockAdapter(axios);

  // mock.onGet("/users").reply(200, {
  //   users: [{ id: 1, name: "John Smith" }],
  // });

  function click() {
    axios.get("/users").then(function (response) {
      console.log(response.data);
    });
  }
  

  return (
    <button >Сделать запрос</button>
  )
}

export default Test;
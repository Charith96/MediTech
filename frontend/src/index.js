import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bulma/css/bulma.css"

//const mysql = require('mysql');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
/*
//mysql connection
var mysqlConnection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'Tharushi123',
  database:'rxgo_database'
})

mysqlConnection.connect((err)=>{
  if(!err)
  console.log('DB connection succeded.');
  else
  console.log('DB connection failed \n Error : '+ JSON.stringify(err,undefined,2));
});

app.listen(3000,()=>console.log('Expree server is running at port no : 3000'));

app.get('/')*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import Table from './components/Table';
import Header from './components/Header';
import './App.css';
import Search from './components/Search';
import ListingItems from './components/TransactionForm'
import React, { useState } from 'react';
function App(){

const [data,setData] = useState([])
 const [search,setSearch] = useState("")


   function onSubmitData (formData){
    setData((prevData) => [...prevData,formData])
   }
  const itemsToDisplay = data.filter((item) => {
    if (search.length > 0) {
      return item.description.toLowerCase().includes(search.toLowerCase());
    } else {
      return true;
    }
  }); 


  return (
    <div className='container'>
      <Header/>
      <Search setSearch={setSearch} search={search}/>
      <ListingItems onSubmitData={onSubmitData}/>
      <Table data={itemsToDisplay}/>
     
    </div>
  );
}

export default App;



import './App.css';
import { useState } from 'react';
import Component1 from './Component/Component1';
import Header from './Component/Header';
import ImageSlider from './Component/ImageSlider';
import ProductLists from './Component/ProductLists';
import Footer from './Component/Footer';

function App() {

  
  let[status , setStatus]=useState('all');
  function handleData(data){
    setStatus(data);
  }
  function trigerpopup(){
    setTriggerpopup(true);
  }
  let[triggerpopup , setTriggerpopup]=useState(false)
  let[headerCount , setHeadercount]=useState(0);

  function setClosepopup(){
    setTriggerpopup(false);
  }
  return (
    <div >
      <Header headerCount={headerCount} onData={(data)=>{handleData(data)}} onTriggerpopup={trigerpopup}/>
      <Component1/>
      <ImageSlider/>
      <ProductLists onHeadercount={(count)=>{setHeadercount(count)}} status={status}  triggerpopup={triggerpopup} onclose={()=>setClosepopup(false)}/>
      <Footer/>
    </div>
  );
}

export default App;

import React,{useEffect, useState} from 'react'
import Card from './Card';
import './Country.css';

const Countries = () => {
    const[countriesData, setCountriesData] = useState([]);
    const getData = async() =>{
        try{
            const res = await fetch('https://restcountries.com/v3.1/all');
            const data = await res.json();
            setCountriesData(data)
            console.log(data)
        }catch(err){
            console.log(err)
        }
        
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div className="row">
        {countriesData.length>0 ? (countriesData.map(item => <Card data={item}/>)) : ('')}
    </div>
  )
}

export default Countries
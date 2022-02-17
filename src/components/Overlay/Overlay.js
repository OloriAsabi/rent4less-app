import React,{useState} from 'react'
import './Overlay.css';

const Overlay = () => {
    const [filters, setFilters] = useState({})



    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

  return (
    <div className='header-overlay'>
    <div className='filterContainer'>
        <div className='select-options'>
        <select className='options' name="location" onChange={handleFilters}>
                <option defaultValue>Location</option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Port-Harcourt</option>
            </select>
            <select  className="options" name="area" onChange={handleFilters}>
                <option defaultValue>Area</option>
                <option>ikeja</option>
                <option>yaba</option>
                <option>lekki</option>
            </select>
            <select className="options" name="propertyType" onChange={handleFilters}>
                <option defaultValue>Property Type</option>
                <option>Shared Homes</option>
                <option>Enitre Home</option>
                <option>offices</option>
            </select>
        </div>
</div>
   <div className='options-button'>search</div>
</div>
  )
}

export default Overlay
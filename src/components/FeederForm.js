import React, { useState } from 'react';
import '../App.scss';
import FeederList from './FeederList';
import cat from '../cat.jpg';

const FeederForm = () => {
  const [feederData, setFeederData] = useState({
    name: '',
    type: '',
    note: ''
  });
  const [dataList, setDataList] = useState([]);

  // Handle Form input
  const handleChange = (e) => {
    const newData = { ...feederData };
    newData[e.target.name] = e.target.value;
    newData.id = Math.random() * 1000;
    setFeederData(newData);
  };

  //   Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setDataList((oldList) => [...oldList, feederData]);
    setFeederData({ name: '', type: '', note: '' });
    e.target.reset();
  };

  // Handle Delete
  function handleDelete(id) {
    setDataList(dataList.filter((item) => item.id !== id));
  }

  return (
    <div>
      <img className='profile-image' src={cat} alt='profile' />

      <h1>Feeding Tofu</h1>
      <div className='input-fields'>
        {/* User can choose name from here, whoever is feeding the pet */}
        <form action='' id='feedingForm' onSubmit={(e) => handleSubmit(e)}>
          <label className='who-is-feeding' for='choice'>
            🐈 Who is feeding? <span>*</span>
          </label>

          <select
            id='who-is-feeding'
            name='name'
            value={feederData.name}
            onChange={(e) => handleChange(e)}
          >
            <option value='' selected disabled hidden>
              Select Name
            </option>
            <option value='User 1'>User 1</option>
            <option value='User 2'>User 2</option>
            <option value='User 3'>User 3</option>
            <option value='User 4'>User 4</option>
          </select>

          {/* User can select the meal-size from here */}

          <label className='meal-size' for='choice'>
            🐟 How much are you feeding? <span>*</span>
          </label>

          <select
            id='add-meal-size'
            name='type'
            value={feederData.type}
            onChange={(e) => handleChange(e)}
          >
            <option value='' selected disabled hidden>
              Select Meal Type
            </option>
            <option value='Full Meal'>Full Meal</option>
            <option value='Half Meal'>Half Meal</option>
            <option value='Snack'>Snack</option>
          </select>

          <label className='meal-size' for='choice'>
            📋 Note
          </label>

          <input
            maxlength='50'
            type='text'
            id='note'
            name='note'
            placeholder='e.g. Gave extra food'
            onChange={(e) => handleChange(e)}
          />

          <button id='submit' className='submit'>
            Submit
          </button>
        </form>
      </div>

      {/* View List */}
      <div className='feeding-record'>
        <h1>Feeding Time Table</h1>
        {dataList.map((data) => {
          return (
            <FeederList data={data} handleDelete={handleDelete}></FeederList>
          );
        })}
      </div>
    </div>
  );
};

export default FeederForm;

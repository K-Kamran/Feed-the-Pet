import React from 'react';
import '../App.scss';
import deleteIcon from '../delete.jpg';

const FeederList = (props) => {
  return (
    <div className='input-record' id='inputRecord'>
      <button
        className='delete'
        onClick={() => props.handleDelete(props.data.id)}
      >
        <img className='delete-icon' src={deleteIcon} alt='Delete' />
      </button>

      <div className='time-record'>
        <p>Date</p>
        <h3 id='date'>{new Date().toLocaleDateString()}</h3>
      </div>

      <div className='who-feed-data'>
        <p>Who Feed</p>
        <h3 id='who-feed'>{props.data.name}</h3>
      </div>

      <div className='meal-size-data'>
        <p>Meal Size</p>
        <h3 id='meal-size'>{props.data.type}</h3>
      </div>

      <div className='meal-time-data'>
        <p>Meal Time</p>
        <h3 id='feeding-time'>{new Date().toLocaleTimeString()}</h3>
      </div>

      <div className='meal-time-data'>
        <p>Note</p>
        <h3 id='note'>{props.data.note}</h3>
      </div>
    </div>
  );
};

export default FeederList;

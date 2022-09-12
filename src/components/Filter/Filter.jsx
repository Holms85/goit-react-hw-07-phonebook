import React from 'react';
import style from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  getFilteredContact
} from 'Redux/contactSlice';
import {filterContact} from 'Redux/contactSlice';

export default function Filter() {
const dispatch = useDispatch();
  const filter = useSelector(getFilteredContact);
  const changeFilter = e => dispatch(filterContact(e.target.value));

  return (
    <div className={style.flex}>
      <label className={style.label}>Find contact by name</label>
      <input
        className={style.input}
        type="text"
        value={filter}
        onChange={changeFilter}
      ></input>
    </div>
  );
}

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLoading } from '../app/slices/classicSlice';
import axios from 'axios';

const UserListClassic = () => {

const dispatch = useDispatch();

    useEffect(()=>{
dispatch(setLoading())

axios.get("")

    }, [])
  return (
    <div>
      selams
    </div>
  )
}

export default UserListClassic

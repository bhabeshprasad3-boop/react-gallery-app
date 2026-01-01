import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from './Components/Header';
import Button from './Components/Button';
import Cards from './Components/Cards';

const App = () => {

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [index,setIndex] = useState(1);

  const getUserInfo = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
      setUserData(response.data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getUserInfo();
  }, [index])

  if (loading) {
    return <div className='flex justify-center items-center h-screen w-full'><p className='mt-10 text-2xl'>Loading... ⏳</p></div>
  }
  if (error) {
    return <h1 className='text-red-500 text-center mt-10'>Something went wrong: {error}</h1>
  }

  return (
    <div className='bg-gray-100 min-h-screen pb-10'>
      <Header/>
      <Cards userData={userData}/>
      <Button index={index} setIndex={setIndex}/>
    </div>
  )
}

export default App


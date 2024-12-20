import React from 'react'
import axios from 'axios';
import { useState , useEffect} from 'react';
import Loader from './Loader';

const API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;

function RandomGif() {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false)

  async function fetchData(){
    setLoading(true);
    try{
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const output = await axios.get(url);

      const finalURL = output.data.data.images.downsized.url;
      // console.log(output);
      // console.log(output.data.data.images.downsized.url);

      setGif(finalURL);
    }
    catch(error){
      console.log('Error fetching data from Giphy API', error);
    }
    setLoading(false);
  }

  useEffect(() => {
    return () => {
      fetchData();
    }
  }, [])

  function clickHandler(){
    fetchData();
  }

  return (
    <div className='flex flex-col justify-evenly items-center border-2 border-black  w-[40rem] h-[30rem] rounded bg-[#686D76]'>
        <p className='text-2xl font-semibold'>Random Gif</p>
        {
          loading ? (<Loader/>) : (<img src={gif} alt="random gif" className='w-[80%] h-[60%]'/>)
        }
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[80%]"
          onClick={clickHandler}>Generate</button>

    </div>
  )
}

export default RandomGif
import Header from '../../components/Header'
import { useState, useEffect } from "react"
import axios from "axios"
import './next.scss'

import { BiLike } from "react-icons/bi";

import { BiDislike } from "react-icons/bi";

import { FaShare } from "react-icons/fa";

import { CgMenuGridO } from "react-icons/cg";

import Oval from '../../assets/img/Oval.svg'


const Next = () => {

  const [ vedio, setvedio ] = useState([])  
  useEffect( () => {
    const fetchData = async () => {
        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
                q: 'music',
                part: 'snippet,id',
                regionCode: 'US',
                maxResults: '50',
                order: 'date'
              },
            headers: {
              'X-RapidAPI-Key': 'cdf993d660mshf59a6735cc40a51p1cbf8cjsna2eb8d7212c6',
              'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
          };
          
          try {
            const response = await axios.request(options);
            const result = response.data.items;
            setvedio(result);
            console.log(result)
          } catch (error) {
            console.log(error)
          }


    }

    fetchData()
}, [])













  return (
    <>
    
    <div className="container">
      

    <Header />
    
    <div className='next__block'>
      <div>

    <iframe className='iframe' width="1000" height="700" src="https://www.youtube.com/embed/vI6yG78jPnk?si=Fk0E2N-5QO4lovQb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <h1>Dude You Re Getting A Telescope</h1>

    <div className='icon__block'>
    <p className='next__text'>123k views</p>
      <div className='icon__item_block'>
      <BiLike />
      <p>123K</p>
      </div>

      <div className='icon__item_block'>
      <BiDislike />
      <p>435K</p>
      </div>

      <div className='icon__item_block'>
      <FaShare />
      <p>Shere</p>
      </div>

      <div className='icon__item_block'>
      <CgMenuGridO />
      </div>


    </div>

    <div className='wrapper__block'>
      <div className='wrapper__item_block'>

      <img src={Oval} alt="img" />
        <div className='wrapper__title_block'>
          <h2>Food & Drink</h2>
          <p>Published on 14 Jun 2019</p>
        </div>
      <button className='wrapper__btn'>Subscribe 2.3m</button>
      </div>

    </div>
    <p className='next__desc'>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>

    <p className='next__descc'>Show more</p>

      </div>

      <div className="videos__Card">
        <div className='vedios__block'>
          <h1>Next</h1>
          <p>Autoplay</p>
        </div>
      {vedio.map((item) => (
        <div key={item.id} className="vedio__card">




        <img className="vedio__img" src={item.snippet.thumbnails.default.url} alt="" />

          <h3 className="vedio__title">{item.snippet.title}</h3>


        </div>
      ))}
    </div>
      



    </div>

    </div>
    
    
    </>

      

  ) 
}

export default Next
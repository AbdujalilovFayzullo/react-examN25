import { useState, useEffect } from "react"
import axios from "axios"
import '../components/vedio.scss'
import { NavLink } from "react-router-dom"

const Vedio = (props) => {
    const [ vedio, setvedio ] = useState([])

    console.log(props);

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
    <div className="videosCard">
      {vedio.map((item) => (
        <div key={item.id} className="vedio__card">

        <NavLink to="/next">


          <img className="vedio__imgg" src={item.snippet.thumbnails.default.url} alt="" />

          <h3 className="vedio__title">{item.snippet.title}</h3>
        </NavLink>


        </div>
      ))}
    </div>

        

    

  )
}

export default Vedio
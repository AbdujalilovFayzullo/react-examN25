import Header from '../../components/Header'
import Sidebar from '../Sidebar'
import Vedio from '../Vedio'



const Home = () => {
  return (
    <div className='container'> 
        <Header/>    
        <div className='block'>
        <Sidebar/>        
        <Vedio/>    

        </div>




    </div>
  )
}

export default Home
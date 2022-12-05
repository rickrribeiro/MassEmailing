import {useState, useEffect} from 'react'
import './HomePage.css';
import Banner from '../../components/banner/Banner'
import Card from '../../components/card/Card'


import axios from "axios";
interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(()=>{ //exec a func  qnd a var no array mudar
    axios('http://192.168.0.31:3000/games')
    .then(response => {
      setGames(response.data)
    })
  },[])// se deixar vazio executa uma unica vez durante todo o fluxo



  //mx seta margin
  // cada 1 é 4px
  // 2xl é 24px
  return (
    <div className='home'>
    <Banner />

    <div className='home__section'>
    <Card
        src="https://miro.medium.com/max/1200/1*buAlXkwPmNAOOG23fX6rFw.jpeg"
        title="Online Experiences"
        description="Unique activities we can do together, led by a world of hosts."
    />
    <Card
        src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
        title="Unique stays"
        description="Spaces that are more than just a place to sleep."
    />
    <Card
        src="https://s3.ap-southeast-2.amazonaws.com/thebalibible.com/uploads/images/venue/3ed6fe7dcce119e06367be48873b13ed.jpg?v=1"
        title="Entire homes"
        description="Comfortable private places, with room for friends or family."
    />
    </div>
    <div className='home__section'>
    <Card
        src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
        title="3 Bedroom Flat in Bournemouth"
        description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
        price="£130/night"
    />
    <Card
        src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
        title="Penthouse in London"
        description="Enjoy the amazing sights of London with this stunning penthouse"
        price="£350/night"
    />
    <Card
        src="https://media.nomadicmatt.com/2018/apartment.jpg"
        title="1 Bedroom apartment"
        description="Superhost with great amenities and a fabolous shopping complex nearby"
        price="£70/night"
    />
    </div>
</div>
  );
}

export default App;


// {games.map(game => {
//   {/*a key é pro react conseguir manipular sem recriar a interface */}
//   return(
//     <GameBanner key={game.id} bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.ads}/>
//   )
// })}

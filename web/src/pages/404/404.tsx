
import './404.css';


function ErrorPage() {
  
  return (
   
    <body className="bg-purple">
            
            <div className="stars">
               
                <div className="central-body">
                    <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px"/>
                    <a href="/" className="btn-go-home" >GO BACK HOME</a>
                </div>
                <div className="objects">
                    <img className="object_rocket" src="https://cdn-icons-png.flaticon.com/512/2174/2174129.png" width="100px"/>
                    <div className="earth-moon">
                        <img className="object_earth" src="https://icons.iconarchive.com/icons/fazie69/league-of-legends/512/Nami-icon.png" width="100px"/>
                        <img className="object_moon" src="https://www.kindpng.com/picc/m/10-105473_one-piece-png-jinbei-one-piece-hd-png.png" width="80px"/>
                    </div>
                    <div className="box_astronaut">
                        <img className="object_astronaut" src="https://ouch-cdn2.icons8.com/hoP10MI4ChKlpW4GnEdbDYTHrfzK_BJmVlxaMVf2ASs/rs:fit:1010:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzgw/LzFiMDA4YzhjLTkw/M2ItNDZiYi04YjY5/LTcyOWE4NDdiYWEx/Yy5zdmc.png" width="240px"/>
                    </div>
                </div>
                <div className="glowing_stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
    
                </div>
    
            </div>
    
        </body>
    
  );
}

export default ErrorPage;


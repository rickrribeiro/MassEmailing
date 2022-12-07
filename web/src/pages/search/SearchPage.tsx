import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "../../components/searchResult/SearchResult";

function Search() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p></p>
                <h1></h1>
                <Button variant="outlined">Stars</Button>
                <Button variant="outlined">Prices</Button>
                <Button variant="outlined">City</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://viagemeturismo.abril.com.br/wp-content/uploads/2017/12/istock-842960000.jpg"
                location="São Paulo - Brazil"
                title="My journey in São Paulo"
                username="Username"
                description="São Paulo, city, capital of São Paulo estado (state), southeastern Brazil. It is the foremost industrial centre in Latin America.he city is located on a plateau of the Brazilian Highlands extending inland from the Serra do Mar, which rises as part of the Great Escarpment only a short distance inland from the Atlantic Ocean. The city itself sits in a shallow basin with low mountains to the west. It lies about 220 miles (350 km) southwest of Rio de Janeiro and about 30 miles (50 km) inland from its Atlantic Ocean port of Santos. The city’s name derives from its having been founded by Jesuit missionaries on January 25, 1554, the anniversary of the conversion of St. Paul."
                star={4.73}
                price="$400 / night"
                total="$4000 total"
            />

            <SearchResult
                img="https://a.cdn-hotels.com/gdcs/production62/d586/1be9ef68-2abb-45f3-98e2-3fb842683b9e.jpg"
                location="Rio de Janeiro - Brazil"
                title="My journey in Rio de Janeiro - Copacabana"
                username="Username"
                description="Rio de Janeiro, in full Cidade de São Sebastião do Rio de Janeiro, byname Rio, city and port, capital of the estado (state) of Rio de Janeiro, Brazil. It is located on the Atlantic Ocean, in the southeastern part of the tropical zone of South America, and is widely recognized as one of the world’s most beautiful and interesting urban centres. Although Rio de Janeiro continues to be the preeminent icon of Brazil in the eyes of many in the world, in reality its location, architecture, inhabitants, and lifestyle make it highly unique when compared with other Brazilian cities, especially the country’s capital of Brasília or the much larger city of São Paulo. The former is a much smaller city dating back only to the 1960s, while the latter is a huge, sprawling commercial and manufacturing centre with none of Rio’s spectacular natural beauty or captivating charm. Unlike Rio, both are located on flat interior plateaus."
                star={4.3}
                price="$400 / night"
                total="$4000 total"
            />

            <SearchResult
                img="https://coisasdojapao.com/wp-content/uploads/2017/03/Tokyo-Main-Image.jpg"
                location="Tokyo - Japan"
                title="My journey in Tokyo"
                username="Username"
                description="Whilst Japan requires more than one visit to cover its vast grounds, there is no better introduction than jumping headfirst into its huge capital – the buzzing Tokyo metropolis.
                The city holds a tremendous amount of fascination and a reputation of uniqueness, and modern boldness merged with tradition and order to what would be typically chaotic, prompting many to wonder what it is like in Tokyo.
                
                For over a week, Tokyo was home. A new landscape ready for me to lose myself in, like Scarlett Johansson’s character in the film Lost in Translation. It didn’t intimidate or frustrate me; it just made me love it for the things you don’t see elsewhere, its little quirks and bizarre offerings and for not losing its traditions in light of its rapid, modern growth."
                star={4.73}
                price="$400 / night"
                total="$4000 total"
            />

            <SearchResult
                img="https://content.r9cdn.net/rimg/dimg/45/5f/5788029f-city-25901-16e9488a141.jpg?crop=true&width=1020&height=498"
                location="Osaka - Japan"
                title="My journey in Osaka"
                username="Username"
                description="OSAKA (about 500 kilometers southwest of Tokyo) is the second largest city in Japan and the 13th largest city in the world, with a population of about 10.5 million people. Situated on a sheltered bay, it is also the commercial, shipping and industrial center of western Japan, the second major gateway to Japan after Tokyo and the transportation and communication hub of the Kansai region, with a convenient connections to Kyoto, Nara, and Kobe, the Inland Sea area, and Shikoku, which are all nearby. Even though Osaka is flat as flat can be its name means “big hill.” The designated city of Osaka covers 222 square kilometers and has about 2.7 million people. The Metro area has almost 20 million people.
                For the most part, Osaka isn't a very attractive place."
                star={4.3}
                price="$400 / night"
                total="$4000 total"
            />

            <SearchResult
                img="https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg"
                location="New York - USA"
                title="My journey in New York"
                username="Username"
                description="If you ask someone what place is the most iconic place to visit you would most certainly hear the marvelous city called New York City. Also known as, 'The city that never sleeps.' The city 's population has 8.4 million people, and was founded by a man named Peter Minuit (Biography.com). The state is ranked top 2 as a global power city in the world!  The city has many iconic parts of itself that no other city can live up to the hype of New York. New York city is the best place in the United States to plan a vacation trip because of its iconic scenery, monument, and lastly the delicious food."
                star={4.73}
                price="$400 / night"
                total="$4000 total"
            />

            <SearchResult
                img="https://www.visiteosusa.com.br/sites/default/files/styles/hero_l/public/images/hero_media_image/2016-10/HERO%201_LosAngeles_EDITORIAL_shutterstock_334078379_CROP_Web72DPI.jpg?h=2dd6cd38&itok=Cz2SHB6Z"
                location="Los Angeles - USA"
                title="My journey in Los Angeles"
                username="Username"
                description="I recently took a weekend trip to Los Angeles, California. Los Angeles is a coastal city situated along the Pacific Ocean. Many celebrities earned their claim to fame here. Although the town offers many attractions centered around Hollywood culture, there is a lot to see and visit in Los Angeles.
                Of course, all things related to Hollywood are popular tourist attractions. The Hollywood Sign, located the Hollywood Hills of the Santa Monica Mountains, is a famous landmark for this star-studded town. Once in downtown Hollywood, it’s possible to take a stroll along the Hollywood Walk of Fame. This landmark contains more than 2500 brass stars dedicated to celebrities who have made a significant impact on the entertainment industry. In Hollywood, visitors can even take tours of popular movie studios. Stephanie had a chance to visit Universal Studios, which produces her favorite films.
                
                Los Angeles is also a popular beach town, offering plenty of opportunities for sunbathing and surfing. A common beach destination is the Santa Monica Pier, which offers rides and attractions to its visitors. Here, Stephanie rode the iconic Ferris wheel, which offered her a spectacular view of the city and coast.
                
                These are just some of the things i experienced during her visit to Los Angeles. She loved her trip, and she hopes to return someday soon."
                star={4.3}
                price="$400 / night"
                total="$4000 total"
            />
        </div>
    )
}

import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		user: state.userState.user,
	};
};

export default connect(mapStateToProps)(Search);
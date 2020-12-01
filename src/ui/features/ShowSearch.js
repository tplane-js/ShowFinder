import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { get } from "axios";
import { orderBy } from "lodash";
import { SEARCH_API_URL } from "./../../constants/index";

const ShowSearch = (props) => {
  let history = useHistory();

  const [shows, setShows] = useState([]);
  const [inputValue, setInputValue] = useState('the office');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    findShow(inputValue);
  }, []);

  const findShow = (query) => {
    console.log('firing find show', query);
    setIsLoading(true);
    get(`${SEARCH_API_URL}${query}`)
      .then(({ data }) => {
        setShows(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <header>
        <h1>Show Finder</h1>
      </header>
      <section className="page-body">
        <div className='search-wrapper'>
          
          <div className="search-box">
            <div className='input-wrapper'>
              <span className='icon-wrapper'>
                <img src='/search-icon.png'></img>
              </span>
              <input type="text" value={inputValue} placeholder='search show titles' onChange={handleChange} />
            </div>
          </div>
          <div className='button-wrapper' onClick={findShow.bind(null, inputValue)}>
            Search
          </div>
        </div>
        
        {!isLoading &&
          shows &&
          shows.map(({ score, show }, index) => {
            //debugger;
            return (
              <div
                className="simple-row"
                onClick={() => {
                  history.push(`/show/${show.id}`);
                }}
                key={index}
              >
                <div className='show-cover'>
                  <img src={show.image?.medium}></img>
                </div>
                <div className='show-details'>
                  <h1>{show.name}</h1>
                  <span dangerouslySetInnerHTML={{__html:show.summary}}></span>

                </div>
                
              </div>
            );
          })}
        {isLoading && <h1>LOADING...</h1>}
        
      </section>
    </div>
  );
};

export default ShowSearch;

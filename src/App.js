import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const
      {
        data: {
          boxOfficeResult: { dailyBoxOfficeList }
        }
      } = await axios.get("https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=86c7aaa3b9752c58571f2b50e1301903&targetDt=20251231");
    console.log(dailyBoxOfficeList)
    this.setState({ dailyBoxOfficeList, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, dailyBoxOfficeList } = this.state;
    return (
      <section className="container">
        {isLoading
          ? (
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {dailyBoxOfficeList.map(movie => {
                return <Movie
                  key={movie.rnum}
                  rnum={movie.rnum}
                  movieNm={movie.movieNm}
                  openDt={movie.openDt} />
              })}
            </div>
          )}
      </section>
    )
  }
}

export default App;

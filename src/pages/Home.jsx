import React, { useState } from "react";
import { searchForShows, searchForActors } from "../api/tvmaze";
import ShowGrid from "../components/shows/ShowGrid";
import ActorsGrid from "../components/actors/ActorsGrid";
const Home = () => {
  const [searchStr, setSearchStr] = useState("");
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");

  //   console.log(searchOption);
  const OnRadioChange = (eve) => {
    setSearchOption(eve.target.value);
  };

  function onSearchInputChange(event) {
    const val = event.target.value;
    setSearchStr(val);
  }

  const onSearch = async (ev) => {
    ev.preventDefault();

    try {
      let result;
      setApiDataError(null);
      if (searchOption === "shows") {
        result = await searchForShows(searchStr);
      } else {
        result = await searchForActors(searchStr);
      }
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured : {apiDataError.message}</div>;
    }

    if (apiData?.length===0) {
        return <div> No result</div>
    }

    if (apiData) {
      return apiData[0].show ? <ShowGrid shows = {apiData} /> : <ActorsGrid actors = {apiData}/>;
    }

    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" onChange={onSearchInputChange} value={searchStr} />
        <button type="submit"> Search </button>

        <label>
          <input
            type="radio"
            name="search-option"
            value="shows"
            checked={searchOption === "shows"}
            onChange={OnRadioChange}
          />
          Shows
        </label>

        <label>
          <input
            type="radio"
            name="search-option"
            value="actors"
            checked={searchOption === "actors"}
            onChange={OnRadioChange}
          />
          Actors
        </label>
      </form>

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;

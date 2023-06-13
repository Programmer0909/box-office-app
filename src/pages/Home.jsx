import React, { useState } from "react";
import { searchForShows } from "../api/tvmaze";
const Home = () => {
  const [searchStr, setSearchStr] = useState("");
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  function onSearchInputChange(event) {
    const val = event.target.value;
    setSearchStr(val);
  }

  const onSearch = async (ev) => {
    ev.preventDefault();

    try {
      setApiDataError(null);

      const result = await searchForShows(searchStr);
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured : {apiDataError.message}</div>;
    }

    if (apiData) {
      return apiData.map((data) => (
        <div key={data.show.id}> {data.show.name}</div>
      ));
    }

    return null;
  };


  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" onChange={onSearchInputChange} value={searchStr} />
        <button type="submit"> Search </button>
      </form>

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;

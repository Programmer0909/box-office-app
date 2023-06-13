import React, { useState } from "react";
const Home = () => {
  const [searchStr, setSearchStr] = useState("hyi");

  function onSearchInputChange(event) {
    const val = event.target.value;
    setSearchStr(val);
  }

  const onSearch = async (ev) => {
    ev.preventDefault();
    const url = `https://api.tvmaze.com/search/shows?q=${searchStr}`;
    // console.log(url);
    const response = await fetch(url);
    const body = await response.json();
    // console.log(body[0].show.name);
    body.map(item => console.log(item.show.name));

  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" onChange={onSearchInputChange} value={searchStr} />
        <button type="submit"> Search </button>
      </form>
    </div>
  );
};

export default Home;

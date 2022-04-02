import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSearchWord } from "../ReduxSlices/SearchSlice";
import "./SearchComponent.css";


export function SearchComponent() {

  const [searchWord, setSearchWord] = useState("");

  const dispatch = useDispatch()

  const updateState = (e: any) => {
    setSearchWord(e.target.value)
  }

  const handleChange = () => {
    dispatch(updateSearchWord(searchWord))
  }

  return (
    <React.Fragment>
      <div className="search">
        <input placeholder="search products" value={searchWord} name="search" onChange={updateState} className="search-input" />{" "}
        <button className="search-button" onClick={handleChange}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </React.Fragment>
  );
}

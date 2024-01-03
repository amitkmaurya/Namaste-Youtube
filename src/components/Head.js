import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
// import store from "../utils/store";
import { casheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggetions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCashe = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCashe[searchQuery]) {
        setSuggetions(searchCashe[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      // console.log("From search");
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    // console.log("API Call - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggetions(json[1]);
    dispatch(casheResults({
      [searchQuery]: json[1],
    }));
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 mx-3 mb-3 shadow-sm fixed left-0 right-0 top-0 bg-white">
      <div className="flex items-center col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://www.svgrepo.com/show/506800/burger-menu.svg"
        />
        <img
          className="h-8 mx-3"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/2560px-YouTube_Logo_%282013-2017%29.svg.png"
        />
      </div>
      <div className="col-span-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            type="text"
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔎
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white p-1 w-[37rem] shadow-lg rounded-lg border border-gray-200">
            <ul className="">
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="flex py-2 px-3 shadow-sm hover:bg-gray-100"
                >
                  🔎 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/709/709722.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default Head;

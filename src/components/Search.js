import React from 'react';

const Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={props.onInputChange} />
    <button className="btn hidden-sm-down" onClick={props.onQuerySumbit}>
      검색
    </button>
  </div>
);

export default Search;

// 버튼을 누른다. 
// fetch 를 한다. 
// fetch 로 가져온 데이터를 state에 업데이트한다. 
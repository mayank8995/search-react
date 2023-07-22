import React from 'react';

const SearchItems = (props) => {
  const [list, setList] = React.useState(props.itemList);
  const [original] = React.useState(props.itemList);

  const handleSearch = (e) => {
    const data = e.target.value;
    const filtered = list.filter(
      (item) => item.toLowerCase().includes(data) && data !== ''
    );
    if (filtered.length > 0) {
      setList(filtered);
    } else {
      setList(original);
    }
    console.log(data, '  ', filtered, '  ', original);
  };

  return (
    <div>
      <input type="text" onChange={handleSearch} />
      {list.length > 0 && (
        <ul>
          <>
            {list.map((item, index) => {
              return <li key={`${item}_${index}`}> {item} </li>;
            })}
          </>
        </ul>
      )}
    </div>
  );
};

export default SearchItems;

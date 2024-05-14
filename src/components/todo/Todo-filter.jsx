import classNames from "classnames";
import React from "react";

const TodoFilter = ({ setFilter, filterMap, activeFilter }) => {
  console.log("TodoFilter");
  const filterKeys = Object.keys(filterMap); // ['All', 'Todo', 'Done']

  return (
    <div>
      {filterKeys.map((filterName) => (
        <button
          key={filterName}
          onClick={() => setFilter(filterName)}
          className={classNames("btn", { active: activeFilter === filterName })}
        >
          {filterName}
        </button>
      ))}
    </div>
  );
};

export default React.memo(TodoFilter);

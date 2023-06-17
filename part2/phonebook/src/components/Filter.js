import React from "react";

function Filter ({filter, handleFilter}) {

    return (
      <form>
      <div>
        Filter shown with:
          <input value={filter} onChange={handleFilter}/>
      </div>
      </form>
    )
}

export default Filter;
import React from "react";

function Filter ({Filter, handleFilter}) {

    return (
      <form>
      <div>
        Find country:
          <input value={Filter} onChange={handleFilter} />
      </div>
      </form>
    )
}

export default Filter;
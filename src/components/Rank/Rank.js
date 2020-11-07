import React from "react";

const Rank =({name,entries})=>{
    return(
        <div className="white f3" style={{textTransform:'capitalize'}}>
              {`${name}, your current entry count is...`}
            <div className="white f2">
                {entries}
            </div>
        </div>
    );
}

export default Rank;
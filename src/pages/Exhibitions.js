/* eslint-disable */
import React from 'react';
import Data from '../data/Imsi';

const Exhibitions = () => {
  // assign 경고는 arrow func로 해줘야 오류가 안 나온다.
  return (
    <div style={{"marginTop":"110px"}}>
        <p style={{"fontSize":"2em", "textAlign":"center", "fontWeight":700}}>Current Exhibition</p>
        <div className="current-post-wrap">
          {
            Data.map((value, key) => {
              return(
                <div key={key}>
                  <div className="current-post">
                    <img className="current-img" src={value.src} />
                    <p className="exhibition-main-title">{value.title}</p>
                    <p className="exhibition-main-subtitle">{value.subtitle}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Exhibitions;
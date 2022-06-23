import React, { useState } from 'react';


function Watch() {
  const time = new Date().toLocaleTimeString();

  const [cTime, setCTime]= useState(time);

  function updateTime(){
    const time = new Date().toLocaleTimeString();
    setCTime(time);
  }

  setInterval(updateTime, 1000);
  
  return (
    <div>
      <h1>{cTime}</h1>
    </div>
  );
}

export default Watch;
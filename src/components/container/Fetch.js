import {useEffect, useState} from 'react';

export default function Fetch() {
  const [data, setData] = useState("");
  const getData = async () => {
    try{
    const resp = await fetch('https://api.sampleapis.com/wines/reds');
    const json = await resp.json();
    setData(json);
    }catch(error){
        console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
<>
{console.log(data)}
      {(data.length>0) ? data.map(elem=><div className='col' >
       <p> {elem.wine} </p>
       <img src={elem.image} alt={elem.winery}/>
      </div>
      ): console.log("error")}
      </>
  )
}
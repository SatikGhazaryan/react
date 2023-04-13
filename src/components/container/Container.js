import  './Container.css'
import RenderDiv from '../htmlElements/Div'
import RenderP from '../htmlElements/P';
// import {useEffect, useState} from 'react';
// function Container() {
//   const [data, setData] = useState("");
//   const getData = async () => {
//     const resp = await fetch('https://api.sampleapis.com/countries/countries');
//     const json = await resp.json();
//     setData(json);
//   }

//   useEffect(() => {
//     getData();
//   }, []);
// const listData=data.map(elem =>
//     <div className='col'>
//     <p> {elem.name} - {elem.capital}</p>
//     <img src={elem.media.flag} alt={elem.name}/>
//     </div>
//     )
//   return (
//     <div className='Container'>
//      {
//        listData
//      }
//       </div>
//   )
// }

function Container(){
    return (
        <div className='Container'>
        <RenderDiv num={5} class="col" ok={<p> </p>}>
        {/* <RenderP num={2} class="col-p"/> */}
       {}
        </RenderDiv>
        </div>
    )
}
export default Container;
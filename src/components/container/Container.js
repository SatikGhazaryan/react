import "./Container.css";
import Fetch from "./Fetch";
//import RenderDiv from "../htmlElements/Div";
//import RenderP from "../htmlElements/P";

function Container() {

  return (
    <div className="Container">
   <Fetch/>
   </div>
)
}

// function Container(){
//     return (
//         <div className='Container'>
//         <RenderDiv num={5} class="col" ok="1">
//         {/* <RenderP num={2} class="col-p"/> */}
//        {}
//         </RenderDiv>
//         </div>
//     )
// }
export default Container;

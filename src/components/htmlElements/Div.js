//import RenderP from '../htmlElements/P'
function RenderDiv(props){
    let arr=[]
    for(let i=0; i<props.num;i++){
    arr.push(props.num)
    }
    let divList=arr.map((elem)=>{
   return( <div className={props.class}/>)})
        return(
            <>
           {divList}
            </>
         )
    }
export default RenderDiv
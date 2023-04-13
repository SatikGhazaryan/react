import RenderP from '../htmlElements/P'
function RenderDiv(props){
    let arr=[]
    for(let i=0; i<props.num;i++){
    arr.push(props.num)
    }
    let divList=arr.map(elem=><div className={props.class}>
        
       <RenderP num={1} class="col-p" tage={props.ok}/>
    </div>)
        return(
            <>
          
           {divList}
            </>
         )
    }
export default RenderDiv
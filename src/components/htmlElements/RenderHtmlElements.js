
function RenderHtmlElements(props){
    let arr=[]
    for(let i=0; i<props.num;i++){
    arr.push(props.num)
    }
    let divList=arr.map(elem=><div className={props.class}>
        if(props.child=='p'){
            <p></p>
        }

    </div>)
        return(
            <>
           {divList}
            </>
         )
    }
export default RenderHtmlElements
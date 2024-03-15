import fetch from "./../helpers/fetch"

const Cocktails= ()=>{
    const data=fetch();
    console.log(data);
    return <>
    <h1>All cocktails</h1>
    
    </>
            
}

export default Cocktails;
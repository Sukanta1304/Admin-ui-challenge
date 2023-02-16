function Pagination({current,total,onChange}) {
    let pages= new Array(total).fill(0).map((el,i)=>(
      <button  
      key={i}
      onClick={()=>onChange(i+1)}
      className= {current==i+1? "active-page-btn": "page-btn"}
      >{i+1}
      </button>
    ))
    return (
    <div data-testid = "page-container">
    {pages}
    </div>
   
    );
  }
  
  export default Pagination;
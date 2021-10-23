import React from 'react';
let Filter =(props)=> {
    return(
        <div class="col-3">
            <ul class="list-group m-3">
                <li onClick={(e)=>{
                    props.handleFilter("All Genre");
                }} 
                class={`list-group-item ${props.selectedFilter=="All Genre"? "active" :""}`}>All genres</li>
                {
                    props.genreData.map((el)=>{
                        return <li onClick={()=>{
                            props.handleFilter(el.name)
                        }} key={el._id} class={`list-group-item ${props.selectedFilter==el.name?"active":""}`}>{el.name}</li>
                    })
                }
                
              </ul>
        </div>
    );
}


export default Filter;
let Filter =(props)=>{
    console.log("this from filter");
    console.log(props.genreData);
    return(
        <div class="col-3">
            <ul class="list-group m-3">
                <li class="list-group-item">All genres</li>
                {
                    props.genreData.map((el)=>{
                        return <li key={el.id} class="list-group-item">{el.name}</li>
                    })
                }
                
              </ul>
        </div>
    );
}

export default Filter;
function loadData(){
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => displayData(data))
}
loadData();


const displayData = (data) => {
    const colData = document.getElementById("posts");

    data.forEach ((posts) => {
        const postDiv = document.createElement("div");
        postDiv.innerHTML = `
            <div class="card border border-success p-2 mb-2 " style="width: 16rem;">
        <img src="image/keya2.webp" class="card-img-top" alt="...">
        <div class="card-body fw-semibold fst-italic">
        <p class="card-text ">${posts.name}</p>
         <p>${posts.website}</p>
        <a href="#" class="btn btn-primary bg-info-subtle text-dark">Go somewhere</a>
  </div>
</div>
        
        
 `;
 colData.appendChild(postDiv);
}

)

}
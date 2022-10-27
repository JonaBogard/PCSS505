const apiRick=async(pag)=>{
  let url="https://rickandmortyapi.com/api/character/?page="+pag;
  const api= await fetch(url);
  const data=await api.json();
  console.log(data);
  divRes=document.querySelector("#res")
  divRes.innerHTML=""
  data.results.map(item=>{
      divItem=document.createElement(`div`)
      divItem.innerHTML=`
  <div class="card" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top" alt="...">
  <div class="card-body">
  
  <p class="card-text"><b>${item.id}</b></p>
  <h5 class="card-title">${item.name}</h5>
  <p class="card-text"><b>${item.status}</b></p>
  <p class="card-text"><b>${item.species}</b></p>
  <p class="card-text"><b>${item.gender}</b></p>
  <p class="card-text"><b>${item.location.name}</b></p>
  <p class="card-text"><b>${item.origin.name}</b></p>
</div>
</div>
`
  
  divRes.appendChild(divItem);
});
}
apiRick(1);
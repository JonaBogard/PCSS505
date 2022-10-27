const apiRick=async(pag)=>{
  let url="https://rickandmortyapi.com/api/location?page="+pag;
  const api= await fetch(url);
  const data=await api.json();
  console.log(data);
  divRes=document.querySelector("#res")
  divRes.innerHTML=""
  data.results.map(item=>{
      divItem=document.createElement(`div`)
      divItem.innerHTML=`
  <div class="card" style="width: 18rem;">
  <div class="card-body">
  <p class="card-text"><b>${item.name}</b></p>
  <p class="card-text"><b>${item.id}</b></p>
  <p class="card-text"><b>${item.type}</b></p>
  <h5 class="card-title">${item.dimension}</h5>
</div>
</div>
`
  
  divRes.appendChild(divItem);
});
}
apiRick(1);
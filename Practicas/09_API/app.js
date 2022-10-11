var divRes=document.querySelector("#Res");
const User=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/users")
    const json=await res.json();
console.log(json)
json.map(user=>{
    let divUser=document.createElement("div");
    divUser.className="user";
    divUser.innerHTML=`<p><b>ID</b>${user.id}</p><br>
    <p><b>Nombre:</b>${user.name}</p><br>
    <p><b>UserName</b>${user.username}</p><br>
    <p><b>Email:</b>${user.email}</p><br>
    <p><b>Calle:</b>${user.address.street}</p><br>
    <p><b>Departamento:</b>${user.address.suite}</p><br>
    <p><b>Ciudad:</b>${user.address.city}</p><br>
    <p><b>Codigo Postal:</b>${user.address.zipcode}</p><br>
    <p><b>Latitud:</b>${user.address.geo.lat}</p><br>
    <p><b>Altitud:</b>${user.address.geo.lng}</p><br>
    `;
    divRes.appendChild(divUser);
});
}
const Dele=async()=>{
    divRes.innerHTML="";
}
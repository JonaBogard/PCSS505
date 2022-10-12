var divRes=document.querySelector("#Res");
var date=document.querySelector("#usID");
const User=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/photos")
    const json=await res.json();
console.log(json)
var k=0;
json.map(user=>{
    if(k==10){
        return
    }
    let divUser=document.createElement("div");
    divUser.className="user";
    divUser.innerHTML=`
    <p><b></b>${user.albumId}</p><br>
    <p><b></b>${user.id}</p><br>
    <p><b></b>${user.title}</p><br>
    <b></b><img src="${user.url}"><br>

    `;
    divRes.appendChild(divUser);
    k++;
});
}
const Dele=async()=>{
    divRes.innerHTML="";
}
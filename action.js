var no="0123456789";
var al="abcdefghijklmnopqrstuvwxyz";
var cp="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sy="!@#$%&/*";
var all=no+al+cp+sy;
var plength=6;
var pas="";
var int=document.getElementById('password');
var btnn=document.getElementById('btn');
btnn.addEventListener('click',()=>{
    pas=pas+al[Math.floor(Math.random() * al.length)];
    pas=pas+cp[Math.floor(Math.random() * cp.length)];
    pas=pas+sy[Math.floor(Math.random() * sy.length)]; 
    pas=pas+no[Math.floor(Math.random() * no.length)];
    while(plength>pas.length)
        {
            pas=pas+all[Math.floor(Math.random() * all.length)]
        }
        int.value=pas;
        pas=""
})
document.getElementById('cpb').addEventListener('click',()=>{
    int.select()
    document.execCommand('copy')
    alert("password copied");
})


function ma0(){
    let co10=document.getElementById('tota-counter');
    let co=document.getElementById('total-counter');
    let co2=document.getElementById('jobs').children.length;
    co.innerText=co2;
    co10.innerText=co2;

    let co3=document.getElementById('interview-counter');
    let co4=document.getElementById('d1').children.length;
co3.innerText=co4;

    let co5=document.getElementById('rejected-counter');
    let co6=document.getElementById('d2').children.length;
co5.innerText=co6;

let co7=document.getElementById('xx');
if(co4>=1){
    co7.classList.add('hidden')
}

let co8=document.getElementById('xxx');
if(co6>=1){
    co8.classList.add('hidden')
}

let j1 = document.getElementById('j1');

let sec1 = document.getElementById('sec1');
let sec2 = document.getElementById('sec2');
let sec3 = document.getElementById('sec3');

if(!sec2.classList.contains('hidden')){
    j1.innerHTML = `${interviewList.length} of`;
}
else if(!sec3.classList.contains('hidden')){
    j1.innerHTML = `${rejectList.length} of`;
}
else{
    j1.innerHTML = '';
}
}
ma0()


let b1=document.getElementById('all');
let b2=document.getElementById('interview');
let b3=document.getElementById('rejected');


function ma1(id, id2){
b1.classList.remove('bg-blue-600', 'text-white');
b2.classList.remove('bg-blue-600', 'text-white');
b3.classList.remove('bg-blue-600', 'text-white');

let b4=document.getElementById(id2);
b4.classList.add('bg-blue-600', 'text-white')


let sec1=document.getElementById('sec1');
let se1=sec1.classList.add('hidden');
let  sec2=document.getElementById('sec2');
let se2=sec2.classList.add('hidden');
let  sec3=document.getElementById('sec3');
let se3=sec3.classList.add('hidden');


let final=document.getElementById(id);
let ff=final.classList.remove('hidden');


ma0()
}




let interviewList=[];
let rejectList=[];
let no2=document.getElementById('sec2')


document.getElementById('mainContainer').addEventListener('click',
    function(act){
        if(act.target.classList.contains('p5')){
            let act1=act.target.parentNode.parentNode;
        let act2=act1.querySelector('.p1').innerText;
        let act3=act1.querySelector('.p2').innerText;
        let act4=act1.querySelector('.p3').innerText;
        let act5=act1.querySelector('.p4').innerText;
        
        let act9=act1.querySelector('.p8').innerHTML=`<div class="badge badge-success">INTERVIEW</div>`;
        
        let act10={
            act2,
            act3,
            act4,
            act5,
            act9
        }

let interview=interviewList.find(item => item.act2==act10.act2);
if(!interview){
    interviewList.push(act10);
}

rejectList= rejectList.filter(item=> item.act2 != act10.act2);


render1()
render2()
ma0()
        }
       else if(act.target.classList.contains('p6')){
            let act1=act.target.parentNode.parentNode;
        let act2=act1.querySelector('.p1').innerText;
        let act3=act1.querySelector('.p2').innerText;
        let act4=act1.querySelector('.p3').innerText;
        let act5=act1.querySelector('.p4').innerText;
        
        let act11=act1.querySelector('.p8').innerHTML=`<div class="badge badge-error">REJECTED</div>`;
        
        let act10={
            act2,
            act3,
            act4,
            act5,
            act11
        }

let interview=rejectList.find(item => item.act2==act10.act2);
if(!interview){
    rejectList.push(act10);
}

interviewList= interviewList.filter(item=> item.act2 != act10.act2);

render1()
render2()
ma0()
        }
       else if(act.target.closest('.p7')){

    let card = act.target.closest('.flex');

    let title = card.querySelector('.p1').innerText;

    interviewList = interviewList.filter(item => item.act2 !== title);
    rejectList = rejectList.filter(item => item.act2 !== title);

    card.remove();

    render1();
    render2();
    ma0();
}
}
    
)


function render1(){
    let f1=document.getElementById('d1');
    f1.innerHTML=``;

    for(let inter of interviewList){
        let div=document.createElement('div');
        div.innerHTML=`
        <div id="job1" class="flex justify-between p-[15px]">
    <div>
        <h2 class="p1 text-[18px] font-semibold">${inter.act2}</h2>
        <p class="p2">${inter.act3}</p>
        <br>
        <p class="p3">${inter.act4}</p>
        <br>
        <span class="p8" id="empty1">${inter.act9}</span>
        <p class="p4">${inter.act5}</p>
<br>
        <button  id="int-but1" class="p5 btn btn-outline btn-success mr-[8px]">INTERVIEW</button>
<button  id="rej-but1" class="p6 btn btn-outline btn-error">REJECTED</button>
    </div>
    <div><button onclick="ma2('box1')" id="box1" class="p7 rounded-full hover:opacity-[0.7] active:opacity-[0.5]"><img class="w-[30px]" src="Trash.svg" alt=""></button></div>
</div>
        `

        f1.appendChild(div);
   
}


}


function render2(){
    let f1=document.getElementById('d2');
    f1.innerHTML=``;

    for(let reject of rejectList){
        let div=document.createElement('div');
        div.innerHTML=`
        <div id="job1" class="flex justify-between p-[15px]">
    <div>
        <h2 class="p1 text-[18px] font-semibold">${reject.act2}</h2>
        <p class="p2">${reject.act3}</p>
        <br>
        <p class="p3">${reject.act4}</p>
        <br>
        <span class="p8" id="empty1">${reject.act11}</span>
        <p class="p4">${reject.act5}</p>
<br>
        <button  id="int-but1" class="p5 btn btn-outline btn-success mr-[8px]">INTERVIEW</button>
<button  id="rej-but1" class="p6 btn btn-outline btn-error">REJECTED</button>
    </div>
    <div><button onclick="ma2('box1')" id="box1" class="p7 rounded-full hover:opacity-[0.7] active:opacity-[0.5]"><img class="w-[30px]" src="Trash.svg" alt=""></button></div>
</div>
        `

        f1.appendChild(div);
   
}


}

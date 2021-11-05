 
 // questions
import questions from './que.js'

//code
 var queIdx=0;
 var correctGuess=0,incorrectGuess=0;
 const quePanel=document.querySelector('.question');
 const optionsPanel = document.querySelector(".optionfield");
 const nextbtn=document.querySelector("#next");
 const prevbtn=document.querySelector("#prev");  
 const submitbtn=document.querySelector('#submit');
 
 window.onload=update();
 optionsPanel.addEventListener('click',validateAns);

 function update(){
    let que=questions["questions"][queIdx]["question"];
    let ans=questions["questions"][queIdx]["answers"];
    quePanel.innerHTML=que;
    let code="<ul>";
    let correctans=questions["questions"][queIdx]["answers"][questions["questions"][queIdx]["correctIndex"]]; 

    for(let i=0;i<4;i++)
    {
       if(questions["questions"][queIdx]["visited"][i]=="true")
         {
            if(correctans==ans[i])
                code+="<li class='correctopt'>"+ans[i];
            else code+="<li class='incorrectopt'>"+ans[i];
         }
         else code+="<li>"+ans[i];
   }
    optionsPanel.innerHTML=code;

    if(queIdx==questions['questions'].length-1)
    {

    }

 }
 function validateAns(e){
   let correctans=questions["questions"][queIdx]["answers"][questions["questions"][queIdx]["correctIndex"]]; 
   
   if(e.target.tagName=="LI")
   {
      for(let i=0;i<4;i++){
         if(questions["questions"][queIdx]['answers'][i]==e.target.textContent)
            questions['questions'][queIdx]['visited'][i]='true';
   }
       if(e.target.textContent!=correctans)
      {
         e.target.classList.add('incorrectopt');
         incorrectGuess++;
      }   
      else {
         correctGuess++;
         e.target.classList.add('correctopt');
      }
   }  
 
   //let correctans=questions["questions"][queIdx]["answers"][questions["questions"][queIdx]["correctIndex"]]; 
   
   // if(e.target.tagName=="LI")
   // {
   //    for(let i=0;i<4;i++){
   //       if(questions["questions"][queIdx]['answers'][i]==e.target.textContent)
   //          questions['questions'][queIdx]['visited'][i]='true';
   // }
   //     if(e.target.textContent!=correctans)
   //    {
   //       // console.log(questions['questions'][queIdx]['visited'])
   //       e.target.classList.add('incorrectopt');
   //       incorrectGuess++;         
   //    }   
   //    else {
   //       totalpoints++;
   //       e.target.classList.add('correctopt');
   //    }
   // }

 }
 nextbtn.addEventListener('click',nextquestion);
 prevbtn.addEventListener('click',previousquestion);
 submitbtn.addEventListener('mouseover',(e)=>{
    //nextbtn.rem
    document.querySelector('body').classList.add('blur')
 })
 function nextquestion()
 {
    queIdx=(queIdx+1)%questions["questions"].length;
    update();
 }
 function previousquestion()
 {
    queIdx=(queIdx-1);
    if(queIdx<0){
       window.alert("This is the First question !!!")
       queIdx=0;
    }
    else
    update();
 }

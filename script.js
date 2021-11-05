 
 // questions
 var questions={
    "questions":[
       {
          "question":"What is the scientific name of a butterfly?",
          "answers":[
             "Apis",
             "Coleoptera",
             "Formicidae",
             "Rhopalocera"
          ],
          "correctIndex":3,
          "visited":["false","false","false","false"]
       },
       {
          "question":"How hot is the surface of the sun?",
          "answers":[
             "1,233 K",
             "5,778 K",
             "12,130 K",
             "101,300 K"
          ],
          "correctIndex":1,
          "visited":["false","false","false","false"]
       },
       {
          "question":"Who are the actors in The Internship?",
          "answers":[
             "Ben Stiller, Jonah Hill",
             "Courteney Cox, Matt LeBlanc",
             "Kaley Cuoco, Jim Parsons",
             "Vince Vaughn, Owen Wilson"
          ],
          "correctIndex":3,
          "visited":["false","false","false","false"]
       },
       {
          "question":"What is the capital of Spain?",
          "answers":[
             "Berlin",
             "Buenos Aires",
             "Madrid",
             "San Juan"
          ],
          "correctIndex":2,
          "visited":["false","false","false","false"]
       },
       {
          "question":"What are the school colors of the University of Texas at Austin?",
          "answers":[
             "Black, Red",
             "Blue, Orange",
             "White, Burnt Orange",
             "White, Old gold, Gold"
          ],
          "correctIndex":2,
          "visited":["false","false","false","false"]
       },
       {
          "question":"What is 70 degrees Fahrenheit in Celsius?",
          "answers":[
             "18.8889",
             "20",
             "21.1111",
             "158"
          ],
          "correctIndex":2,
          "visited":["false","false","false","false"]
       },
       {
          "question":"When was Mahatma Gandhi born?",
          "answers":[
             "October 2, 1869",
             "December 15, 1872",
             "July 18, 1918",
             "January 15, 1929"
          ],
          "correctIndex":0,
          "visited":["false","false","false","false"]
       },
       {
          "question":"How far is the moon from Earth?",
          "answers":[
             "7,918 miles (12,742 km)",
             "86,881 miles (139,822 km)",
             "238,400 miles (384,400 km)",
             "35,980,000 miles (57,910,000 km)"
          ],
          "correctIndex":2,
          "visited":["false","false","false","false"]
       },
       {
          "question":"What is 65 times 52?",
          "answers":[
             "117",
             "3120",
             "3380",
             "3520"
          ],
          "correctIndex":2,
          "visited":["false","false","false","false"]
       },
       {
          "question":"How tall is Mount Everest?",
          "answers":[
             "6,683 ft (2,037 m)",
             "7,918 ft (2,413 m)",
             "19,341 ft (5,895 m)",
             "29,029 ft (8,847 m)"
          ],
          "correctIndex":3,
          "visited":["false","false","false","false"]
       },
       {
          "question":"When did The Avengers come out?",
          "answers":[
             "May 2, 2008",
             "May 4, 2012",
             "May 3, 2013",
             "April 4, 2014"
          ],
          "correctIndex":1,
          "visited":["false","false","false","false"]
       },
       {
          "question":"What is 48,879 in hexidecimal?",
          "answers":[
             "0x18C1",
             "0xBEEF",
             "0xDEAD",
             "0x12D591"
          ],
          "correctIndex":1,
          "visited":["false","false","false","false"]
       }
    ]
 }


//code
 var queIdx=0;
 var  points=0;
 const quePanel=document.querySelector('.question');
 const optionsPanel = document.querySelector(".optionfield");
 const nextbtn=document.querySelector("#next");
 const prevbtn=document.querySelector("#prev");  

 window.onload=update();
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
    
    optionsPanel.addEventListener('click',(e)=>{
      let correctans=questions["questions"][queIdx]["answers"][questions["questions"][queIdx]["correctIndex"]]; 
      
      if(e.target.tagName=="LI")
      {
         for(let i=0;i<4;i++){
            if(questions["questions"][queIdx]['answers'][i]==e.target.textContent)
               questions['questions'][queIdx]['visited'][i]='true';
      }
          if(e.target.textContent!=correctans)
         {
            console.log(questions['questions'][queIdx]['visited'])
            e.target.classList.add('incorrectopt');
            
         }   
         else {
            e.target.classList.add('correctopt');
            points++;
            console.log(points)
         }
      }  
    });

 }
 
 nextbtn.addEventListener('click',nextquestion);
 prevbtn.addEventListener('click',previousquestion);

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

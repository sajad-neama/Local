let myButton = document.getElementById ("33");
let myInput = document.getElementById("22");
let myCont = document.getElementById ("44")
let aRR = [];

window.onload = function (){
    myInput.focus();
}
function myFunction (){
   
    myButton.addEventListener ("click" , function(e){
        if (myInput.value.length >= 3 ){

            let myElemnt= document.createElement ("div");
            let mySunBut=  document.createElement ("button");
            let myP = document.createElement ("p");
            let valueTitle = myElemnt.title = `${myInput.value}`
            // finsh

            //    append element to div contianer (tasks)
            myCont.appendChild(myElemnt);

            //    append content of div 
            myElemnt.appendChild(myP)
            myElemnt.appendChild(mySunBut);
            myP.append(`${valueTitle}`)
            mySunBut.append("Delete")

            // create Opjct for add to localStorge 
            aRR.push(`${valueTitle}`)
            window.localStorage.setItem("Text" ,`${JSON.stringify(aRR)} `);
           
            // remov div when we wint 
            mySunBut.addEventListener("click" , function(e){
                myElemnt.remove ();
                let NL= JSON.parse(window.localStorage.Text)  
                NL.shift(NL.indexOf(valueTitle))
                aRR.shift(NL.indexOf(valueTitle))
                window.localStorage.setItem("Text" ,`${JSON.stringify(NL)} `);  })

           myInput.value =""
        }else {
            e.target.removeEventListener
        }
    })
}

myFunction()

if (window.localStorage !== ""){
    
    JSON.parse(window.localStorage.Text).forEach(ele => {
        // let myT =JSON.parse(window.localStorage.Text)
        let myElemnt= document.createElement ("div");
        let mySunBut=  document.createElement ("button");
        mySunBut.append("Delete");
        let myP = document.createElement ("p");
        let valueTitle= myElemnt.title = `${ele}`;
        
        
        // append element to div contianer (tasks)
        myCont.appendChild(myElemnt);
         //    append content of div 
         myElemnt.appendChild(myP);
         myElemnt.appendChild(mySunBut);
         myP.append(`${ele}`);       
         
         // remov div when we wint 
         mySunBut.addEventListener("click" , function(e){
            myElemnt.remove ();
            console.log ((window.localStorage.Text))
            let NL= JSON.parse(window.localStorage.Text)  
            NL.shift(NL.indexOf(valueTitle))
            aRR.shift(NL.indexOf(valueTitle))
            window.localStorage.setItem("Text" ,`${JSON.stringify(NL)} `);  })
            
            myInput.value =""    
        });
    }
    
    (JSON.parse(window.localStorage.getItem("Text"))).forEach(element => {
        aRR.push(element)
    });
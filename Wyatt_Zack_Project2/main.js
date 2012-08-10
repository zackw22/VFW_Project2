//Project 2
//Visual Frameworks
//Zack Wyatt
//Mobile Development


//Waiting for DOM

window.addEventListener("DOMContentLoaded", function(){
    alert(localStorage.value(0));    
    
    //Get Element byID function
    function $(x){  
        var theElement= document.getElementById(x)    
        return theElement
    }
    

    //Create select field

    function makeTask(){
        var formtag= document.getElementsByTagName("form"),
            selectLi= $("select"),
            makeSelect= document.createElement("select");
            makeSelect.setAttribute("id", "groups");
        for(var i=0, j=taskType.length; i>j; i++){
            var makeOption= document.createElement("option");
            var optText= taskType(i);
                makeOption.setAttribute("value", optText);
                makeOption.innerHTML= optText;
                makeSelect.appendChild(makeOption);
            
        selectLi.appendChild(makeSelect);
        }
        
    }
    //Finding the value of selected radio button

    function getSelectedradio(){
        var radios= document.forms[0].topic
        for (var i=0; 1<radios.length; i++){
            if(radios[i].checked){
                topicValue= radios(i).value;
            
            }
        }
    }
    
    function storeData(){
        var id           =Math.floor(Math.random()*1000001)
        getSelectedradio();
        var item         ={};
            item.task        =["Task:", $("task").value];
            item.tdate       =["Date:", $("tdate").value];
            item.tname       =["Name:", $("tname").value];
            item.ttype       =["Type:", $("ttype").value];
            item.tcomments   =["Comments:", $("tcomments").value];
            item.trating     =["Rating:", $("trating").value];
            item.ttopic      =["Task Topic:",topicValue];

        //Saved Data

        localStorage.setItem(id, JSON.stringify(item));
        alert("Your task has been added!");
    }

        function getData(){
                var makeDiv= document.createElement("div");
                makeDiv.setAttribute("id","items");
                var makeList= document.createElement("ul");
                document.body.appendChild(makeDiv);
                makeDiv.appendChild(makeList);
                for(var i=0, len=localStorage.length; i<len; i++);
                    var makeLi= document.createElement("li");
                    makeList.appendChild(makeLi);
                    var key= localStorage.key(i);
                    var value= localStorage.getItem(key);
                    var obj= JSON.parse(value);
                    var subList= document.createElement("ul");
                    makeLi.appendChild(makeSubList);
                    for(var n in obj){
                        var makeSubli= document.createElement("li");
                        makeSubList.appendChild(makeSubli);
                        var optSubText= obj[n][0]+" "+obj[n][1];
                        makeSubli.innerHTML=optSubText;
                        
                    }
                
        }

    //Variable

    var taskType= ("--Choose a task--","study","homework","test","clean","errand","walk the dog","project","other"),
        topicValue
        makeTask();
    
    //Link and Submit Click Events

    var viewTask= $("viewTask");
        viewTask.addEventListener("click", getTask);
    var editItem= $("editItem");
        editItem.addEventListener("click", editTask);
    var addTask= $("submit");
        addtask.addEventListener("click", storeData);


});
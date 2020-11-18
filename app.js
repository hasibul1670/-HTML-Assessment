// sidebar Js Code //////
var date =  document.getElementById("date");
    date.onclick = mydate;
function mydate (){
if(date.value=="+"){
    date.value="-"
        }
        else{
            date.value="+"
        }
                document.getElementById('post').classList.toggle("post");
}


var  job =  document.getElementById("job-plus");
    job.onclick = Myjob;
function Myjob (){
if(job.value=="+"){
    job.value="-"
        }
        else{
            job.value="+"
        }
                document.getElementById('job-type').classList.toggle("job-type");
}

var  catagory =  document.getElementById("catagory-plus");
catagory.onclick = Mycatagory;
function Mycatagory (){
if(catagory.value=="+"){
    catagory.value="-"
        }
        else{
            catagory.value="+"
        }
                document.getElementById('catagory').classList.toggle("catagory");
}

var  state =  document.getElementById("state-plus");
state.onclick = Mystate;
function Mystate (){
if(state.value=="+"){
    state.value="-"
        }
        else{
            state.value="+"
        }
                document.getElementById('state').classList.toggle("state");
}

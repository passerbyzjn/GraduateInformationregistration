/*app.js*/
  var serialnumber=0;
  //星级评分
  window.onload = function (){
    var grades = ["1分","2分","3分","4分","5分","6分","7分","8分","9分","10分"]
    var stars=document.querySelectorAll('.stars span');
    var info=document.querySelector('.info');
    var active=-1;

    for(var i=0;i<stars.length;i++){
      stars[i].index=i;
      stars[i].onmouseover=function(){setStar(this.index);};
      stars[i].onmouseout=function(){setStar(active);};
    stars[i].onclick=setClick;
    }

    function setStar(nub){
      var name='';
      name= nub<5?'show':'show2';
      for(var i=0;i<stars.length;i++){
        stars[i].className= i<=nub?name:'';
      }
      /*info.style.display= nub<0? 'none':'block';*/
      info.innerHTML=grades[nub];
      score = info.innerHTML;
  }

    function setClick(){
      active=this.index;
    }
  }

  //星级评分
  function sbumitTable(){
    serialnumber=serialnumber+1;
    var name=document.getElementById("myname").value;
    var sex1=document.getElementById("main").sex;
    for(var i=0;i<sex1.length;i++){
      if (sex1[i].checked){
        sex=sex1[i].value;
      }
    }
    var jobvalue=0;
    var jobchecked=document.getElementById("main").job;
    for (var i=0; i<4; i++){
      if (jobchecked[i].checked){
      jobvalue=jobchecked[i].value;
      }
    }
    if (jobvalue=="other") {
      jobvalue="other:"+ document.getElementById("others").value;
    }
    var studentid=document.getElementById("student-id").value;
    var tel=document.getElementById("phone-number").value;
    var email=document.getElementById("mail").value;
    var message=document.getElementById("message-board").value;
    var newTr=table.insertRow();
    var newTd0=newTr.insertCell();
    var newTd1=newTr.insertCell();
    var newTd2=newTr.insertCell();
    var newTd3=newTr.insertCell();
    var newTd4=newTr.insertCell();
    var newTd5=newTr.insertCell();
    var newTd6=newTr.insertCell();
    var newTd7=newTr.insertCell();
    var newTd8=newTr.insertCell();
    newTd0.innerText=serialnumber;
    newTd1.innerText=name;
    newTd2.innerText=sex;
    newTd3.innerText=studentid;
    newTd4.innerText=tel;
    newTd5.innerText=email;
    newTd6.innerText=jobvalue;
    newTd7.innerText=score;
    newTd8.innerText=message;
    document.getElementById("main").reset();
    jobchecked=0;
    name=0;
    sex=0;
    studentid=0;
    tel=0;
    email=0;
    jobvalue=0;
    message=0;
  }


/*---------------------DISPLAY MODULE--------------------*/

 function  display(str)
    {
      var oth = document.getElementById(str).style.visibility;
      if ( oth == "visible")
      {
        document.getElementById(str).style.visibility = "hidden";
      }
      else{
        document.getElementById(str).style.visibility = "visible";
      }
    }

    /*--------------------------------ONCLICK COMMANDS--------------------------------*/

    var men = document.getElementById('more').onclick = function(){
      display('others');
    }
    
  

  
    var jb = document.getElementById('bt1').onclick = function(){
      display('form');
    }
  
  
  
    var jb2 = document.getElementById('bt2').onclick = function(){
      display('complete');
    }
  
  
    var jb2 = document.getElementById('history').onclick = function(){
      display('hist');
    }

/*---------------------------------------VARIABLE DESCRIPTION-------------------------------- */
    var job_name2 = new Array();
    var job_detail2 = new Array();
    var job_deadline2 = new Array();
    var job_priority2 = new Array();

    var job_name3 = new Array();
    var job_detail3 = new Array();
    var job_deadline3 = new Array();
    var job_priority3 = new Array();

    var job_name4 = new Array();
    var job_detail4 = new Array();
    var job_deadline4 = new Array();
    var job_priority4 = new Array();

    var final_prio,final_sjf,n=0;
    var val1,val2;

    var wt=new Array(),tat=new Array(),p=new Array(),i,j,pos,total=0,temp;
    var avg_wt,avg_tat,n=0,nn=0;

    var c,cc,time,hrs, mins,tt,x,y,z;

/*---------------------SWAPPING--------------------- */
    var val1,val2,temp;
    function swap(val1, val2)
    {
      temp=val1;
      val1=val2;
      val2=temp;	
    }       
   
/*---------------------------------------SHORTEST JOB FIRST SCHEDULING CLASS---------------------------------------*/
class job_scheduling{

    constructor(n){
      this.n=n;
    }

    priority( n, job_deadline2,job_priority2)
  {
  
      
      for(i=0;i<n;i++)
      {
          p[i]=i+1;         
      }
  
      for(i=0;i<n;i++)
      {
          pos=i;
          for(j=i+1;j<n;j++)
          {
              if(job_priority2[j]<job_priority2[pos])
                  pos=j;
          }
  
          temp=job_priority2[i];
          job_priority2[i]=job_priority2[pos];
          job_priority2[pos]=temp;
  
          temp=job_deadline2[i];
          job_deadline2[i]=job_deadline2[pos];
          job_deadline2[pos]=temp;
  
          temp=p[i];
          p[i]=p[pos];
          p[pos]=temp;
      }
    }
}

              /*-----------------------------------UI WRITING CLASS-----------------------------------------*/
class UI{
    writing()
    {
      document.getElementById('table-body').innerHTML="";
      
        for(c=0;c<job_name4.length;c++){

        $("#table2 tbody").append("<tr>" + 
        "<td>"+job_name4[c]+"</td>" +
        "<td>"+job_detail4[c]+"</td>" +
        "<td>"+job_deadline4[c]+"</td>" +
        "</tr>");
        }
        if(job_name4.length > 0)
        {
              time = new Date();
              hrs = time.getHours();
              mins = time.getMinutes();
              tt = job_deadline4[0].split(":");

              if (tt[0] < hrs)
              {
                x = 24 - parseInt(hrs) + parseInt(tt[0]);
              }
              else{
                x = parseInt(tt[0]) - parseInt(hrs);
              }
              if ( tt[1] >= mins)
              {
                y = parseInt(tt[1]) - parseInt(mins);
              }
              else{
                y = 60 - parseInt(mins) + parseInt(tt[1]);
                x = x - 1;
              }

              if (y < 10)
              {
                y = '0'+y;
              }
              
              z = x+':'+y;
            
              document.getElementById('job_name').innerHTML = job_name4[0];
              document.getElementById('priority').innerHTML = z+"\n";
      }
      else{
        document.getElementById('job_name').innerHTML = " ";
        document.getElementById('priority').innerHTML = " ";
      }
    }
}

let obj2 = new UI();
/*-------------------------------------------DRIVER FUNCTION-----------------------------------------------*/
    function setjob() {


      /* ------------------------CREATING HISTORY OF JOBS-------------------------*/

        x = document.getElementById("form");
        $("#table1 tbody").append("<tr>" + 
            "<td>"+x.elements[0].value+"</td>" +
            "<td>"+x.elements[1].value+"</td>" +
            "<td>"+x.elements[2].value+"</td>" +
            "</tr>");
            nn=nn+1;
      /*--------------------------------------------------------------------------*/

    
      /* ARRAY FOR PRIORITY SCHEDULING */
      job_name2.push(x.elements[0].value);
      job_detail2.push(x.elements[1].value);
      job_deadline2.push(x.elements[2].value);
      job_priority2.push(x.elements[3].value);

      /* RAW ARRAY*/
      job_name3.push(x.elements[0].value);
      job_detail3.push(x.elements[1].value);
      job_deadline3.push(x.elements[2].value);
      job_priority3.push(x.elements[3].value);


      /*--------------------------------CLEARING THE JOB FORM---------------------------- */

      document.getElementById('inp1').value=" ";
      document.getElementById('inp2').value=" ";
      document.getElementById('inp3').value=" ";
      document.getElementById('detail').value=" ";


      let obj = new job_scheduling(nn);
      obj.priority(nn,job_deadline2,job_priority2);

      job_deadline4.length=0;
      job_detail4.length=0;
      job_name4.length=0;
      job_priority4.length=0;

      /*------------------------------------------CREATING THE FINAL ARRAY WITH SCHEDULED DATA--------------------------------------- */
      for (c=0;c<nn;c++)
      {
        for(cc=0;cc<nn;cc++)
        {
        if (job_deadline2[c] == job_deadline3[cc]){
          job_name4[c] = job_name2[cc];
          job_detail4[c] = job_detail2[cc];
          job_deadline4[c] = job_deadline2[c];
          job_priority4[c] = job_priority2[cc];
          break;

        }
      }
    }
    obj2.writing();
  }

    
    
    
  /*------------------------------------------------------TASK COMPLETION FUNCTION----------------------------------------------------- */
    
    function update()
    {
  $("#table3 tbody").append("<tr>" + 
    "<td>"+job_name4[0]+"</td>" +
    "<td>"+job_detail4[0]+"</td>" +
    "<td>"+job_deadline4[0]+"</td>" +
    "</tr>");
      
    job_name4.shift();
    job_detail4.shift();
    job_deadline4.shift();
    job_priority4.shift();
    n=job_deadline4.length;
    obj2.writing();
    }

/*---------------------------------------END OF CODE | THANK YOU*/
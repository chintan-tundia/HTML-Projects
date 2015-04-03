// JavaScript Document

//Contact us form
function blankfield(i,err,msg)
{
	
	if(i.value.length<=0)
	{
		err.innerHTML="<font color='red' size='+1'>&times;</font> <font color='white' size='+1' face='Trebuchet'>"+msg+"</font>";
		i.focus();
		return false;
	}
	else
	{
		err.innerHTML="";
		return true;
	}
}
function emailid(i,err,msg)
{
	if(!(i.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)))
	{
		err.innerHTML="<font color='red' size='+1'>&times;</font> <font color='white' size='+1' face='Trebuchet'>"+msg+"</font>";
		i.focus();
		return false;
	}
	else
	{
		err.innerHTML="";
		return true;
	}
}
function textonly(i,err,msg)
{
	if(!(i.value.match(/^[a-zA-Z]+$/)))
	{
		err.innerHTML="<font color='red' size='+1'>&times;</font> <font color='white' size='+1' face='Trebuchet'>"+msg+"</font>";
		i.focus();
		return false;
	}
	else
	{
		err.innerHTML="";
		return true;
	}
}

function clean()
{

	for(i=1;i<=4;i++)
	{
		temp="e"+i;
		document.getElementById(temp).innerHTML="";
	}
	
}
function check()
{
	nm=document.getElementById("name");
	eid=document.getElementById("eid");
	subj=document.getElementById("subject");
	message=document.getElementById("message");
	err1=document.getElementById("e1");
	err2=document.getElementById("e2");
	err3=document.getElementById("e3");
	err4=document.getElementById("e4");
	flag=blankfield(nm,err1,"Enter your name.") && textonly(nm,err1,"Enter text only") 
	flag=flag && blankfield(eid,err2,"Enter your email id.") && emailid(eid,err2,"Enter valid email id.");
	flag=flag && blankfield(subj,err3,"Enter subject.");
	flag=flag && blankfield(message,err4,"Enter your message.");
	return flag;
}
/*---BuildPC---*/
function calc()
{
	ans=0;
	for(i=1;i<13;i++)
	{
		ref=document.getElementsByTagName("table")[0].getElementsByTagName("tr")[i].getElementsByTagName("td")[3];
		ref.innerHTML=document.getElementById("s"+i).value;
		ans=eval(ans+"+"+document.getElementById("s"+i).value);
	}
	return ans;
	
}
function selected()
{
		document.getElementById("total").style.visibility="visible";
		document.getElementById("tot").innerHTML=calc();
}
function checkselection(obj,msg)
{

		flag=0;
		for(j=0;j<obj.length;j++)
		{
			ref=obj.getElementsByTagName("option")[j];
			if(ref.selected==true)
			{
				if(ref.text != "Select One")
				{
					flag=1;
					break;	
				}
			}
		}
		if(flag!=1)
		{
			obj.focus();
			alert(msg);
			return false;
		}
		return true;

		
		
}
function control()
{
	window.location="#";
	flag=1;
	for(i=1;i<10;i++)
	{		
		obj=document.getElementById("s"+i);
		component=document.getElementsByTagName("table")[0].getElementsByTagName("tr")[i].getElementsByTagName("td")[1];
		str="Please select "+component.innerHTML.replace(/(\r\n|\n|\r)/gm,"");;
		flag=flag && checkselection(obj,str);
	}
	if(flag==1)
	{
		report();
	}
	
}
function report()
{

	document.getElementById("total").style.visibility="hidden";
		str="<center><font color='white' size='+2' style='text-decoration:underline;'>Invoice</font></center><br><table border='0'>"
		str+="<tr><td width='10px'><font color='#FFFF00'>Sr.No</font></td><td width='200px'><font color='#FFFF00'>Item</font></td><td width='300px'><font color='#FFFF00'>Selection</font></td><td width='50px'><font color='#FFFF00'>Price</font></td>";
		str+="<tr><td colspan='4'></td></tr>";
		count=0;
	for(i=1;i<13;i++)
	{
				
		obj=document.getElementById("s"+i);
		for(j=0;j<obj.length;j++)
		{
			ref=obj.getElementsByTagName("option")[j];
			if(ref.selected==true)
			{
				if(ref.text != "Select One")
				{
					count++;
					str+="<tr><td>"+count+"</td>";
					component=document.getElementsByTagName("table")[0].getElementsByTagName("tr")[i].getElementsByTagName("td")[1];
					str+="<td>"+component.innerHTML+"</td>";
					str+="<td>"+ref.text+"</td><td>"+ref.value+"</td>";		
					
			
				}
			
			}
		}
		
	}
	str=str+"<tr><td colspan='3'><center><font color='#FFFF00'>Total</font></center></td><td><font style='text-decoration:overline;' color='#FFFF00'>"+document.getElementById('tot').innerHTML+"</font></td></tr></table>";
	str=str+"<br><center><input type='submit' value='OK' onclick='pressok();'>&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='Cancel' onclick='presscancel();'></center>"
	document.getElementById('aboutus_content').innerHTML=str;	
}
function pressok()
{
	window.open('index.html','_self');
}
function presscancel()
{
	window.open('buildpc.html','_self');
}
/*---Categories---*/

function changeitem(ref)
{
	
	document.getElementById("zoomitem").style.backgroundImage=ref;
	document.getElementById("itemcont").innerHTML="fas";
}
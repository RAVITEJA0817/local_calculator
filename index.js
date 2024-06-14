document.getElementById("btn").addEventListener("click",myfunct);
document.getElementById("ref").addEventListener("click",myfunct1);
function myfunct(){
    var amount = Number(document.getElementById("amt").value)
    var interest = document.getElementById("itr").value
    var Byear = document.getElementById("byr").value
    var Bmonth = document.getElementById("bmt").value
    var Bday = document.getElementById("bdy").value
    
    var Ryear = document.getElementById("Ryr").value
    var Rmonth = document.getElementById("Rmt").value
    var Rday = document.getElementById("Rdy").value
    

    var Tyear = Ryear - Byear
    var Tmonth = Rmonth - Bmonth
    var Tday = Rday - Bday

    var res1 = amount / 100
    var res2 = res1 * interest
    var dayInterest = res2/30
    var res3 = Tday * dayInterest


    var result1 = (Tyear * 12)
    var result2 = ((result1 + Tmonth)*res2 + res3)
    var finalResult = result2+amount;

    var par1 = document.getElementById("p1")
    par1.innerText += "Your Interest Is :" + " "+result2;

    var par2 = document.getElementById("p2")
    par2.innerText += "Your Borrowed Amount Is :" +" "+amount;

    
    var par3 = document.getElementById("p3")
    par3.innerText+= "Your total amount is :"+finalResult;
    }








function myfunct1(){
    window.location.reload();
}
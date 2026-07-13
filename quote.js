function toggleFields(){

    let premise=document.getElementById("premiseType").value;

    let residential=document.getElementById("residentialFields");

    let commercial=document.getElementById("commercialFields");

    if(premise==="Residential"){

        residential.style.display="block";
        commercial.style.display="none";
    }

    else if(premise==="Commercial"){

        residential.style.display="none";
        commercial.style.display="block";
    }

    else{

        residential.style.display="none";
        commercial.style.display="none";
    }

}
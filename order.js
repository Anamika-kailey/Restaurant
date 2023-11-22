function pagePrint(myform){
    var printdata=document.getElementById("myform");
    newwin=window.open("");
    newwin.document.write(printdata.outerHTML);
    newwin.print();
    newwin.close();
}
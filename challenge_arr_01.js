/*********   CODE CHALLENGE Arrays **********/

/*
Aufgabe:
Erstellen Sie eine JS-Struktur, die Ihnen den folgenden String 
einer HTML-Seite ausgibt:
<html><head></head><body><p></p></body></html>
Verwenden Sie dafür die untenstehenden Arrays
*/

let controls = ["<",">","/"];
let tags = ["html","head","head","body","h1","h1","p","p","p","p","p","p","body","html"];
let stack = [];

ausgabe(getHTML4())
function getHTML() // überprüft mit .includes ob der erstellte String das element bereits beinhaltet ohne möglichkeit das array zu erweitern
{
    let htmlStr = "";
    for(let i = 0; i < tags.length; i++)
    {
        if (htmlStr.includes(tags[i])) 
        {
            htmlStr += controls[0] + controls[2] + tags[i] + controls[1];
        } 
        else 
        {
            htmlStr += controls[0] + tags[i] + controls[1];
        }
        
    }
    return htmlStr;
}

function getHTMLPolished() // erzeugt den string durch überprüfung auf duplikate mit dem modulo operator
{
    let htmlStr = "";
    for(let i = 0; i < tags.length; i++)
    {
        if (isEven(getDuplicateNumber(i))) 
        {
            htmlStr += controls[0] + controls[2] + tags[i] + controls[1];
        } 
        else 
        {
            htmlStr += controls[0] + tags[i] + controls[1];
        }
        
    }
    return htmlStr;
}

function isEven(value) // überprüfft ob die anzahl an duplikaten gerade oder ungerade ist.
{
    return (value % 2) == 0;
}

function getDuplicateNumber(index) // ermittelt wie viele duplikate das element an dem Index in dem Array hat 
{
    let tmpValue = 1;
    for(let i = 0; i < index; i++)
    {
        if (tags[i] == tags[index]) 
            tmpValue++;
    }
    return tmpValue;
}

function getHTML2() // mit .includes und getTag funktion
{
    let htmlStr = "";
    for(let i = 0; i < tags.length; i++)
    {
        if (htmlStr.includes(tags[i])) 
        {
            htmlStr += getTag(tags[i], "close");
        } 
        else 
        {
            htmlStr += getTag(tags[i], "open");
        }
    }
    return htmlStr;
}

function getHTML3() // mit indexOf ohne möglichkeit das array zu erweitern
{
    let htmlStr = "";
    for(let i = 0; i < tags.length; i++)
    {
        if (isOpenTag(i)) 
        {
            htmlStr += getTag(tags[i], "open");
        } 
        else 
        {
            htmlStr += getTag(tags[i], "close");
        }
    }
    return htmlStr;
}

function getHTML4() // mit push und pop
{
    let htmlStr = "";
    for(let i = 0; i < tags.length; i++)
    {
        if (isOpenStack(i)) 
        {
            htmlStr += getTag(tags[i], "open");
        } 
        else 
        {
            htmlStr += getTag(tags[i], "close");
        }
    }
    return htmlStr;
}

function isOpenStack(index) // prüfung ob das element im index in dem stack vorhanden ist
{
    // ist das Element neu?? // dann open und in den Stack
    // Wenn nicht // dann close und raus aus dem Stack
    let element = tags[index];
    let cond    = true; //element neu??

    if (stack.indexOf(element) == -1)  // Element neu... --> rein, open
    {
        stack.push(element);
        return true;
    } 
    else // Element nicht neu --> raus, close
    {
        stack.pop();
        return false;
    }
    return true;
}

function isOpenTag(index) // überprüft das element am index ob es im array schonmal vorkommt 
{
    //erscheint das tag zum ersten mal? --> open
    
    return index = tags.indexOf(tags[index]);
}

//ausgabe(isOpenTag(2))

function getTag(tagName, flag) // gibt an welcher inhalt in den string eingefügt wird mithilfe eines boolean
{
    switch (flag) {
        case "open":
            return controls[0] + tagName + controls[1];
        case "close":
            return controls[0] + controls[2] + tagName + controls[1];    
        default:
            return "#";
    }
}

function ausgabe(outputStr) // funktion zur ausgabe in die konsole
{
    console.log(outputStr);
}
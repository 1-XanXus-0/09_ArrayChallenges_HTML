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

ausgabe(getHTMLPolished())
function getHTML()
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

function getHTMLPolished()
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

function isEven(value)
{
    return (value % 2) == 0;
}

function getDuplicateNumber(index)
{
    let tmpValue = 1;
    for(let i = 0; i < index; i++)
    {
        if (tags[i] == tags[index]) 
            tmpValue++;
    }
    return tmpValue;
}

function getHTML2()
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

function getHTML3()
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

function isOpenTag(index)
{
    //erscheint das tag zum ersten mal? --> open
    
    return index = tags.indexOf(tags[index]);
}

//ausgabe(isOpenTag(2))

function getTag(tagName, flag)
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

function ausgabe(outputStr)
{
    console.log(outputStr);
}
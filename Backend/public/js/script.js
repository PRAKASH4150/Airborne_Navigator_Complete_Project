function responsiveMenu() {
    var element = document.getElementById("navigation");
    if (element.className === "mainnav") {
        element.className += " responsive";
    } else {
        element.className = "mainnav";
    }
  }


function downloadResume()
{
    var docPath="./files/Resume.pdf";
    var link=document.createElement('a');
    link.href=docPath;
    link.download='Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
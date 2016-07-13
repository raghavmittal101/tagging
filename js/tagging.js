function func_tagging(stri)
{
    var span = document.createElement("span");
    var prop = document.createAttribute("property");
    if (window.getSelection().toString().length!==0) {    
        console.log('highlighted');

        prop.value=stri;
        span.setAttributeNode(prop);
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }  
}

function toggle_tagging()
{
  var element = document.getElementById("page-wrap") ;
  if(element.hasAttribute("hidden"))
  {
    element.removeAttribute("hidden");
  }
  else
  {
    element.setAttribute("hidden","");
  }
}

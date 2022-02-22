window.body = document.getElementsByTagName("body")[0]

function createVideoElement(src,poster=""){

var v = document.createElement("video")
v.setAttribute("src", src)
var width=screen.availWidth
v.setAttribute("width", width)
v.setAttribute("height",width/16*9)
v.setAttribute("poster",poster)
v.setAttribute("autoplay","")
v.setAttribute("controls","")
v.setAttribute("muted","")
v.setAttribute("loop","")
v.setAttribute("playsinline","")
body.insertBefore(v,body.childNodes[0])
return v

}


function createElement(tag,dict){

var tag = document.createElement(tag)

for (let item in dict){
tag.setAttribute(item,dict[item])
}

return tag
}

window.createVideoElement=createVideoElement
window.createElement = createElement

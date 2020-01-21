function function_2()
{
  //console.log("function 2")
  //alert("when we push the button")
  //document.querySelector("h1").innerHTML = "introduction to web (C1.3.52)"
  let h1Text = document.querySelector("h1").innerHTML
  if(h1Text.includes("C1.3.58"))
  {
    console.log("it works externally")
  }
  else
  {
    h1Text = "introduction to web (C1.3.58)"
  }
  document.querySelector("h1").innerHTML = h1Text
}

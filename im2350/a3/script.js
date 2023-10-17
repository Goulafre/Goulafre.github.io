

function updateValue(e) {
    console.log(e.target.value)

    if (e.target.value > 70 && e.target.value <80) {
      document.getElementById("poem1").style.opacity = '1'
    } else {
      document.getElementById("poem1").style.opacity = '0'
    }
    if (e.target.value > 20 && e.target.value <30) {
        document.getElementById("poem3").style.opacity = '1'
      } else {
        document.getElementById("poem3").style.opacity = '0'
      }
      if (e.target.value > 20 && e.target.value <30) {
        document.getElementById("poem5").style.opacity = '1'
      } else {
        document.getElementById("poem5").style.opacity = '0'
      }
  }

  function updateValue2(e) {
    console.log(e.target.value)
    document.body.style.backgroundColor = "color-mix( in srgb, #C1fa5e " + e.target.value + "%, #34c9eb)";
    
    if (e.target.value > 70 && e.target.value <80) {
      document.getElementById("poem2").style.opacity = '1'
    } else {
      document.getElementById("poem2").style.opacity = '0'
    }
    if (e.target.value > 20 && e.target.value <30) {
        document.getElementById("poem4").style.opacity = '1'
      } else {
        document.getElementById("poem4").style.opacity = '0'
      } 
    if (e.target.value > 20 && e.target.value <30) {
    document.getElementById("background-video").style.opacity = '.3'
  } else {
    document.getElementById("background-video").style.opacity = '0'
  }
}
  

  

  
  document.getElementById("rangeInput").addEventListener("input", updateValue)

  document.getElementById("rangeInput2").addEventListener("input", updateValue2)

 


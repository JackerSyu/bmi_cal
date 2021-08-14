
document.querySelector(".circle__calculate").addEventListener('click', function(){
  let height = document.querySelectorAll("input")[0].value;
  let weight = document.querySelectorAll("input")[1].value;
  if(height === "" || weight === ""){
    alert("請輸入身高和體重");
  }
  else if(parseFloat(weight) <= 0 || parseFloat(height) <= 0){
    alert("身高體重必須大於0");
    clearInput();
  }
  else{
    let result = parseFloat(weight)/((parseFloat(height)/100)*(parseFloat(height)/100));
    result = Math.round(result * 10) / 10;
    if(result < 18.5){
      document.querySelector(".result h1").textContent = "你的BMI值為：" + result + "(過輕)";
      document.querySelector(".result h1").classList.add("low");
    } 
    else if (result >= 24) {
      document.querySelector(".result h1").textContent = "你的BMI值為：" + result + "(過重)";
      document.querySelector(".result h1").classList.add("high");
    }
    else {
      document.querySelector(".result h1").textContent = "你的BMI值為：" + result + "(正常)";
      document.querySelector(".result h1").classList.add("normal");
    }
    
  }
});

document.querySelector(".circle__reset").addEventListener("click", function(){
  clearInput();
  document.querySelector(".result h1").textContent = "請輸入身高體重";
  document.querySelector(".result h1").classList.remove("low");
  document.querySelector(".result h1").classList.remove("high");
  document.querySelector(".result h1").classList.remove("normal");
})

function clearInput () {
  for(let i = 0; i < 2; i++){
    document.querySelectorAll("input")[i].value = "";
  }
}
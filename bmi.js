function calcBMI() {
    const userName = document.getElementById("name").value;
    const height = Number(document.getElementById("height").value);
    const weight = Number(document.getElementById("weight").value);
    para = document.getElementById("result");
    const bmi = Number((weight / height ** 2).toFixed(1));
    let state = "";
    if (bmi < 18.5) state = "Underweight";
    else if ((bmi >= 18.5 && bmi, i <= 24.9)) state = "Normal weight";
    else if (bmi >= 25 && bmi <= 29.9) state = "Overweight";
    else state = "Obese";
    para.innerHTML = `Hello ${userName}! Your BMI is <b>${bmi}</b> and you are <b>${state}</b>.`;
  }
  
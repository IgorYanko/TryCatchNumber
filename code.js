const inputFileButton = document.getElementById("inputfilebutton");
inputFileButton.addEventListener("click", clickFileButton);

const inputNumberButton = document.getElementById("inputnumberbutton");
inputNumberButton.addEventListener("click", clickNumberButton);

const inputNumberButtonbt = document.getElementById("inputbtbutton");
inputNumberButtonbt.addEventListener("click", clickNumberButtonbt);

function clickFileButton() {
  arquivo = document.getElementById("inputfile");

  var fr = new FileReader();

  try {
    fr.readAsText(arquivo.files[0]);
    fr.onload = function () {
      info = fr.result;
      document.getElementById("output").textContent = fr.result;
    };
  } catch (erro) {
    console.log(erro);
    alert(erro);
  } finally {
    alert("Obrigado pela visita");
  }
}

function clickNumberButton() {
  // 1) Inserir um campo de input com a mensagem "informe um valor entre 5 a 10" ✓
  // 2) Verifica se é nulo, se for, lança exception "Informe um valor" ✓
  // 3) Verifica se é maior que 5 e menor que 10, se não for, lança exception
  // "Informe um valor maior que 5 e menor que 10" ✓
  // 4) Se o try falhar, lançar exception "Erro + erro javascript" ✓
  // 5) No finnaly informar "O número escolhido foi + " numero ✓

  number = document.getElementById("inputnumber").value;

  try {
    if (number == "") throw "Informe um valor";
  } catch (erro) {
    document.getElementById("outputnumber").innerHTML = erro;
  }
}

function clickNumberButtonbt() {
  numberbt = document.getElementById("inputnumberbt").value;

  try {
    if (numberbt == "") {
      throw "Informe um valor";
    } else if (numberbt <= 5 || numberbt >= 10) {
      throw "Informe um valor maior que 5 e menor que 10";
    }
  } catch (erro) {
    console.log("Erro! "+ erro)
    document.getElementById("outputnumberbt").innerHTML = erro;
  }
  finally {
    if (numberbt > 5 && numberbt < 10) {
      document.getElementById("outputnumberbt").innerHTML;
      alert("O número escolhido foi " + numberbt);
    }
  }
}

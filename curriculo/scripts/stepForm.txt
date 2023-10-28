const nome = document.querySelector(".name");
const endereco = document.querySelector(".endereco");
const telefone = document.querySelector(".tel");
const entidade = document.querySelector(".entidade");
const atividade = document.querySelector(".atividade");
const periodoInicial = document.querySelector(".inicial");
const periodoFinal = document.querySelector(".final");
const instituicao = document.querySelector(".instituicao");
const curso = document.querySelector(".curso");
const conclusao = document.querySelector(".conclusao");

const persoal_data_form = document.querySelector(".personal-data-form");
const expreriencies_data_form = document.querySelector(
  ".expreriencies-data-form"
);
const graduation_data_form = document.querySelector(".graduation-data-form");
const formButton = document.querySelector(".next-button");
const backButton = document.querySelector(".back-button");
const submitButton = document.querySelector(".submit-button");
const clearButton = document.querySelector(".clear-button");

const formTitle = document.querySelector(".form-title");
const form = document.querySelector("form");
const personalData = document.querySelector(".personal-data-presentation");

clearButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (step === 1) {
    clearInputs([nome, endereco, telefone]);
    removeInputClass([nome, endereco, telefone]);
  } else if (step === 2) {
    clearInputs([entidade, atividade, atividade, periodoInicial, periodoFinal]);
    removeInputClass([
      entidade,
      atividade,
      atividade,
      periodoInicial,
      periodoFinal,
    ]);
  } else {
    clearInputs([instituicao, curso, conclusao]);
    removeInputClass([instituicao, curso, conclusao]);
  }
});

let step = 1;

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (formValidation([curso.value, instituicao.value, conclusao.value])) {
    const expPeriod = periodoInicial.value + " à " + periodoFinal.value;
    showData([
      nome.value,
      endereco.value,
      telefone.value,
      entidade.value,
      atividade.value,
      expPeriod,
      curso.value,
      instituicao.value,
      conclusao.value,
    ]);
    form.style.display = "none";
    personalData.style.display = "flex";
  } else {
    // show an alert
  }
});

backButton.addEventListener("click", (event) => {
  event.preventDefault();
  step--;

  if (step === 1) {
    persoal_data_form.classList.remove("remove");
    expreriencies_data_form.classList.add("remove");
    changeFormTitle(formTitle, "Informações pessoais");
  }
  if (step === 2) {
    changeFormTitle(formTitle, "Experiências");
    graduation_data_form.classList.add("remove");
    expreriencies_data_form.classList.remove("remove");
    submitButton.classList.add("button-hide");
    formButton.classList.remove("button-hide");
  }

  if (step > 1) {
    backButton.classList.remove("button-hide");
  } else {
    backButton.classList.add("button-hide");
  }
});

formButton.addEventListener("click", (event) => {
  event.preventDefault();
  step++;

  if (step === 2) {
    if (!endereco.value.includes("@")) {
      alert("insira um email válido");
      step--;
    } else {
      if (formValidation([nome.value, endereco.value, telefone.value])) {
        persoal_data_form.classList.add("remove");
        expreriencies_data_form.classList.remove("remove");

        changeFormTitle(formTitle, "Experiências");
      } else {
        alert("preencha todos os campos");
        step--;
      }
    }
  }
  if (step === 3) {
    if (
      formValidation([
        entidade.value,
        atividade.value,
        periodoFinal.value,
        periodoInicial.value,
      ])
    ) {
      graduation_data_form.classList.remove("remove");
      expreriencies_data_form.classList.add("remove");
      submitButton.classList.remove("button-hide");
      formButton.classList.add("button-hide");
      changeFormTitle(formTitle, "Graduação");
    } else {
      alert("Preencha todos os campos");
      step--;
    }
  }

  if (step > 1) {
    backButton.classList.remove("button-hide");
  } else {
    backButton.classList.add("button-hide");
  }
});

nome.addEventListener("change", () => {
  if (nome.value !== "") {
    nome.classList.add("input-validated");
  } else {
    nome.classList.remove("input-validated");
  }
});
endereco.addEventListener("change", () => {
  if (endereco.value !== "") {
    endereco.classList.add("input-validated");
  } else {
    endereco.classList.remove("input-validated");
  }
});
telefone.addEventListener("change", () => {
  if (telefone.value !== "") {
    telefone.classList.add("input-validated");
  } else {
    telefone.classList.remove("input-validated");
  }
});
atividade.addEventListener("change", () => {
  if (atividade.value !== "") {
    atividade.classList.add("input-validated");
  } else {
    atividade.classList.remove("input-validated");
  }
});
entidade.addEventListener("change", () => {
  if (entidade.value !== "") {
    entidade.classList.add("input-validated");
  } else {
    entidade.classList.remove("input-validated");
  }
});
conclusao.addEventListener("change", () => {
  if (conclusao.value !== "") {
    conclusao.classList.add("input-validated");
  } else {
    conclusao.classList.remove("input-validated");
  }
});
curso.addEventListener("change", () => {
  if (curso.value !== "") {
    curso.classList.add("input-validated");
  } else {
    curso.classList.remove("input-validated");
  }
});
instituicao.addEventListener("change", () => {
  if (instituicao.value !== "") {
    instituicao.classList.add("input-validated");
  } else {
    instituicao.classList.remove("input-validated");
  }
});

function formValidation(fields) {
  let enabledToContinue = false;
  fields.every((item) => {
    if (item === "") {
      enabledToContinue = false;
      return false;
    } else {
      enabledToContinue = true;
      return true;
    }
  });

  return enabledToContinue;
}

/**
 *
 * @param {Array} inputs
 */
function clearInputs(inputs) {
  inputs.map((input) => {
    input.value = "";
  });
}

/**
 *
 * @param {Array} inputs
 */
function removeInputClass(inputs) {
  inputs.map((input) => {
    input.classList.remove("input-validated");
  });
}

/**
 *
 * @param {HTMLElement} title
 * @param {String} text
 */
function changeFormTitle(title, text) {
  title.innerHTML = text;
}

const dataNome = document.querySelector(".data-nome");
const dataEndereco = document.querySelector(".data-endereco");
const dataTelefone = document.querySelector(".data-telefone");

const dataEntidade = document.querySelector(".data-entidade");
const dataAtividade = document.querySelector(".data-atividade");
const dataExpPeriodo = document.querySelector(".data-expPeriod");

const dataInstituicao = document.querySelector(".data-instituicao");
const dataCurso = document.querySelector(".data-curso");
const dataConclusao = document.querySelector(".data-conclusao");

const datas = [
  dataNome,
  dataEndereco,
  dataTelefone,
  dataEntidade,
  dataAtividade,
  dataExpPeriodo,
  dataInstituicao,
  dataCurso,
  dataConclusao,
];

function showData(inputDatas) {
  datas.forEach((field, index) => {
    field.innerHTML = inputDatas[index];
  });
}

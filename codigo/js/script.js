const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
const body2 = document.querySelector("body");
var logado = false;

const section = document.getElementById("modalNovo"),
  overlay = document.querySelector(".overlay"),
  showBtn = document.querySelector(".show-modal"),
  closeBtn = document.querySelector(".close-btn");
if(bar){
  document.addEventListener("click", function (e) {
    const navbar = document.getElementById("navbar");
    const clickedElement = e.target;
  
    if (bar.classList.contains("ativo")) {
      if (!navbar.contains(clickedElement) && clickedElement !== bar) {
        bar.classList.remove("ativo");
        nav.classList.remove("active");
      }
    }
  });
}


document.addEventListener("DOMContentLoaded", function () {

  var enviarButton = document.getElementById("enviar"); // Botão do cadastro de pet
  var enviarButton2 = document.getElementById("enviar2"); // Botão do cadastro de pessoas
  var loginButton = document.getElementById("login"); // Botão do cadastro de pessoas
  var login = localStorage.getItem("login");
  const pictureInput = document.getElementById("picture");

  if (overlay) {
    overlay.addEventListener("click", () => section.classList.remove("active"));
    if (closeBtn) {
      closeBtn.addEventListener("click", () =>
        section.classList.remove("active")
      );
    }
  }

  if (bar) {
    bar.addEventListener("click", function (e) {
      nav.classList.toggle("active");
      setTimeout(() => {
        bar.classList.toggle("ativo");
      }, 10);
    });
  }

  if (enviarButton) {
    if (login != "true") {
      window.location.href = "index.html";
    }
    enviarButton.addEventListener("click", function (event) {
      event.preventDefault();
      var nome = document.getElementById("input").value;
      var idade = document.getElementById("idade").value;
      var raca = document.getElementById("raca").value;
      var descricao = document.getElementById("descricao").value;
      var especie = document.getElementById("especie").value;

      var nome3 = document.getElementById("input");  
      var raca3 = document.getElementById("raca");
      var descricao3 = document.getElementById("descricao");
      var especie3 = document.getElementById("especie");

      var inputImagem = document.getElementById("picture__input");

      descricao3.addEventListener("click", function (event) {
        descricao3.style.borderColor = "#165ea8";
      });
      nome3.addEventListener("click", function (event) {
        nome3.style.borderColor = "#165ea8";
      });
      raca3.addEventListener("click", function (event) {
        raca3.style.borderColor = "#165ea8";
      });
      especie3.addEventListener("click", function (event) {
        especie3.style.borderColor = "#165ea8";
      });
      if (nome === "" || descricao === "" || raca === "0" || especie === "0") {
        if (inputImagem.files && !inputImagem.files[0]) {
          pictureInput.style.borderColor = "#ff2727";
        } else {
          pictureInput.style.borderColor = "#fff";
        }
        if (descricao === "") {
          descricao3.style.borderColor = "#ff2727";
        }
        if (nome === "") {
          nome3.style.borderColor = "#ff2727";
        }

        if (raca === "0") {
          raca3.style.borderColor = "#ff2727";
        }

        if (especie === "0") {
          especie3.style.borderColor = "#ff2727";
        }

        section.classList.add("active");
        return;
      }
      var imagemdopet = localStorage.getItem("imagempet");
      if(imagemdopet != null){
        localStorage.removeItem("imagempet");
        localStorage.removeItem("nome");
        localStorage.removeItem("idade");
        localStorage.removeItem("raca");
        localStorage.removeItem("descricao");
      }

      localStorage.setItem("nome", nome);
      localStorage.setItem("idade", idade);
      localStorage.setItem("raca", raca);
      localStorage.setItem("descricao", descricao);

      if (inputImagem.files && inputImagem.files[0]) {
        var imagem = inputImagem.files[0];
        
        var reader = new FileReader();

        reader.onload = function (e) {
          var imagemBase64 = e.target.result;

          localStorage.setItem("imagempet", imagemBase64);
        };
        reader.readAsDataURL(imagem);
      } else {
        pictureInput.style.borderColor = "#ff2727";
        section.classList.add("active");
        return;
      }
      
      logado = true;
      localStorage.setItem("login", logado);
      window.location.href = "perfil.html";
    });
  }
  if (enviarButton2) {
    const pictureInput = document.getElementById("picture");
    var selectIdade = document.getElementById("idade2");

    for (var i = 18; i <= 100; i++) {
      var option = document.createElement("option");
      option.setAttribute("value", i);
      option.textContent = i;
      selectIdade.appendChild(option);
    }

    enviarButton2.addEventListener("click", function (event) {
      event.preventDefault();

      var inputImagem2 = document.getElementById("picture__input");
      var nome2 = document.getElementById("input2").value;
      var idade2 = document.getElementById("idade2").value;
      var bairro = document.getElementById("bairro2").value;
      var telefone = document.getElementById("telefone").value;

      var nome4 = document.getElementById("input2");
      var bairro2 = document.getElementById("bairro2");
      var telefone2 = document.getElementById("telefone");
      nome4.addEventListener("click", function (event) {
        nome4.style.borderColor = "#165ea8";
      });
      telefone2.addEventListener("click", function (event) {
        telefone2.style.borderColor = "#165ea8";
      });
      bairro2.addEventListener("click", function (event) {
        bairro2.style.borderColor = "#165ea8";
      });
      if (nome2 === "" || telefone === "" || bairro === "0") {
        if (inputImagem2.files && !inputImagem2.files[0]) {
          pictureInput.style.borderColor = "#ff2727";
        } else {
          pictureInput.style.borderColor = "#fff";
        }
        if (nome2 === "") {
          nome4.style.borderColor = "#ff2727";
        }
        if (telefone === "") {
          telefone2.style.borderColor = "#ff2727";
        }
        if (bairro === "0") {
          bairro2.style.borderColor = "#ff2727";
        }
        section.classList.add("active");
        return;
      }
      var imagemdapessoa = localStorage.getItem("imagempessoa");
      if(imagemdapessoa != null){
        console.log("entrou"); 
        localStorage.removeItem("imagempessoa");
        localStorage.removeItem("nome2");
        localStorage.removeItem("idade2");
        localStorage.removeItem("bairro");
        localStorage.removeItem("telefone");
      }

      localStorage.setItem("nome2", nome2);
      localStorage.setItem("idade2", idade2);
      localStorage.setItem("bairro", bairro);
      localStorage.setItem("telefone", telefone);

      if (inputImagem2.files && inputImagem2.files[0]) {
        var imagem2 = inputImagem2.files[0];

        var reader = new FileReader();

        reader.onload = function (e) {
          var imagemBase642 = e.target.result;
          localStorage.setItem("imagempessoa", imagemBase642);
        };
        reader.readAsDataURL(imagem2);
      } else {
        section.classList.add("active");
        return;
      }
      logado = true;
      localStorage.setItem("login", logado);
      window.location.href = "main.html";
    });
  }
  if (loginButton) {
    loginButton.addEventListener("click", function (event) {
      login2 = localStorage.getItem("login");
      if (login2 === "true") {
        window.location.href = "main.html";
      } else {
        section.classList.add("active");
        return;
      }
    });
  }
});

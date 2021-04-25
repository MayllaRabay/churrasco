const qtdCriancas = document.querySelector("#criancas");
const qtdAdultos = document.querySelector("#adultos");
const button = document.querySelector("#calcular");
const mensagem = document.querySelector("#mensagem");
const listaChurrasco = document.querySelector("#lista-churrasco");

const listaCheckbox = document.querySelector("#lista-checkbox");
const checkCarne = document.querySelector("#checkbox-carne");
const checkLinguica = document.querySelector("#checkbox-linguica");
const checkCerveja = document.querySelector("#checkbox-cerveja");
const latasCerveja = document.querySelector("#latas-cerveja");
const checkRefri = document.querySelector("#checkbox-refri");

const listaLatas = latasCerveja.querySelectorAll("input");
for(let i = 0; i < listaLatas.length; i++) {
    listaLatas[i].addEventListener("input", () => {
        if(listaLatas[i].checked && !checkCerveja.checked) {
            checkCerveja.checked = true;
        };
    })
};

checkCerveja.addEventListener("input", () => {
    for(let i = 0; i < listaLatas.length; i++) {
        if(checkCerveja.checked) {
            listaLatas[0].checked = true;
        } else {
            listaLatas[i].checked = false;
        };
    };
})

button.addEventListener("click", () => {
    const itens = listaCheckbox.querySelectorAll("input");
    let itensMarcados = 0;
    for(item of itens) {
        if(item.checked === true) {
            itensMarcados++;
        };
    };
    if(itensMarcados === 0) {
        alert("Por favor selecione algum item");
    } else if (qtdAdultos.value == "" || qtdCriancas.value == "") {
        alert("Por favor preencha todos os campos");
    } else {
        mensagem.removeAttribute("hidden");
  
        listaChurrasco.innerText = "";

        const qtdCarne = (500 * (qtdAdultos.value)) + (150 * (qtdCriancas.value));
        const qtdLinguica = (200 * (qtdAdultos.value)) + (50 * (qtdCriancas.value));
        const qtdCerveja = 1.5 * (qtdAdultos.value);
        const qtdRefri = (1 * (qtdAdultos.value)) + (0.5 * (qtdCriancas.value));
    
        if(checkCarne.checked) {
            const item = document.createElement("li");
            const texto = `${qtdCarne}g de carne`;
            item.append(texto);
            listaChurrasco.append(item);
        };
        if(checkLinguica.checked) {
            const item = document.createElement("li");
            const texto = `${qtdLinguica}g de linguiça`;
            item.append(texto);
            listaChurrasco.append(item);
        };
        if(checkCerveja.checked) {
            const listaLatas = latasCerveja.querySelectorAll("input");
            const valorLatas = [0.600, 0.475, 0.330, 0.350, 0.269];
            let valorLata;
            for(let i = 0; i < listaLatas.length; i++) {
                if(listaLatas[i].checked) {
                    valorLata = valorLatas[i];
                };
            };
      
            const qtdLatas = Math.round(qtdCerveja / valorLata);
            let textoLatas = "";
            if (qtdLatas == 1) {
                textoLatas = "lata"
            } else {
                textoLatas = "latas"
            };
      
            const item = document.createElement("li");
            const texto = `${qtdCerveja}L de cerveja, ou ${qtdLatas} ${textoLatas} de ${valorLata * 1000}ml`;
            item.append(texto);
            listaChurrasco.append(item);
        };
        if(checkRefri.checked) {
            const item = document.createElement("li");
            const texto = `${qtdRefri}L de refrigerante`;
            item.append(texto);
            listaChurrasco.append(item);
        };

        for(item of itens) {
            if(item.checked === true) {
                item.checked = false;
            };
        };
        qtdAdultos.value = "";
        qtdCriancas.value = "";
    };
})
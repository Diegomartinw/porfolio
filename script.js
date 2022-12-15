fetch("Lista.csv")
    .then(function (res) {
        console.log(res);
        return (res.text());

    })

    .then(function (data) {
        mostrarTabla(data);
    }


    )

function mostrarTabla(data) {
    let tabular;
    for (let r = 1; r <= 3; r++) {
        if (r === 1) { tabular = document.querySelector(".contenedor"); } 
        else if (r === 2) { tabular = document.querySelector(".contenedor1"); } 
        else { tabular = document.querySelector(".contenedor2") }

    
    
    
    let filas = data.split(/\r?\n|\r/);
    let template = ``;
    for (let i = 0; i < filas.length; i++) {
        let celdasFila = filas[i].split(',');
        if (celdasFila[0] === r.toString()) {

            template += `<article>`;
            template += `<a href="${celdasFila[3]}"><img src="${celdasFila[1]}"></a>`;
            template += `<h4>${celdasFila[2]}</h4>`;
            template += `</article>`;
        } 
        }

        tabular.innerHTML = template;
    }

    }
    
    
    




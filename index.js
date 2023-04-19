let httpRequest= new XMLHttpRequest();
httpRequest.open('GET', 'https://ws.smn.gob.ar/map_items/weather', true)
httpRequest.setRequestHeader('Accept', 'application/json')
httpRequest.onload = async () => {
    if (httpRequest.status === 200){
        const datosApi = await JSON.parse(httpRequest.responseText)
        
        datosApi.forEach(temperatura => {
            const li= document.createElement("li")
            li.textContent = "La temperatura en " + temperatura.name + " es de " + temperatura.weather.tempDesc + " y con un ambiente " + temperatura.weather.description
                document.getElementById("listaCriptos").appendChild(li)
        })
    }
}
httpRequest.send()
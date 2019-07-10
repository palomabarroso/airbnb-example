const url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72'

fetch(url)
    .then(response => response.json())
    .then(result => {
        result.forEach(function (host) {
            let divHost = document.createElement('div')
            let divHostInfo = document.createElement('div')
            let divHostImg = document.createElement('div')
            let divHostNome = document.createElement('div')
            let divHostPreco = document.createElement('div')
            let divHostTipo = document.createElement('div')
            let imgHost = document.createElement('img')

            divHost.setAttribute('class', 'host')
            divHostImg.setAttribute('class', 'host-img')
            divHostInfo.setAttribute('class', 'host-info')
            divHostNome.setAttribute('class', 'host-nome')
            divHostPreco.setAttribute('class', 'host-preco')
            divHostTipo.setAttribute('class', 'host-tipo')

            imgHost.setAttribute('src', host.photo)
            divHostNome.innerHTML = host.name
            divHostPreco.innerHTML = `R$ ${host.price}/noite`
            divHostTipo.innerHTML = host.property_type

            divHostImg.appendChild(imgHost)
            divHost.appendChild(divHostImg)
            divHostInfo.appendChild(divHostTipo)
            divHostInfo.appendChild(divHostNome)
            divHostInfo.appendChild(divHostPreco)
            divHost.appendChild(divHostInfo)

            document.querySelector('.wrap').append(divHost)

        });
    })


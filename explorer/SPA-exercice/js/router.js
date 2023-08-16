export class Router{
    routes = {}

    add(pathName, page){
        this.routes[pathName] = page
    }

    route(event){
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)
        
        this.handle()
    }

    handle(){
        const { pathname } = window.location

        const route = this.routes[pathname] || this.routes[404]

        fetch(route)
            .then(data => data.text())
            .then(dataText => document.querySelector('#app').innerHTML = dataText)
    }
}
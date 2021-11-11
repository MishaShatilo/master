//ec47fc99fb82fc889c8e0797f6962024//api keys
let searchinp = document.querySelector('.search')
let update_time = document.getElementById('update-date');
let local_time = document.getElementById('local-date')
let cityBlock = document.getElementById('city')
let temper = document.getElementById('temperature')
setInterval(() => {
    let date = new Date;
    local_time.textContent = `Время сейчас ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`},1000)
let city = 'Minsk'
document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        let value = searchinp.value;
        if(!value) return false;
        city = value;
        weather()
        searchinp.value = '';
        
    }
})

function weather(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec47fc99fb82fc889c8e0797f6962024`)
    .then((resp) => {return resp.json()})
    .then((data) => {
        temper.textContent = `${temperature()}°`
        cityBlock.textContent = `city: ${data.name}`
        
        function temperature() {
            let getTemp = data.main.temp
            let tempC = Math.floor(getTemp) - 273
            return tempC
        }
        
        let date = new Date;
        update_time.textContent = `Последнее обновление было ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        

    })
    .catch(() =>{
        alert('Этот город не был найден')
        city = 'Minsk';
        weather()
        searchinp.value = ''
    })

}
weather()
setInterval(() => {
    weather()
}, 10000) 
export async function getBusesPositionsSimple(){
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=6e1ded6663b94c8d88c65431c50c2315&client_secret=d9d4Ca0e1Ef24cB4A87A84aeBb287660')
    const responseJson = await response.json()
   return responseJson
}

export default(
    getBusesPositionsSimple
)
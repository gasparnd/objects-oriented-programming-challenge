const vehicles = {
	results: [
		{
			type: 'car',
			brand: 'Peogeot',
			model: '206',
			doors: 4,
			price: 200000.00
		},
		{
			type: 'car',
			brand: 'Peogeot',
			model: '208',
			doors: 5,
			price: 250000.00
		},
		{
			type: 'motorcycle',
			brand: 'Honda',
			model: 'Titan',
			cylinder: 125,
			price: 60000.00
		},
		{
			type: 'motorcycle',
			brand: 'Yamaha',
			model: 'YBR',
			cylinder: 160,
			price: 80500.00
		},
	]
}

const vehicleData = vehicles.results

// Print objects List

const showVehicle = vehicle => {
	for(let i = 0 ; i < vehicle.length ; i++) {
		const data = vehicle[i]
		if(data.type === 'car') {
			console.log(`Marca: ${data.brand} // Modelo: ${data.model} // Puertas: ${data.doors} // Precio: $${data.price}`)
		} else if(data.type === 'motorcycle') {
			console.log(`Marca: ${data.brand} // Modelo: ${data.model} // Cilindrada: ${data.cylinder}cc // Precio: $${data.price}`)
		}
	}	
}

// Filter objects what containing Y letter

const letterInVehicle = vehicleData.filter(data => data.model.includes(`Y`))

// Rearrange price list

const vehiclePriceList = vehicleData.sort((a,b)=> b.price - a.price)

//Print results

console.log(`Vehículos:`)
showVehicle(vehicleData)
console.log(`=============================================================================`)
console.log(`Caro: ${vehiclePriceList[0].brand} ${vehiclePriceList[0].model}`) 
console.log(`Baarato: ${vehiclePriceList[vehiclePriceList.length-1].brand} ${vehiclePriceList[vehiclePriceList.length-1].model}`)
console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${letterInVehicle[0].brand} ${letterInVehicle[0].model} $${letterInVehicle[0].price}`)
console.log(`=============================================================================`)
console.log(`Vehículos ordenados por precio de mayor a menor:`)
showVehicle(vehiclePriceList)
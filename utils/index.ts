export async function fetchCars() {
    const headers = {

            'x-rapidapi-key': 'e8c7b5112bmsha1ee745e0d8eba8p1a3acfjsn38bbe5d08bde',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'    
    }
    const response = await fetch(
        'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', 
        {headers: headers}
    );
    const result = await response.json();

    return result;
}
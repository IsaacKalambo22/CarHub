import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    const {manufacturer, model, year, limit, fuel } =
    filters;

    const headers = {

            'x-rapidapi-key': 'e8c7b5112bmsha1ee745e0d8eba8p1a3acfjsn38bbe5d08bde',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'    
    }
    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type${fuel}`, {
            headers: headers}
    );
    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

export const generateCarImageUrl = (car: CarProps, angle? 
    : string) => { 
        // key.... hrjavascript-mastery
     const url = new 
     URL('https://cdn.imagin.studio/getimage');
     
     const{make, year, model} = car;

     url.searchParams.append('customer', 'hrjavascript-mastery');
     url.searchParams.append('make', make);
     url.searchParams.append('modelFamily', model.split('')[0]);
     url.searchParams.append('ZoomType', 'fullscreen');
     url.searchParams.append('modelYear', `${year}`);
     url.searchParams.append('angle', `${angle}`);

     return `${url}`;

}
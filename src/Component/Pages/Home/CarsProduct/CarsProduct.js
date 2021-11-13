import React from 'react';
import useCars from '../../../hooks/useCars/useCars';
import CarProduct from '../CarProduct/CarProduct';
const CarsProduct = () => {
   const {cars}=useCars()
    return (
        <div className="lg:p-10 p-5 ">
           <div className="mb-5 ">
           <h2 className="text-pink-600 text-3xl font-bold pt-8 text-center">| Our Brand Feature</h2>
           <p>Best Car Product are Available</p>
           </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    cars.map(car=><CarProduct key={car._id} car={car}></CarProduct>).slice(0,6)
                }
            </div>
        </div>
    );
};

export default CarsProduct;
import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
            <div className="bg-blue-400 flex justify-center">
               
                    <div className="flex flex-col gap-4 items-center justify-center py-4  text-white">
                        <h2 className='text-5xl font-bold'>Bem-vindo à nossa Farmácia!</h2>
                        <p className='text-xl'>Todos os produtos para a sua saúde em um só lugar.</p>
  
                        <div className="flex justify-around gap-4">     
                            <Link to="/products">
                                <button className='rounded bg-white text-gray-600 py-2 px-4'>Produtos</button>
                            </Link>
                        </div>
                   
                  </div>
            </div>
           
        </>
    );
}

export default Home;
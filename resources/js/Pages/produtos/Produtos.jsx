import React from 'react';
import { motion } from 'framer-motion';

const Produtos = ({ produtos }) => {
  return (
    <div className=' font-sans text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-full overflow-x-hidden py-10 px-4 '>
      {produtos && produtos.length > 0 ? (
        produtos.map((produto) => (
          <motion.div
            key={produto.id}
            className='relative flex flex-col bg-transparent py-1 px-1 gap-2 rounded-lg shadow-md group'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative px-0.5 py-0.5">
              <motion.div
                className='absolute inset-0 rounded-lg z-0 border-4 border-transparent group-hover:border-indigo-800'
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }
                }}
                style={{
                  background: 'linear-gradient(90deg, #4c4cb2, #ff007b, #764ba2)',
                  backgroundSize: '400% 400%'
                }}
              />
              <div className='relative z-10 bg-gray-800 rounded-lg p-4'>
                <img
                  src={`/storage/${produto.imgs}`}
                  alt={produto.nome}
                  className='w-60 h-52 rounded-xl transform transition duration-500 hover:scale-105'
                />
                <div className='text-center  font-bold text-md text-white pt-2'>
                  <p c>{produto.nome.toUpperCase()}</p>
                </div>
                <div className='text-white px-1 text-center'>
                  <p className='text-xl font-semibold'>R$ {produto.preco.toFixed(2)}</p>
                </div>
                <div className='flex justify-center fonte-mono'>
                  <button className='m-4 p-0.5 from-indigo-800 via-pink-500 to-purple-700 bg-gradient-to-r px-16 py-2 transition duration-500 hover:scale-105'>
                    <span className='block font-semibold text-white transition hover:backdrop-brightness-110'>
                      Comprar
                    </span>
                  </button>
                </div>
                <div className='text-center text-white text-sm'>
                  <p>{produto.estoque} em estoque</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))
      ) : (
        <p>Nenhum produto disponível.</p>
      )}
    </div>
  );
};

export default Produtos;

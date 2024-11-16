import React, { useState, useEffect } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from '@inertiajs/react';
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import { CiShoppingCart } from "react-icons/ci"

export default function Navbar({ user }) { 
  const [showCategories, setShowCategories] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  let hideTimeout;
  
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    
    if (searchTerm.trim() === '') {
      return; // Não faz nada se a barra estiver vazia
    }
    
    // Redireciona para a página de resultados de busca
    window.location.href = `/search?query=${encodeURIComponent(searchTerm)}`;
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleMouseEnter = () => {
    clearTimeout(hideTimeout);
    setShowCategories(true);
  };

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setShowCategories(false);
    }, 300);
  };

  useEffect(() => {
    return () => clearTimeout(hideTimeout);
  }, []);

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <nav className="bg-black text-white w-screen  top-0 left-0 z-50">
      <div className="w-full max-w-screen-xl mx-auto px-5 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-24 h-24" />
        </a>

        
        <div className="flex-1 mx-10 relative">
  <form onSubmit={handleSearch}>
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full max-w-md px-4 py-2 text-black rounded-full focus:outline-none"
      placeholder="O que você está buscando?"
    />
  </form>
</div>

        
        <div className="relative">
        {user ? (
  <div className="relative">
    {/* Ícones do Carrinho e Perfil */}
    <div className="flex space-x-2">
      <button>
        <CiShoppingCart className="text-4xl" />
      </button>
      <button onClick={toggleMenu} className="text-4xl relative z-10">
        <FaRegUserCircle />
      </button>
    </div>

    {/* Dropdown Menu */}
    {isOpen && (
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={itemVariants}
        className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-4 w-40 text-black z-50"
      >
        <Link
          href="/profile"
          className="block px-4 py-2 hover:bg-gray-200 rounded-md"
        >
          Meu perfil
        </Link>

        {/* Formulário para Logout */}
        <form method="POST" action="/logout">
          <input type="hidden" name="_token" value={csrfToken} />
          <button
            type="submit"
            className="block px-4 py-2 hover:bg-gray-200 rounded-md w-full text-left"
          >
            Sair
          </button>
        </form>
      </motion.div>
    )}
  </div>
) : (
  <div className="relative">
    {/* Ícones do Carrinho e Login */}
    <div className="flex space-x-2">
      <button>
        <CiShoppingCart className="text-4xl" />
      </button>
      <button onClick={toggleMenu} className="text-4xl relative z-10">
        <FaRegUserCircle />
      </button>
    </div>

    {/* Dropdown Menu */}
    {isOpen && (
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={itemVariants}
        className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-4 w-40 text-black z-50"
      >
        <Link
          href="/login"
          className="block px-4 py-2 hover:bg-gray-200 rounded-md"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="block px-4 py-2 hover:bg-gray-200 rounded-md"
        >
          Registrar-se
        </Link>
      </motion.div>
    )}
  </div>
)}

        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-700"></div>

      {/* Categories and Links */}
      <div className="w-full max-w-screen-xl mx-auto px-5 py-2 flex justify-between items-center space-x-8 relative">
        
        {/* Categories Dropdown */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="flex items-center space-x-2">
            <AiOutlineMenu className="text-2xl" />
            <span>Categorias</span>
          </button>

          {showCategories && (
            <div className="absolute left-0 right-0 bg-white text-black p-4 grid grid-cols-3 gap-4 shadow-lg z-50 w-screen">
              <a href="/produtos/original" className="hover:underline">Original</a>
              <a href="/produtos/masculino" className="hover:underline">Masculino</a>
              <a href="/produtos/feminino" className="hover:underline">Feminino</a>
              <a href="/produtos/esportivo" className="hover:underline">Esportivo</a>
              <a href="#" className="hover:underline">Unissex</a>
              <a href="#" className="hover:underline">Infantil</a>
            </div>
          )}
        </div>

        {/* Other Links */}
        <a href="#" className="hover:underline">Produtos</a>
        <a href="#" className="hover:underline">Contato</a>
        <a href="https://rastreamento.correios.com.br/app/index.php" className="hover:underline">
          Rastreie Seu Pedido
        </a>
        <a href="#" className="hover:underline">Políticas</a>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-700"></div>
    </nav>
  );
}

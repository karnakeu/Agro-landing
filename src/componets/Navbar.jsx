// import React from "react";
// import logo from "../../src/assets-amelie/logo.png";
// import section from "../../src/assets-amelie/section.png";
// import cart from "../../src/assets-amelie/cart.svg";
// import search from "../../src/assets-amelie/search.svg";
// import social from "../../src/assets-amelie/social.svg";
// import telefon from "../../src/assets-amelie/telefon.svg";
// import geo from "../../src/assets-amelie/geo.svg";
// import messenge from "../../src/assets-amelie/messenge.svg";
// import frame from "../../src/assets-amelie/frame.png";
//  import { useLocation } from 'react-router-dom';
//  import { Link } from 'react-router-dom';


// const Navbar = () => {

//     const { pathname } = useLocation();

//       // Объект с информацией о страницах
//       const pageData = {
//         '/about': { title: 'About', backgroundImage: frame },
//         '/services': { title: 'Services', backgroundImage: frame },
//         '/projects': { title: 'Projects', backgroundImage: frame },
//         '/news': { title: 'News Grid', backgroundImage: frame },
//         '/shop': { 
//           navTitle: 'Shop', 
//           displayTitle: 'Our Shop', 
//           backgroundImage: frame 
//         },
//         '/contact': { title: 'Contact', backgroundImage: frame },
//       };
    
//       // Получаем данные страницы или дефолтные значения
//     const pageInfo = pageData[pathname]  {
//         title: 'Page',
//         backgroundImage: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/page-header-2.webp',
//       };
    
//       // Не рендерим компонент на главной странице
//       if (pathname === '/') return null;
    
//       // Определяем текст для навигации и заголовка
//       const navText = pageInfo.navTitle  pageInfo.title;
//       const displayText = pageInfo.displayTitle || pageInfo.title;
//     return (
   
//         <header className="relative">
//             <div className="flex justify-around items-center px-6 py-3">
//                 <div className="flex items-center">
//                  <img src={logo} alt="Logo" className="" />
//                 </div>

//                 <div className="flex space-x-4">
//                  <img src={social} alt="Twitter" className="" />
//                 </div>

//                 <div className="flex space-x-6 text-sm">
//                     <div className="mt-[10px]">
//                         <img src={telefon} alt="tel" />
//                     </div>
//                 <div className="mt-[10px]">
//                     <p className="font-manrope-semibold grey-scale-3 ">Call anytime</p>
//                     <p className="font-manrope-bold black">+98 (000) - 9630</p>
//                 </div>
//                 <div className="w-[1px] h-[70px] border grey-scale-6"></div>
//                 <div className="mt-[10px]">
//                     <img src={messenge} alt="mess"/>
//                 </div>
//                 <div className="mt-[10px]"> 
//                     <p className="font-manrope-semibold grey-scale-3 ">Send email</p>
//                     <p className="font-manrope-bold black">ambed@agrios.com</p>
//                 </div>
//                 <div className="w-[1px] h-[70px] border grey-scale-6"></div>
//                 <div className="mt-[10px]">
//                     <img src={geo} alt="geo" />
//                 </div>
//                 <div className="mt-[10px]">
//                     <p className="font-manrope-semibold grey-scale-3">380 St Kilda Road</p>
//                     <p className="font-manrope-bold black">Melbourne, Australia</p>
//                 </div>
//                 </div>
//             </div>

    
//             <div className="relative">
//                 <nav className="relative z-10 flex justify-between items-center px-6 py-2 bg-opacity-90"  style={{ backgroundImage: `url(${section})` }}>
//                     <div>
//                         <ul className="flex space-x-15 font-manrope-semibold grey-scale-3 ml-[20px] text-sm">
//                         <li className="cursor-pointer hover:text-green-600">Home</li>
//                         <li className="cursor-pointer hover:text-green-600">About</li>
//                         <li className="cursor-pointer hover:text-green-600">Services</li>
//                         <li className="cursor-pointer hover:text-green-600">Projects</li>
//                         <li className="cursor-pointer hover:text-green-600">News</li>
//                         <li className="cursor-pointer hover:text-green-600">Shop</li>
//                         <li className="cursor-pointer hover:text-green-600">Contact</li>
//                         </ul>
//                     </div>    
//                     <div className="flex space-x-2">
//                         <div className="w-[1px] h-[50px] border grey-scale-6"></div>
//                         <img src={search} alt="Search" />
//                         <img src={cart} alt="Cart" />
//                     </div>
//                 </nav>

                
//                 <div className="absolute inset-0 -z-10 h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${frame})` }}>
    
//                     <div className="absolute inset-0 bg-black opacity-10"></div>

                
//                     <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
//                         <p className="font-manrope-semibold text-sm">HOME / ABOUT</p>
//                         <h1 className="font-manrope-extrabold text-4xl">ABOUT</h1>
//                     </div>
//                 </div>

//             </div>
//          </header>

//     );
// };

// export default Navbar

// // import { useLocation } from 'react-router-dom';
// // import { Link } from 'react-router-dom';

// // const PageHeader = () => {
// //   const { pathname } = useLocation();

// //   // Объект с информацией о страницах
// //   const pageData = {
// //     '/about': { title: 'About', backgroundImage: 'src/assets/wheat.header.jpg' },
// //     '/services': { title: 'Services', backgroundImage: 'src/assets/wheat.header.jpg' },
// //     '/projects': { title: 'Projects', backgroundImage: 'src/assets/wheat.header.jpg' },
// //     '/news': { title: 'News Grid', backgroundImage: 'src/assets/wheat.header.jpg' },
// //     '/shop': { 
// //       navTitle: 'Shop', 
// //       displayTitle: 'Our Shop', 
// //       backgroundImage: 'src/assets/wheat.header.jpg' 
// //     },
// //     '/contact': { title: 'Contact', backgroundImage: 'src/assets/wheat.header.jpg' },
// //   };

// //   // Получаем данные страницы или дефолтные значения
// //   const pageInfo = pageData[pathname]  {
// //     title: 'Page',
// //     backgroundImage: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/page-header-2.webp',
// //   };

// //   // Не рендерим компонент на главной странице
// //   if (pathname === '/') return null;

// //   // Определяем текст для навигации и заголовка
// //   const navText = pageInfo.navTitle  pageInfo.title;
// //   const displayText = pageInfo.displayTitle || pageInfo.title;

// //   return (
// //     <div
// //       className="relative py-20 md:py-36 bg-cover bg-center bg-no-repeat"
// //       style={{ backgroundImage: url(${pageInfo.backgroundImage}) }}
// //     >
// //       <div className="container mx-auto px-4 relative z-10 text-center text-white">
// //         <div className="flex items-center justify-center space-x-3">
// //           <Link
// //             to="/"
// //             className="text-white hover:text-green-400 transition-colors text-base uppercase"
// //           >
// //             HOME
// //           </Link>
// //           <span className="text-gray-400 font-bold">/</span>
// //           <span className="text-white uppercase font-bold">{navText}</span>
// //         </div>
// //         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{displayText}</h1>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PageHeader;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../src/assets-amelie/logo.png";
import section from "../../src/assets-amelie/section.png";
import cart from "../../src/assets-amelie/cart.svg";
import search from "../../src/assets-amelie/search.svg";
import social from "../../src/assets-amelie/social.svg";
import telefon from "../../src/assets-amelie/telefon.svg";
import geo from "../../src/assets-amelie/geo.svg";
import messenge from "../../src/assets-amelie/messenge.svg";
import frameDefault from "../../src/assets-amelie/frame.png"; 

const pageData = {
    "/about": { title: "About", backgroundImage: frameDefault },
    "/services": { title: "Services", backgroundImage: frameDefault },
    "/projects": { title: "Projects", backgroundImage: frameDefault },
    "/news": { title: "News", backgroundImage: frameDefault },
    "/shop": { title: "Shop", backgroundImage: frameDefault },
    "/contact": { title: "Contact", backgroundImage: frameDefault },
};

const Navbar = () => {
    const { pathname } = useLocation();
    const pageInfo = pageData[pathname] || { title: "Page", backgroundImage: frameDefault };

    return (
        <header className="relative">
            <div className="flex justify-around items-center px-6 py-3">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="flex space-x-4">
                    <img src={social} alt="Twitter" />
                </div>

                <div className="flex space-x-6 text-sm">
                    <div className="mt-[10px]">
                        <img src={telefon} alt="tel" />
                    </div>
                    <div className="mt-[10px]">
                        <p className="font-manrope-semibold grey-scale-3">Call anytime</p>
                        <p className="font-manrope-bold black">+98 (000) - 9630</p>
                    </div>
                    <div className="w-[1px] h-[70px] border grey-scale-6"></div>
                    <div className="mt-[10px]">
                        <img src={messenge} alt="mess" />
                    </div>
                    <div className="mt-[10px]">
                        <p className="font-manrope-semibold grey-scale-3">Send email</p>
                        <p className="font-manrope-bold black">ambed@agrios.com</p>
                    </div>
                    <div className="w-[1px] h-[70px] border grey-scale-6"></div>
                    <div className="mt-[10px]">
                        <img src={geo} alt="geo" />
                    </div>
                    <div className="mt-[10px]">
                        <p className="font-manrope-semibold grey-scale-3">380 St Kilda Road</p>
                        <p className="font-manrope-bold black">Melbourne, Australia</p>
                    </div>
                </div>
            </div>

            <div className="relative">
                <nav className="relative z-10 flex justify-between items-center px-6 py-2 bg-opacity-90" style={{ backgroundImage: `url(${section})` }}>
                    <div>
                        <ul className="flex space-x-15 font-manrope-semibold grey-scale-3 ml-[20px] text-sm">
                            <li><Link to="/" className="cursor-pointer hover:text-green-600">Home</Link></li>
                            <li><Link to="/about" className="cursor-pointer hover:text-green-600">About</Link></li>
                            <li><Link to="/services" className="cursor-pointer hover:text-green-600">Services</Link></li>
                            <li><Link to="/projects" className="cursor-pointer hover:text-green-600">Projects</Link></li>
                            <li><Link to="/news" className="cursor-pointer hover:text-green-600">News</Link></li>
                            <li><Link to="/shop" className="cursor-pointer hover:text-green-600">Shop</Link></li>
                            <li><Link to="/contact" className="cursor-pointer hover:text-green-600">Contact</Link></li>
                        </ul>
                    </div>    
                    <div className="flex space-x-2">
                        <div className="w-[1px] h-[50px] border grey-scale-6"></div>
                        <img src={search} alt="Search" />
                        <img src={cart} alt="Cart" />
                    </div>
                </nav>

                {/* Фоновое изображение и заголовок страницы */}
                {pathname !== "/" && (
                    <div className="absolute inset-0 -z-10 h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${pageInfo.backgroundImage})` }}>
                        <div className="absolute inset-0 bg-black opacity-10"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                            <p className="font-manrope-semibold text-sm">HOME / {pageInfo.title.toUpperCase()}</p>
                            <h1 className="font-manrope-extrabold text-4xl">{pageInfo.title}</h1>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
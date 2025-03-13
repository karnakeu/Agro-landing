import React from "react";
import logo from "../../src/assets-amelie/logo.png";
import section from "../../src/assets-amelie/section.png";
import cart from "../../src/assets-amelie/cart.svg";
import search from "../../src/assets-amelie/search.svg";
import social from "../../src/assets-amelie/social.svg";
import telefon from "../../src/assets-amelie/telefon.svg";
import geo from "../../src/assets-amelie/geo.svg";
import messenge from "../../src/assets-amelie/messenge.svg";
import frame from "../../src/assets-amelie/frame.png";


const Navbar = () => {
    return (
   
        <header className="relative">
            <div className="flex justify-around items-center px-6 py-3">
                <div className="flex items-center">
                 <img src={logo} alt="Logo" className="" />
                </div>

                <div className="flex space-x-4">
                 <img src={social} alt="Twitter" className="" />
                </div>

                <div className="flex space-x-6 text-sm">
                    <div className="mt-[10px]">
                        <img src={telefon} alt="tel" />
                    </div>
                <div className="mt-[10px]">
                    <p className="font-manrope-semibold grey-scale-3 ">Call anytime</p>
                    <p className="font-manrope-bold black">+98 (000) - 9630</p>
                </div>
                <div className="w-[1px] h-[70px] border grey-scale-6"></div>
                <div className="mt-[10px]">
                    <img src={messenge} alt="mess"/>
                </div>
                <div className="mt-[10px]"> 
                    <p className="font-manrope-semibold grey-scale-3 ">Send email</p>
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
                <nav className="relative z-10 flex justify-between items-center px-6 py-2 bg-opacity-90"  style={{ backgroundImage: `url(${section})` }}>
                    <div>
                        <ul className="flex space-x-15 font-manrope-semibold grey-scale-3 ml-[20px] text-sm">
                        <li className="cursor-pointer hover:text-green-600">Home</li>
                        <li className="cursor-pointer hover:text-green-600">About</li>
                        <li className="cursor-pointer hover:text-green-600">Services</li>
                        <li className="cursor-pointer hover:text-green-600">Projects</li>
                        <li className="cursor-pointer hover:text-green-600">News</li>
                        <li className="cursor-pointer hover:text-green-600">Shop</li>
                        <li className="cursor-pointer hover:text-green-600">Contact</li>
                        </ul>
                    </div>    
                    <div className="flex space-x-2">
                        <div className="w-[1px] h-[50px] border grey-scale-6"></div>
                        <img src={search} alt="Search" />
                        <img src={cart} alt="Cart" />
                    </div>
                </nav>

                
                <div className="absolute inset-0 -z-10 h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${frame})` }}>
    
                    <div className="absolute inset-0 bg-black opacity-10"></div>

                
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                        <p className="font-manrope-semibold text-sm">HOME / ABOUT</p>
                        <h1 className="font-manrope-extrabold text-4xl">ABOUT</h1>
                    </div>
                </div>

            </div>
         </header>

    );
};

export default Navbar
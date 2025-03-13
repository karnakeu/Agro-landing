import React from "react";
import Logo from "/src/assets/footer/1.svg";
import Logo2 from "/src/assets/footer/2.svg";
import Logo3 from "/src/assets/footer/3.svg";
import Logo4 from "/src/assets/footer/4.svg";
import Logo5 from "/src/assets/footer/5.svg";
import Icon from "/src/assets/footer/6.svg";
import Icon2 from "/src/assets/footer/7.svg";
import Icon3 from "/src/assets/footer/8.svg";
import Icon4 from "/src/assets/footer/9.svg";
import Icon5 from "/src/assets/footer/10.svg";

// Константы для повторяющихся данных
const socialIcons = [
  { src: Logo2, alt: "Logo2" },
  { src: Logo3, alt: "Logo3" },
  { src: Logo4, alt: "Logo4" },
  { src: Logo5, alt: "Logo5" },
];

const exploreLinks = [
  { text: "About", icon: Icon },
  { text: "Services", icon: Icon },
  { text: "Our Projects", icon: Icon },
  { text: "Meet the Farmers", icon: Icon },
  { text: "Latest News", icon: Icon },
  { text: "Contact", icon: Icon },
];

const newsItems = [
  {
    title: "Bringing Food Production Back To Cities",
    date: "July 5, 2022",
  },
  {
    title: "The Future of Farming, Smart Irrigation Solutions",
    date: "July 5, 2022",
  },
];

const contactInfo = [
  { icon: Icon2, text: "666 888 0000" },
  { icon: Icon3, text: "needhelp@company.com" },
  { icon: Icon4, text: "80 broklyn golden street line New York, USA" },
];

const Footer = () => {
  return (
    <section className="w-full">
      {/* Верхняя часть футера */}
      <div className="flex flex-row bg-black-3 h-auto max-w-full px-[120px] py-[60px] gap-[30px]">
        {/* Колонка 1: Логотип и соцсети */}
        <div className="flex flex-col flex-1">
          <img src={Logo} alt="Logo" />
          <p className="grey-scale-8 font-manrope-medium mt-[21px]">
            There are many variations of passages of lorem ipsum available, but
            the majority suffered.
          </p>
          <div className="flex gap-[10px] mt-[21px]">
            {socialIcons.map((icon, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-3xl bg-black-1 h-[40px] w-[40px]"
              >
                <img src={icon.src} alt={icon.alt} />
              </div>
            ))}
          </div>
        </div>

        {/* Колонка 2: Explore */}
        <div className="flex flex-col flex-1 ml-[120px]">
          <h3 className="font-manrope-bold white hover:text-[#eec044] transition-colors duration-300">
            Explore
          </h3>
          <div className="flex flex-row mb-[19px]">
            <div className="bg-green rounded-sm w-[45px] h-[4px] mt-[9px]" />
            <div className="bg-green rounded-xl h-[4px] w-[4px] mt-[9px] ml-[6px]" />
          </div>
          {exploreLinks.map((link, index) => (
            <div
              key={index}
              className="flex items-center mt-[9px] hover:text-[#eec044] transition-colors duration-300"
            >
              <img
                src={link.icon}
                alt="Icon"
                width={12}
                height={12}
                className="hover:opacity-75 transition-opacity duration-300" // Добавлен hover для иконки
              />
              <span className="ml-[14px] grey-scale-8 font-manrope-medium hover:text-[#eec044] transition-colors duration-300">
                {link.text}
              </span>
            </div>
          ))}
        </div>

        {/* Колонка 3: News */}
        <div className="flex flex-col flex-1 mr-[50px]">
          <h3 className="font-manrope-bold white">News</h3>
          <div className="flex flex-row mb-[19px]">
            <div className="bg-green rounded-sm w-[45px] h-[4px] mt-[9px]" />
            <div className="bg-green rounded-xl h-[4px] w-[4px] mt-[9px] ml-[6px]" />
          </div>
          {newsItems.map((news, index) => (
            <div key={index} className="mt-[9px]">
              <h4 className="white font-manrope-bold">{news.title}</h4>
              <p className="orange font-manrope-regular">{news.date}</p>
            </div>
          ))}
        </div>

        {/* Колонка 4: Contact */}
        <div className="flex flex-col flex-1">
          <h3 className="font-manrope-bold white">Contact</h3>
          <div className="flex flex-row mb-[19px]">
            <div className="bg-green rounded-sm w-[45px] h-[4px] mt-[9px]" />
            <div className="bg-green rounded-xl h-[4px] w-[4px] mt-[9px] ml-[6px]" />
          </div>
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-center mt-[10px]">
              <img src={info.icon} alt="Icon" width={14} height={18} />
              <span className="ml-[9px] grey-scale-8 font-manrope-medium">
                {info.text}
              </span>
            </div>
          ))}
          <div className="mt-[26px] relative">
            <input
              type="email"
              id="email"
              name="email"
              className="bg-white block w-full h-[50px] rounded-[10px] p-[16px_71px_17px_21px] grey-scale-3"
              placeholder="Your Email Address"
              required
            />
            <button className="bg-green items-center justify-center absolute right-0 top-0 h-full w-[50px] flex rounded-r-[10px]">
              <img src={Icon5} alt="Icon5" width={13} height={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className="flex flex-row bg-black-1 h-auto max-w-full px-[120px] py-[20px] justify-between">
        <div className="grey-scale-8 font-manrope-semibold">
          © All Copyright 2024 by shawonetc Themes
        </div>
        <div className="flex flex-row gap-[15px]">
          <div className="grey-scale-8 font-manrope-semibold hover:text-[#eec044] transition-colors duration-300">
            Terms of Use
          </div>
          <div className="bg-grey-scale-8 w-[2px] h-[14px] mt-[5px]" />
          <div className="grey-scale-8 font-manrope-semibold hover:text-[#eec044] transition-colors duration-300">
            Privacy Policy
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

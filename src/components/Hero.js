/* eslint-disable @next/next/no-img-element */
// import content
import React, { useState,useEffect } from 'react';
import { content } from "../data/Content";

const Hero = () => {
  const { hero } = content;
  const [query, setQuery] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'Log' },
    { id: 2, name: 'Poster' },
    { id: 3, name: 'Video' },
    { id: 4, name: 'Image' },
    { id: 5, name: 'Text' },
    { id: 6, name: 'Audio' },
  ]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const [placeholder, setPlaceholder] = useState('');
  const [index, setIndex] = useState(0);
  
  // Define an array of placeholder texts to cycle through
  const texts = ['Search Notes', 'Search Projects'];

  // Use the useEffect hook to update the placeholder state variable
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholder(texts[index]);
      setIndex((index + 1) % texts.length);
    }, 3000); // Change the duration here as desired
    
    return () => clearInterval(intervalId);
  }, [index, texts]);

  const results = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  
  const [text, setText] = useState('');
  const [aindex, setAindex] = useState(0);
  const messages = [
    'Free Notes: Access our extensive library of study material',
    'Test Your Knowledge: Take our Free Mock Tests',
    'DIY Project Ideas: Learn by Doing with Step-by-Step Guides',
    'Resources for Students: Everything you need to succeed',
    'Join Our Community: Collaborate, Learn, and Grow with Us',
  ];

  useEffect(() => {
    if (aindex < messages.length) {
      setTimeout(() => {
        setText(messages[aindex]);
        setAindex(aindex + 1);
      }, 3000);
    } else {
      setAindex(0);
    }
  }, [aindex, messages]);

 

  return (
    <>
    <section id="home" className="overflow-hidden">
      <div className="md:hidden px-6 pt-5">
     
        <input
          type="text"
          className="w-full py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
        />

        {query.length > 0 && (
          <div className="absolute w-full mt-1 rounded-md bg-white shadow-lg z-10">
            {results.length > 0 ? (
              <ul>
                {results.map((item) => (
                  <li key={item.id} className="px-3 py-2 hover:bg-gray-100">
                    <a href="#">{item.name}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-3 py-2">No results found</div>
            )}
          </div>
        )}
        <h2 className="text-blue-400 mt-5 text-center text-2xl font-mono " >Padho Chahein Kahi Pe!</h2>
        <h2 className="text-blue-400  text-2xl text-center font-mono " >Notes Milega Yahi Pe!</h2>
      </div>
      
      
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
       

        {/* first col */}
        <div className="pb-16 px-6 pt-5 " data-aos="fade-down">
        <h2 className="hidden md:block mb-12 text-blue-200 text-center text-xl font-mono"> {text.split('').map((char, aindex) => (
          <span key={aindex} className="typewriter-char" style={{ animationDelay: `${aindex * 50}ms` }}>
            {char}
          </span>
        ))}</h2>
        <div className="hidden lg:block relative mt-4 lg:mt-0 lg:mx-4 mb-36">
       
  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
    <svg
      className="w-4 h-4 text-gray-600 dark:text-gray-300"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  </span>

  <input
    type="text"
    className="w-full py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600"
    placeholder={placeholder}
    value={query}
    onChange={handleChange}
  />

  {query.length > 0 && (
    <div className="absolute w-full mt-1 rounded-md bg-white shadow-lg z-10">
      {results.length > 0 ? (
        <ul>
          {results.map((item) => (
            <li key={item.id} className="px-3 py-2 hover:bg-gray-100">
              <a href="#">{item.name}</a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="px-3 py-2">No results found</div>
      )}
    </div>
  )}
</div>

<h2 className="hidden md:block text-blue-400 text-4xl font-mono">Padho Chahein Kahi Pe!</h2>
<h2 className="hidden md:block text-blue-400 text-4xl font-mono">Notes Milega Yahi Pe!</h2>

          
          <br />
          
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3 className="text-4xl font-serif font-bold " >{content.count}</h3>
                <p className="text-sm font-mono font-semibold ">{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className=" md:h-[37rem] h-18rem">
          <img
            src="home1.png"
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
         
        </div>
      </div>
    </section></>
  );
};

export default Hero;
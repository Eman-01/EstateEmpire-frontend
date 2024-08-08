import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function HomePage() {
  const navigate = useNavigate();

  const goToRentPage = () => {
    navigate('/rent');
  };

  const goToBuyPage = () => {
    navigate('/buy');
  };

  return (
    <div>
      <header className="header">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={2200}
        >
          <div>
            <img src="https://wallpapers.com/images/featured/beautiful-house-x1yu28g8twzle26l.jpg" alt="House 1" />
          </div>
          <div>
            <img src="https://thumbs.dreamstime.com/z/street-residential-houses-suburban-neighborhood-45318821.jpg?ct=jpeg" alt="House 2" />
          </div>
          <div>
            <img src="https://thumbs.dreamstime.com/z/residential-streets-parked-cars-along-row-suburban-houses-well-trimmed-front-yard-landscape-subdivision-suburbs-dallas-316227704.jpg?ct=jpeg" alt="House 3" />
          </div>
          <div>
            <img src="https://thumbs.dreamstime.com/z/row-contemporary-new-houses-along-suburban-street-91560421.jpg?ct=jpeg" alt="House 4" />
          </div>
          <div>
            <img src="https://thumbs.dreamstime.com/z/aerial-top-down-view-houses-neighborhood-columbus-ohio-drone-shot-307480661.jpg?ct=jpeg" alt="House 5" />
          </div>
          <div>
            <img src="https://thumbs.dreamstime.com/z/new-modern-eco-friendly-passive-house-photovoltaic-system-roof-landscaped-yard-solar-panels-gable-307272838.jpg?ct=jpeg" alt="House 6" />
          </div>
          <div>
            <img src="https://thumbs.dreamstime.com/z/modern-house-front-view-dusk-modern-garage-modern-house-front-view-dusk-modern-garage-high-quality-photo-311275637.jpg?ct=jpeg" alt="House 7" />
          </div>
        </Carousel>
      </header>

      <h1 className='text-center text-4xl font-bold font-sans p-8'>About Us</h1>
      <div className='py-20 pl-40 flex'>
        <img className="w-64 h-64 rounded-full" src="https://st2.depositphotos.com/3591429/10778/i/450/depositphotos_107781882-stock-photo-panorama-city-and-buildings.jpg" alt="Rounded avatar" />
        <p className='px-14 text-center'>
          EstateEmpire is a comprehensive real estate management application designed to streamline and enhance the property management experience. Whether you're a property owner, manager, or tenant, EstateEmpire offers a user-friendly interface to handle all your real estate needs efficiently. With features that include property listing, tenant management, lease tracking, maintenance requests, and financial reporting, the application ensures that every aspect of property management is covered. EstateEmpire's robust search functionality allows users to find properties for rent or purchase using text and image descriptions, making it easier to connect with potential buyers or renters. Its intuitive design and powerful tools help simplify complex tasks, saving time and improving productivity for all users involved in the real estate market. 
        </p>
      </div>

      <div className='flex place-content-center p-4'>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="https://thumbs.dreamstime.com/b/wooden-house-inscription-rent-rental-property-apartments-services-realtor-affordable-housing-prices-real-estate-129678669.jpg" alt="Rent" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Rentals
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Renting a property offers flexibility, lower upfront costs, and freedom from maintenance responsibilities. It allows you to move easily for job opportunities or personal reasons, and often includes amenities like gyms and pools. Consider renting to maintain financial flexibility and enjoy hassle-free living.
            </p>
            <button 
              className='px-6 py-2 text-white font-semibold bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out' 
              onClick={goToRentPage}>
              Rent
            </button>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-8">
          <a href="#">
            <img className="rounded-t-lg" src="https://thumbs.dreamstime.com/z/small-house-mockup-background-keys-concept-selling-buying-houses-sale-real-estate-market-banner-copy-space-322836898.jpg?ct=jpeg" alt="Buy" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Buy a Home
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Buying a property can be a wise investment, offering stability and the potential for long-term financial growth. Homeownership allows you to build equity, benefit from tax advantages, and have the freedom to customize your space. Consider buying to secure your financial future and create a lasting home.
            </p>
            <button 
              className='px-6 py-2 text-white font-semibold bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out' 
              onClick={goToBuyPage}>
              Buy
            </button>
          </div>
        </div>
      </div>

      <footer className="bg-blue-600 mt-20">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">EstateEmpire</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="text-black hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                <a href="#" className="text-black hover:underline me-4 md:me-6">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-black hover:underline me-4 md:me-6">Licensing</a>
              </li>
              <li>
                <a href="#" className="text-black hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-black sm:text-center dark:text-gray-400">
            <a href="https://flowbite.com/" className="text-black hover:underline">EstateEmpire™</a>. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;

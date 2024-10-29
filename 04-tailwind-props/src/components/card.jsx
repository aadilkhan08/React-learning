import React from 'react';

function Card({ title = 'Hello ji...', description = 'Me bhi apne bare me nahi janta hu' }) {
  return (
    <div className="w-full sm:w-80 flex-shrink-0 overflow-hidden rounded-lg shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src="https://images.pexels.com/photos/28792244/pexels-photo-28792244/free-photo-of-seagull-perched-on-rock-by-aegean-sea-in-naxos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Random Image"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

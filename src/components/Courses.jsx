const people = [
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D",
    courseName: "UI/UX Design Masterclass",
    price: "$49.99",
    rating: 3,
  },
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1731983568664-9c1d8a87e7a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D",
    courseName: "UI/UX Design Masterclass",
    price: "$49.99",
    rating: 2,
  },
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://plus.unsplash.com/premium_vector-1720082660197-b1a163e1372a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D",
    courseName: "UI/UX Design Masterclass",
    price: "$49.99",
    rating: 4.7,
  },
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://plus.unsplash.com/premium_vector-1731903231613-ef67793a1597?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D",
    courseName: "UI/UX Design Masterclass",
    price: "$49.99",
    rating: 5,
  },
  // More people...
];

export default function Courses() {
  return (
    <div id="course" className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-black sm:text-5xl">
            Explore Our Courses
          </h2>
          <p className="mt-6 text-lg/8 text-gray-400">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="rounded-lg border shadow-xl border-gray-300 pb-6 text-left"
            >
              {/* Image with only top corners rounded */}
              <div className="rounded-t-lg overflow-hidden">
                <img
                  alt={person.name}
                  src={person.imageUrl}
                  className="w-full h-60 object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-4 mt-4 space-y-1">
                <p className="mt-2 text-black text-lg font-bold">
                  {person.courseName}
                </p>
                <h3 className="text-sm tracking-tight text-gray-600">
                  {person.name}
                </h3>
                <p className="text-sm font-bold text-black">{person.price}</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-xs font-semibold text-black flex items-center gap-1">
                    <span className="text-orange-800 text-sm">
                      {person.rating}
                    </span>
                    {[...Array(Math.floor(person.rating))].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </p>
                  <a
                    className="flex items-center gap-2 bg-blue-500 px-3 pb-1.5 pt-1 font-medium rounded-full text-white text-sm hover:scale-105 transition-all duration-300"
                    href={`/view-course?title=${encodeURIComponent(
                      person.courseName
                    )}`}
                  >
                    view course
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 mt-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

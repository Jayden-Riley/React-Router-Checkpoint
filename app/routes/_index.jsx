import { Link, useLoaderData } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export let loader = async () => {
  const movies = [
    {
      id: 1,
      title: "Inception",
      genre: "Sci-Fi",
      rating: 8.8,
      releaseYear: 2010,
      description:
        "A skilled thief leads a team on a mission to plant an idea in someone's mind.",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "The Matrix",
      genre: "Action",
      rating: 8.7,
      releaseYear: 1999,
      description:
        "A hacker discovers the truth about his reality and joins a rebellion against its controllers.",
      trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
    },
    {
      id: 3,
      title: "House of the Dragon",
      genre: "Drama/Fantasy",
      rating: 8.5,
      releaseYear: 2022,
      description:
        "A prequel to Game of Thrones, this series delves into the Targaryen civil war that tore Westeros apart.",
      trailer: "https://www.youtube.com/embed/DotnJ7tTA34",
    },
    {
      id: 4,
      title: "Transformers: The Last Knight",
      genre: "Action/Sci-Fi",
      rating: 5.2,
      releaseYear: 2017,
      description:
        "Humans and Transformers are at war. Optimus Prime is gone, and the key to saving the future lies in uncovering the hidden history of Transformers on Earth.",
      trailer: "https://www.youtube.com/embed/AntcyqJ6brc",
    },
    {
      id: 5,
      title: "Need for Speed",
      genre: "Action",
      rating: 6.4,
      releaseYear: 2014,
      description:
        "A street racer who was framed by a wealthy business associate joins a cross-country race for revenge and redemption.",
      trailer: "https://www.youtube.com/embed/u3wtVI-aJuw",
    },
    {
      id: 6,
      title: "Call of Duty: Modern Warfare 2",
      genre: "Action/Thriller",
      rating: 9.0,
      releaseYear: 2022,
      description:
        "This gripping installment of the Call of Duty series brings you face-to-face with global conflict, betrayal, and high-stakes missions.",
      trailer: "https://www.youtube.com/embed/r72GP1PIZa0",
    },
    {
      id: 7,
      title: "Fauda",
      genre: "Drama/Thriller",
      rating: 8.3,
      releaseYear: 2015,
      description:
        "An undercover Israeli unit embarks on covert missions, exploring the complexity of the Israeli-Palestinian conflict.",
      trailer: "https://www.youtube.com/embed/igV3BoL9vEY",
    },
    {
      id: 8,
      title: "Jurassic Park",
      genre: "Adventure/Sci-Fi",
      rating: 8.2,
      releaseYear: 1993,
      description:
        "A group of visitors to a theme park featuring genetically-engineered dinosaurs find themselves in a life-and-death struggle for survival.",
      trailer: "https://www.youtube.com/embed/QWBKEmWWL38",
    },
    {
      id: 8,
      title: "Mortal Kombat",
      genre: "Action/Fantasy",
      rating: 7.3,
      releaseYear: 1995,
      description:
        "A group of martial artists compete in a deadly tournament to save Earth from the forces of an evil sorcerer.",
      trailer: "https://www.youtube.com/embed/KQHEKq8ok1s",
    },
  ];
  return movies;
};

export default function Index() {
  let movies = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white py-5">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">🎬 Movie Explorer</h1>
          <p className="mt-2 text-lg">Discover movies and their trailers!</p>
        </div>
      </header>
      <main className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800">
                  {movie.title}
                </h2>
                <p className="text-sm text-gray-600">{movie.genre}</p>
                <p className="text-gray-700 mt-2">
                  <strong>Rating:</strong> {movie.rating}
                </p>
                <Link
                  to={`/movie/${movie.id}`}
                  className="block mt-4 text-center bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

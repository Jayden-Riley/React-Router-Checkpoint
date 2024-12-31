import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

// Movie data (you might load this from a database in a real-world app)
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

export const loader = async ({ params }) => {
  const movie = movies.find((m) => m.id === parseInt(params.id));
  if (!movie) {
    throw new Response("Movie Not Found", { status: 404 });
  }
  return json(movie);
};

export default function Movie() {
  const movie = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto py-10">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800">{movie.title}</h1>
          <p className="text-gray-700 mt-4">{movie.description}</p>
          <div className="mt-6">
            <iframe
              width="100%"
              height="400"
              src={movie.trailer}
              title="Movie Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
          <a
            href="/"
            className="mt-6 inline-block bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

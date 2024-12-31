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
  ];
  return movies;
};

export default function Index() {
  return <div></div>;
}

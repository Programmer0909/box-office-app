import ShowCard from "./ShowCard";

const ShowGrid = ({ shows }) => {
  return (
    <div>
      {shows.map((data) => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : '/notfound.png'}
          summary={data.show.summary}
        />
      ))}
    </div>
  );
};

export default ShowGrid;


// C:\Users\LENOVO\OneDrive\Desktop\New folder (4)\Box-office-app\box-office\public\notfound.png
export default function AppTitle(props) {
  const {
    Title = "Box-Office-App",
    SubTitle = "Are you looking for a movie or an actor?",
  } = props;
  return (
    <div>
      <h1>{Title}</h1>
      <p>{SubTitle}</p>
    </div>
  );
}

function Card(props) {
  return (
    <div className="border p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">
        {props.title}
      </h2>

      <p className="mt-2">
        {props.description}
      </p>
    </div>
  );
}

export default Card;
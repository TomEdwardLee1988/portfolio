function Card(props) {
  return (
    <section className='card'>
      <img src={`../images/${props.image}`} className='card--image' />
      <div className='container'>
        <h2 className='card--country'>{props.country}</h2>
        <p className='card--attraction'>{props.attraction}</p>
        <h2 className='card--date'>{props.date}</h2>
        <p className='card--text'>{props.text}</p>
      </div>
    </section>
  );
}

export default Card;

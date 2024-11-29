import './style.css';

const TShirtCard = ({ name, price }) => {
  return(
<div style={{ textAlign: 'center', width: 150}}>
      <p>{name}</p>
      <p style={{ fontWeight: 'bold'}}>{price}</p>
    </div>
  )
}
export default TShirtCard;
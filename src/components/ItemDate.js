import "./ItemDate.css";
function ItemDate(props) {
  //assume that data is fetched from api call
  const day = props.day;
  const month = props.month;
  const year = props.year;

  return (
    <div className="mfgdate">
      <span> {day} </span>
      <span> {month} </span>
      <span> {year} </span>
    </div>
  );
}
export default ItemDate;

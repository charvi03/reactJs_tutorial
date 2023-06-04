import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";
import Card from "./components/Card";

function App() {
  const response = [
    //array objects
    {
      itemName: "Shampoo",
      itemDate: "15",
      itemMonth: "june",
      itemYear: "2001",
    },
    {
      itemName: "Powder",
      itemDate: "17",
      itemMonth: "march",
      itemYear: "2002",
    },
    {
      itemName: "Soap",
      itemDate: "21",
      itemMonth: "February",
      itemYear: "2001",
    },
  ];
  return (
    <div>
      <Card>
        <Item name={response[0].itemName}>Hello i am first item</Item>
        <ItemDate
          day={response[0].itemDate}
          month={response[0].itemMonth}
          year={response[0].itemYear}
        ></ItemDate>
        <Item name={response[1].itemName}></Item>
        <ItemDate
          day={response[1].itemDate}
          month={response[1].itemMonth}
          year={response[1].itemYear}
        ></ItemDate>
        <Item name={response[2].itemName}></Item>
        <ItemDate
          day={response[2].itemDate}
          month={response[2].itemMonth}
          year={response[2].itemYear}
        ></ItemDate>
        <div className="App">Hello world</div>;
      </Card>
    </div>
  );
}

export default App;

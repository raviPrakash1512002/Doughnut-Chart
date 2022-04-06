import ChartComponent from "./ChartComponent";
// import "./styles.css";

export default function App() {
  const data = [
    { value: 36 },
    { value: 21},
    { value: 18},
    { value: 14 },
    { value: 9 },
    { value: 2}
  ];

  return (
    <div className="App">
      <ChartComponent data={data} />
    </div>
  );
}
import React from 'react';
import './App.css';

function ReactAppTitle(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>The best place to buy vehicles online</h2>
      <h3>Choose Options</h3>
      <div>
        <span>Select Type:</span>
        <select>
          <option value="all">All</option>
          <option value="cars">Cars</option>
          <option value="trucks">Trucks</option>
          <option value="convertibles">Convertibles</option>
        </select>
      </div>
      <div>
        <span>New only</span><input type="checkbox" name="test" checked />
      </div>
    </div>
  )
}

function VehicleTableHeader(props) {
  return (
    <thead>
      <tr>
        <th>{props.columns[0]}</th>
        <th>{props.columns[1]}</th>
        <th>{props.columns[2]}</th>
        <th>{props.columns[3]}</th>
      </tr>
    </thead>
  )
}

function VehicleTable(props) {
  return (<table>
    <VehicleTableHeader columns={["Year", "Model", "Price", "Buy"]} />
    <tbody>
      <tr>
        <td>{props.item.year}</td>
        <td>{props.item.model}</td>
        <td>{props.item.price}</td>
        <td><button>Buy Now</button></td>
      </tr>
    </tbody>
  </table>)
}

function VehicleList(props) {
  return (
    <div>
      <h3>{props.type}</h3>
      {
        props.vehicles.map((vehicle) => <VehicleTable item={vehicle} />)
      }
    </div>
  )
}

function TransportApp(props) {
  return (
    <div>
      <ReactAppTitle title="Welcome to React Transportation" />
      <VehicleList type={props.vehicleTypes[1]} vehicles={[{ year: 2013, model: 'A', price: '$32000' }, { year: 2011, model: 'B', price: '$4400' }, { year: 2016, model: 'B', price: '$15500' }]} />
      <VehicleList type={props.vehicleTypes[2]} vehicles={[{ year: 2014, model: 'D', price: '$18000' }, { year: 2013, model: 'E', price: '$4400' }]} />
      <VehicleList type={props.vehicleTypes[3]} vehicles={[{ year: 2009, model: 'F', price: '$2000' }, { year: 2010, model: 'G', price: '$6000' }, { year: 2012, model: 'H', price: '$15500' }, { year: 2017, model: 'M', price: '$50000' }]} />
    </div>
  )
}

function App() {
  return (
    <TransportApp vehicleTypes={["All", "Cars", "Trucks", "Convertibles"]} />
  );
}

export default App;

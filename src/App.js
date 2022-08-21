import Content from './Content.json';

const SCP = Content.map(

(scp) => {
  return (
    <div key={scp.item} className="border rounded shadow p-3 mb-3">
      <h1 className="text-center">{scp.item}</h1>
      <p className="text-center">Class: {scp.class}</p>
      <p className="text-center">Description: {scp.description}</p>
      <p className="text-center">Containment: {scp.containment}</p>
      <p className="text-center"><img src={scp.image} alt={scp.item} className="border rounded" style={{"max-width": "300px", "height": "auto"}}></img></p>
    </div>
  );
}

);

function App() {
  return (
    <div>
      {SCP}
    </div>
  );
}

export default App;
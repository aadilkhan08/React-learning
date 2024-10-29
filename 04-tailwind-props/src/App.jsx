import './App.css';
import Card from './components/card';

function App() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      <Card
        title="Aadil"
        description="Lorem ipsum dolor sit amet, "
      />
      <Card title="Seagull" description="A beautiful bird chilling by the sea." />
      <Card /> {/* This will use the default title and description */}
    </div>
  );
}

export default App;

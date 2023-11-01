
import './App.css';
import MyButton from './components/Mybutton'
function App() {
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  return (
    <div className="App">
      <h3>Wellcome to my app</h3>
      <img
        className="avatar"
        src={`${user.imageUrl}`}
        alt={'Photo of ' + user.name}
        style={{
          width: `${user.imageSize}px`,
          height: `${user.imageSize}px`
        }}
      />
      <MyButton />
    </div>
  );
}

export default App;

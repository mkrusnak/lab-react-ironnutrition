// import { Card, Row, Col, Divider, Input, Button } from 'antd';
import './App.css';
import foods from './foods.json';
import {useState} from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import {Button} from 'antd';


function App() {

  const [myFood, setMyFood] = useState(foods);
  const [myFoodCopy, setMyFoodCopy] = useState(foods);
  const [hidden, setHidden] = useState(false);

  const addNewFood = (data) => {
    const updatedFood = [...myFood, data]
    setMyFood(updatedFood);
    setMyFoodCopy(updatedFood); 
  }

  const searchFood = (word) => {
    console.log(word)
    const results = myFoodCopy.filter((el) => {
      return el.name.toLowerCase().includes(word.toLowerCase());
    })
    setMyFood(results);
  }

const deleteFood = (index) => {
  const updatedList = [...myFood];
  updatedList.splice(index, 1);
  setMyFood(updatedList);
  setMyFoodCopy(updatedList); 
}

const formHide = () => {
   setHidden((status) => !status)
}



  return (

    <div className="App">
    <h1>Food List</h1>
    <Search searchFood = {searchFood} />
    
    {!hidden && <AddFoodForm addNewFood={addNewFood}/>}
      <Button type='primary' onClick={formHide}>{hidden ? "Add New Food" : "Hide Form"}</Button>
      
    <div className='foodlist'>
     {myFood.map((el, i) => {
      return(
        <div className='food'>
        <FoodBox food={el} deleteFood={deleteFood} index={i}/>
        </div>
      )
     })}
     {myFood.length === 0 && (
            <div>
              <h3>Nothing here</h3>
              <img src="https://i.pinimg.com/236x/61/c7/80/61c780b045f999daacfd85e6f5ee96c8.jpg" alt=""></img>
            </div>
          )}
     </div>
    </div>
  );
}

export default App;

import './App.css';
import foodsJSON from './foods.json';
import { useState } from 'react';
import FoodBox from './Components/FoodBox/FoodBox';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import AddFoodForm from './Components/AddFoodForm/AddFoodForm';
import Search from 'antd/lib/transfer/search';


function App() {
  const [foodList, setFoodList] = useState(foodsJSON)
  const [foodListData, setFoodListData] = useState(foodsJSON);

  const addNewFood = (newFood) => {
    const updatedFoodList = [...foodList, newFood];
    const updatedFoodListData = [...foodListData, newFood];

    setFoodListData(updatedFoodListData);
    setFoodList(updatedFoodList);
  };

  const searchFilter = (searchQuery) => {
    let filteredFoods = foodsJSON.filter((food) =>
      food.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    console.log(filteredFoods);
    setFoodList(filteredFoods);
  };

  
  return <div className="App">
    <Row>
      <AddFoodForm addFood={addNewFood} />
    </Row>
    <Row>
      <Search search={searchFilter} />
    </Row>
    <Divider>List</Divider>
    <Row >
    {foodList.map((food) => {
    return <FoodBox food={food} />;
      
    })
    }
    

    </Row>
  </div>;
  
}
export default App;
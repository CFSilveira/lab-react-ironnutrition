import './App.css';
import foodsJSON from './foods.json';
import { useState } from 'react';
import FoodBox from './Components/FoodBox/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './Components/AddFoodForm/AddFoodForm';
import Search from './Components/Search/Search';


function App() {
  const [foodList, setFoodList] = useState(foodsJSON)
  const [showForm, setShowForm] = useState(true);


  const deleteFood = (foodName) => {
    const removedFood = foodList.filter((ele) => {
      return ele.name !== foodName;
    });
    setFoodList(removedFood);
  };

  const toggleShow = () => {
    setShowForm(!showForm);
    console.log(showForm);
  };

  const addNewFood = (newFood) => {
    const updatedFoodList = [...foodList, newFood];
    setFoodList(updatedFoodList);
  };

  const searchFilter = (searchQuery) => {
    let filteredFoods = foodList.filter((dish) =>
      dish.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    setFoodList(filteredFoods);
  };
 
  return <div className="App">
      {showForm &&
      <AddFoodForm addFood={addNewFood} />}

      <Button onClick={toggleShow} > {showForm ? 'Hide Form' : 'Add New Food'} </Button>

      <Search menu={searchFilter} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foodList.map((food) => {
        return <FoodBox food={food} deleteFood={deleteFood}/>;
        })
      }
      </Row>
  </div>;
  
}
export default App;
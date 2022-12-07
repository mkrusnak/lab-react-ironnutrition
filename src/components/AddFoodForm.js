import { useState} from "react";
import { Divider, Input} from 'antd';

// Iteration 4
function AddFoodForm(props) {
    const {addNewFood} = props
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const submitHandler = (event) => {
         event.preventDefault();
         addNewFood({
            name,
            image,
            calories,
            servings
         })
    };

    const imageChange = (event) => {
        setImage(event.target.value)
    };

    const nameChange = (event) => {
        setName(event.target.value)
    };

    const caloriesChange = (event) => {
        setCalories(event.target.value)
    };

    const servingsChange = (event) => {
        setServings(event.target.value)
    };

  return (
    <form onSubmit={submitHandler}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={nameChange} />

      <label>Image</label>
      <Input value={image} type="text" onChange={imageChange} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={caloriesChange} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={servingsChange} />

      <button className="create-bttn" type="submit">Create</button>
    </form>
  );
};

export default AddFoodForm;

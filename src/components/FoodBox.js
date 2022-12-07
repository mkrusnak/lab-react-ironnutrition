import { Card, Col, Button } from 'antd';

const FoodBox = (props) => {

    const {index, deleteFood} = props;

    const {name, calories, servings, image} = props.food;

return(
    <Col>
        <Card title={name} style={{width: 230, height: 300, margin: 10}}>
            <img src={image} height={60} alt="food-img"/>
            <p>Calories: {calories}</p>
            <p>Servings: {servings}</p>
            <p>
            <b>Total Calories: {calories*servings} </b> kcal
          </p>
          <Button type="primary" onClick={() => deleteFood(index)}> Delete </Button>
        </Card>
    </Col>
)
}

export default FoodBox;
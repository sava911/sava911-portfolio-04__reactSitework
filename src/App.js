import React, {Component} from 'react';
import './App.css';
import Car from "./Car/Car";

class App extends Component {

    state = {
        cars: [
            {name: 'Ford', year: '2018'},
            {name: 'Audi', year: '2016'},
            {name: 'Mazda', year: '2010'}
        ],
        pageTitle: 'React components',
        showCars: false
    }

    tooggleTitleHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    inputHandler () {

    }

    render() {
        const divStyle = {
            textAlign: 'center'
        }


        return (
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>
                <button onClick={this.tooggleTitleHandler}>change title</button>

                {this.state.showCars ?
                    this.state.cars.map((car, index) => {
                        return (
                            <Car
                                key={index}
                                name={car.name}
                                year={car.year}
                                inputHandler={(event) => this.inputHandler(event.target.value, car.name)}
                            />
                        )
                    })
                    : null
                }


                {/*<Car onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)} name={cars[0].name}*/}
                {/*     year={cars[0].year}/>*/}
                {/*<Car onChangeTitle={() => this.changeTitleHandler(cars[1].name)} name={cars[1].name}*/}
                {/*     year={cars[1].year}/>*/}
                {/*<Car onChangeTitle={() => this.changeTitleHandler(cars[2].name)} name={cars[2].name}*/}
                {/*     year={cars[2].year}/>*/}

            </div>
        );
    }


}

export default App;

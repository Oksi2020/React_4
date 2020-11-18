import React, { Component } from 'react';
import './canvas.css';
import Chart from 'chart.js'

class Canvas extends Component {

    state = {
        randomArray: []
    }
    canvas = React.createRef();

    componentDidMount = () => {
        let canvasNode = this.canvas.current;
        let ctx = canvasNode.getContext('2d');

        this.chart = new Chart(ctx, {
            type: 'line',
            data:{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
        
            }
        })
    } 

    componentDidUpdate = () => {
        this.chart.data.datasets[0].data = this.state.randomArray;
        this.chart.update();
    }

    randomizeData = (count, min, max) => (e) => {
        let newArr = [];
        for(let i = 0;i<count;i++) newArr.push( Math.floor( Math.random() * (max - min) + min));
        this.setState({
            randomArray: newArr
        })
    }


    render = () =>{
        return(
            <div
                className = 'canvas'
            >
                <h1>My canvas</h1>
                <canvas
                    ref = { this.canvas }
                />
                <button 
                    onClick = {this.randomizeData(7, 0, 45)}
                >
                    Randomize Data
                </button>
            </div>
        )
    }

}

export default Canvas;
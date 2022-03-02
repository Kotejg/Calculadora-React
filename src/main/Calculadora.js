import React, { Component } from "react";
import './Calculadora.css'
import Button from '../components/button/Button'
import Display from '../components/display/Display'

class Calculadora extends Component {

    state = {
        displayValue: 0,
        num1: null,
        num2: null,
        opera: null
    }

    clearMemory = () => {
        this.setState({
            displayValue: 0,
            num1: null,
            num2: null,
            opera: null
        })
    }

    setOperation = (operacao) => {
        this.setState({ opera: operacao, displayValue: operacao })
    }

    resultado = () => {
        let resultado;
        switch (this.state.opera) {
            case "+":
                resultado = (this.state.num1 + this.state.num2)
                break
            case "-":
                resultado = (this.state.num1 - this.state.num2)
                break
            case "*":
                resultado = (this.state.num1 * this.state.num2)
                break
            case "/":
                resultado = (this.state.num1 / this.state.num2)
                break
            default:
        }
        this.setState({ displayValue: resultado })
    }

    addNumber = (number) => {
        let numero1 = [];
        numero1.push(number)

        if (this.state.num1 == null) {
            this.setState({ num1: parseInt(numero1) , displayValue: number });
        } else {
            this.setState({ num2: parseInt(number), displayValue: number });
        }

    }

    render() {
        return (
            <div className="calculadora">
                <Display value={this.state.displayValue} />
                <Button label="AC" triple click={this.clearMemory} />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addNumber} />
                <Button label="8" click={this.addNumber} />
                <Button label="9" click={this.addNumber} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addNumber} />
                <Button label="5" click={this.addNumber} />
                <Button label="6" click={this.addNumber} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="3" click={this.addNumber} />
                <Button label="2" click={this.addNumber} />
                <Button label="1" click={this.addNumber} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" double click={this.addNumber} />
                <Button label="." click={this.setOperation} />
                <Button label="=" click={this.resultado} />


            </div>
        );
    }
}

export default Calculadora;
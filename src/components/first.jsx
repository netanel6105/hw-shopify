import React, { Component } from 'react'
import "./comps.css"
export default class First extends Component {

    state = { humanAge:0}
    input = React.createRef();

    calcAge = () =>{
        let dogAge = this.input.current.value;
        this.setState({humanAge:dogAge*7})
        console.log(this.input.current.value);
    }


    render() {
        return (

            <div className='p-3'>
                <h1 className='display-6 text-center'>Calc Age of dog to human</h1>

                <div className='co-6 col-md-3'>
                    <label className='p-2'>dog age:</label>
                    <input ref={this.input} className='form-control ' placeholder='dog age...' type="number" />

                </div>

                <div className='d-flex'>
                    <button onClick={this.calcAge} className='btn btn-dark mt-2' >Calc</button>
                    <p className='p-0 m-0 mt-2 ms-4'>Humen Age:{this.state.humanAge}</p>
                </div>
            </div> 

        )
    }
}

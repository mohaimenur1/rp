import React,{Component} from 'react';
import Box from '../Box';
import './BoxList.css';
import BoxForm from '../BoxForm/BoxForm';

class BoxList extends Component{
  state={
    boxes: [
      {
        height: 10,
        width: 10,
        color: 'Chocolate',
      }
    ]
  }

  createColorBox = (newBox) => {
    this.setState({
      boxes: [...this.state.boxes, newBox],
    })
  }

  render(){
    const boxes = this.state.boxes.map(box => (
      <Box height={box.height} width={box.width} color={box.color}/>
    ))
    return(
      <div className="container">
        <h1 className="header">Color Box Maker!</h1>
        <BoxForm createColorBox={this.createColorBox}/>
        {boxes}
        <button>X</button>
      </div>
    );
  }
}

export default BoxList;
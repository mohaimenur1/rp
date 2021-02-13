import React, {Component} from 'react';
import './BoxForm.css';

class BoxForm extends Component{
  state={
    height: '',
    width: '',
    color: ''
  }

  formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.props.createColorBox(this.state);
    this.setState({
      height: '',
      width: '',
      color: ''
    })
  }

  inputChangeHandler = (evt) => {
    this.setState({
      [evt.target.name] : evt.target.value,
    })
  }


  render(){
    return(
      <form onSubmit={this.formSubmitHandler}>
        <div className='form-style'>
          <label>Height</label>
            <input 
              type="text"  
              value={this.state.height}
              name="height"
              onChange={this.inputChangeHandler}
              />
          <label>Width</label>
            <input 
              type="text"  
              value={this.state.width}
              name="width"
              onChange={this.inputChangeHandler}
              />
          <label>Color</label>
            <input 
              type="text"  
              value={this.state.color}
              name="color"
              onChange={this.inputChangeHandler}
              />
        </div>
        <button className="form-button">Add Box</button>
      </form>
      
    )
  }
}

export default BoxForm;
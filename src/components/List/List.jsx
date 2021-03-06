import React, { Component } from 'react';
import "./List.css";
import { withRouter } from "react-router-dom";
class List extends Component {
  state = {
    show:true
    }
  handleClick(lang)
  {
    this.props.history.push(`/filter/${lang}`);
  }
 
  render() { 
   // console.log(this.state);
   
    return (  <>{this.state.show===true?
    <div className='outer-box'>
      <div className='col1'>
    <img src={require(`${this.props.data.logo}`)} alt='njjnj' />
    </div>
    <div className='col2'>
      <div className='row1'>
        <div className="company">{this.props.data.company}</div>
        {this.props.data.new === true ? <div  className="new">NEW!</div> : null}
        {this.props.data.featured === true ? <div className="featured">FEATURED</div> : null}
      </div>
      <div className='row2'>
        <div className='position'  onClick={()=>this.handleClick(this.props.data.role)}>{this.props.data.position}<div className='row3'>
        <div className='postedAt'>{this.props.data.postedAt}</div>
        <div className='dot'>.</div>
        <div className='contract'>{this.props.data.contract}</div>
        <div className='dot'>.</div>
        <div className='location'>{this.props.data.location}</div>
      </div></div>
        <div className='tags'>
        <button onClick={()=>this.handleClick(this.props.data.role)}>{this.props.data.role}</button>
        <button onClick={()=>this.handleClick(this.props.data.level)}>{this.props.data.level}</button>
          {this.props.data.languages.map((lang) => (
            <button onClick={()=>this.handleClick(lang)}>{lang}</button>
          ))}
        </div>
      </div>
      
    </div>
  </div>:null}</>);
    }
}
 
export default withRouter(List);


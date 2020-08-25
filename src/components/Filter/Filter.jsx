import React, { Component } from "react";
import data from "../../data.json";
import List from "../List1/List1";
import {Link,withRouter} from 'react-router-dom';
import rm from "../../images/icon-remove.svg";
import "./Filter.scss";
class Filter extends Component {
  state = {
    check: [],
  };
  handleClear()
  {
    this.props.history.push(`/`);
  }
  handleRemove(val)
  {
    if(this.state.check.length===1)
    {
      
      this.props.history.push(`/`);
    }
    this.setState({check:this.state.check.filter(value=>value!==val)});
  }
  componentDidMount() {
    this.setState({ check: [this.props.match.params.fil] });
  }
  componentDidUpdate(prevProps, prevState) {
    const c = prevState.check.filter(
      (val) => val !== this.props.match.params.fil
    );
    if (c.length === prevState.check.length) {
      this.setState({
        ...this.state,
        check: [
          ...this.state.check.filter((val) =>
            val === this.props.match.params.fil
              ? ""
              : this.props.match.params.fil
          ),
          this.props.match.params.fil,
        ],
      });
    }
  }
  render() {
    return (
      <div>
        <div className='top-bar'>
        <div className="div">
          {this.state.check.map((val) => (
            <div className="space">
              <div className='tag'>{val}</div>
              <button onClick={()=>this.handleRemove(val)}>
                <img src={rm} alt='cross'></img>
              </button>
            </div>
          ))}</div>
          <Link to="/" onClick={()=>this.handleClear()} className="link">clear</Link>
        </div>
        <div className='container'>
          {Object.values(data).map((item) => (
            <List key={item.id} data={item} val={this.state.check} />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Filter);

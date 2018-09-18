import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { updateCartItemColor } from '../actions';

const ColorDiv = styled.div`
  width: 15px;
  height: 15px;
  margin: 5px auto;
  border : ${(props) => (props.selected) ? '2px dashed #000' : ''};
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  background-color: #fff;
  padding: 10px 0;
  border-radius: 5px;
  width: 30%;
`;

class ColorSelect extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return(
      <Div style={{...this.props.style}}>
        {
          this.props.options.map((o)=>{
            return(<ColorDiv
              selected={this.props.selected.name==o.name?true:false}
              style={{backgroundColor:o.hexcode}}
              onClick={(e)=>{e.preventDefault();this.props.updateCartItemColor({cid:this.props.id,color:o})}}
            ></ColorDiv>);
          })
        }
      </Div>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  updateCartItemColor : (payload) => {
    dispatch(updateCartItemColor(payload))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(ColorSelect);

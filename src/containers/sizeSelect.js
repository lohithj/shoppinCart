import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { updateCartItemSize } from '../actions';

const SizeDiv = styled.div`
  width: 15px;
  height: 15px;
  margin: 7px auto;
  padding: 0  3px 5px 3px;
  border : ${(props) => (props.selected) ? '2px dashed #000' : ''};
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 5px auto 0;
`;

class SizeSelect extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return(
      <Div style={{...this.props.style}}>
        {
          this.props.options.map((o)=>{
            return(
              <SizeDiv
                selected={this.props.selected.name==o.name?true:false}
                onClick={(e)=>{e.preventDefault();this.props.updateCartItemSize({sid:this.props.id,size:o})}}
              >
              {o.code.toUpperCase()}
              </SizeDiv>
            );
          })
        }
      </Div>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  updateCartItemSize : (payload) => {
    dispatch(updateCartItemSize(payload))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(SizeSelect);

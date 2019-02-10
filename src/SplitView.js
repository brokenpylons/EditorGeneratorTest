import React, { Component } from 'react';
import injectSheet from 'react-jss';

const style = {
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box'
  },
  child: {
    flex: '1 1 0',
    position: 'relative',
    outline: '1px solid gainsboro',
    padding: '10px'
  }
};

class SplitView extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div {...this.props} className={classes.container}>
        {React.Children.map(this.props.children, child =>
          <div className={classes.child}>
            {child}
          </div>
        )}
      </div>
    );
  }
}

export default injectSheet(style)(SplitView);

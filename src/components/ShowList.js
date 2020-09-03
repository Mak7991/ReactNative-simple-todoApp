import React from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
} from 'native-base';

export default class ShowList extends React.Component {
  constructor() {
    super();
    console.log('this is constructor');
    this.state = {
      list: [],
      cmadName: '',
    };
  }

  componentDidMount() {
    console.log('this is componentDidMount');
    this.setState({list: this.props.myTodos});
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, prevState);
    if (nextProps.name == 'cmad') {
      return {cmadName: nextProps.name};
    }
    if (nextProps.myTodos.length > 4) {
      return {list: nextProps.myTodos};
    }
    return null;
  }

  //   <li>{this.state.cmadName}</li>
  //         {this.state.list.map(function (value, index) {
  //           return <li key={index}>{value}</li>;
  //         })}

  render() {
    console.log('this is render', this.props.myTodos, this.state.list);
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem>
              <Text>{this.state.cmadName}</Text>
              {this.state.list.map(function (value, index) {
                return <ListItem key={index}>{value}</ListItem>;
              })}
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

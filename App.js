import React from 'react';
import {StyleSheet, StatusBar, Text, FlatList} from 'react-native';
import {
  Container,
  Content,
  Item,
  Input,
  Button,
  Icon,
  List,
  ListItem,
} from 'native-base';

var data = ['osama', 'faraz'];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // this.ds = new ListItem.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.state = {
    //   ListItem: data,
    //   newContact: '',
    // };
  }

  renderItems = (item) => {
    return (
      <View>
        <Text>
          {item} <Icon name="add"></Icon>
        </Text>
      </View>
    );
  };

  render() {
    return (
      <Container>
        {/* <Header
          style={{marginTop: StatusBar.currentHeight, backgroundColor: '#fff'}}>
          <Content>
            <Item regular>
              <Input placeholder="Add Todo" />
              <Button>
                <Icon name="add"></Icon>
              </Button>
            </Item>
          </Content>
        </Header> */}

        <Content>
          {/* <List
            dataSource={this.ds.cloneWithRows[this.state.ListItemtData]}
            renderRow={(data) => (
              <ListItem>
                <Text>{data} </Text>
              </ListItem>
            )}
            renderLeftHiddenRow={(data) => (
              <Button full>
                <Icon name="information-circle" />
              </Button>
            )}
            renderrightHiddenRow={(data) => (
              <Button>
                <Icon name="trash"></Icon>
              </Button>
            )}
            leftOpenValue={-75}
            rightOpenValue={-75}
          /> */}
          <FlatList
            data={data}
            renderItem={({item}) => (
              <Text
                style={styles.item}
                onPress={() => {
                  console.log('i am pressed');
                }}>
                {item}
                <Icon name="add" style={styles.addIcon}></Icon>
                <Icon
                  name="trash"
                  style={styles.addIcon}
                  onPress={(item) => {
                    console.log('i am pressed');
                  }}></Icon>
              </Text>
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addIcon: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 16,
  },
});

import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import action from './redux/action';
import { connect } from 'react-redux';

const TestComponent = (props) => {

  //Current Link is not fetching the data
  const fetchTest = () => {
    return async dispatch => {
      fetch('http://dummy.restapiexample.com/api/v1/employee/1', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
        .then((json) => {
          alert(json.data.employee_name)

        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <View style={styles.container}>
      <Text> {JSON.stringify(props)}</Text>
      <Button title={"Update Value"} onPress={() => { props.setTest("Hello World") }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const mapStateTopProps = ({ general }) => ({ test: general.test });

const mapDispatchToProps = (dispatch) => ({
  setTest: (payload) => dispatch(action.setTest(payload))
})


export default connect(mapStateTopProps, mapDispatchToProps)(TestComponent);
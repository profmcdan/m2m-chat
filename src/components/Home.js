import React, { Component } from "react";
import { Button, View, StyleSheet } from "react-native";

class Home extends Component {
  static navigationOptions = {
    title: "Home Screen",
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Chat"
          onPress={() =>
            this.props.navigation.navigate("chat", { name: "Joe" })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;

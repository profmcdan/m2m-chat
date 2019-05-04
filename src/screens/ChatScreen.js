import React, { Component } from "react";
import { Button, View, StyleSheet } from "react-native";

class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.name}`,
  });

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Return Home"
          onPress={() => this.props.navigation.navigate("home", {})}
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

export default ChatScreen;

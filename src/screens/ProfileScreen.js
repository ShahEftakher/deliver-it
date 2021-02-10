import React, { useEffect, useContext, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
  View,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from "react-native";
import { Card, Image, Text } from "react-native-elements";
import HeaderComponent from "../components/HeaderComponent";

const ProfileScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [reload, setReload] = useState(false);
  const onRefresh = () => {
    reload ? setReload(false) : setReload(true);
  };

  useEffect(() => {}, [reload]);
  return (
    <View>
    <HeaderComponent/>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Image
            source="https://picsum.photos/200/300"
            style={{ width: 300, height: 400, marginLeft: 45 }}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
        <Card>
          {false ? (
            <ActivityIndicator size="large" color="blue" animating={true} />
          ) : (
            <>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  h4Style={{
                    padding: 10,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  h4
                >f</Text>
              </View>
              <Pressable
                onLongPress={() => {
                  console.log("Are you sure?");
                }}
              ></Pressable>
              <Text style={styles.textStyle}>Name : Saad</Text>
              <Text style={styles.textStyle}>Email: test@test.com</Text>
              <Text style={styles.textStyle}>Phone: 01521101526</Text>
            </>
          )}
        </Card>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "darkblue",
    paddingVertical: 10,
  },
});
export default ProfileScreen;

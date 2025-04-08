import React from "react";
import { View, Text, } from "react-native";
import { UserProfile, BasicUser } from "../types";

interface Props {
  basic: BasicUser;
  profile?: UserProfile;
}

const UserCard: React.FC<Props> = ({ basic, profile }) => {
  return <View>
        <Text>{basic.name}</Text>
    </View>;
}

export default UserCard;

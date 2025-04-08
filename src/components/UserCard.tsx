import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Platform,
} from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { UserProfile, BasicUser } from "../types";

dayjs.extend(relativeTime);

import { PLACEHOLDER_IMAGE, ONLINE_STATUS } from "../utils/constants";
import { formatRelativeTime, formatDistance } from "../utils/helpers";

interface Props {
  basic: BasicUser;
  profile?: UserProfile;
  distanceUnit?: string;
}

const UserCard: React.FC<Props> = ({ basic, profile, distanceUnit = 'km' }) => {
  const {
    name,
    picture,
    last_login,
    online_status,
  } = basic;

  const {
    personal,
    location,
    headline = "",
  } = profile ?? {};

  const imageUri = picture?.url || PLACEHOLDER_IMAGE;
  const lastSeen = formatRelativeTime(last_login);
  const isOnline = online_status === ONLINE_STATUS;
  const distance = formatDistance(location?.distance, distanceUnit);
  const age = personal?.age ?? "-";
  const locationName = location?.name ?? "";
  
  const isIncomplete =
    !name || !personal?.age || !headline || !location?.name;

  if (isIncomplete) return null;

  return (
    <ImageBackground
      source={{ uri: imageUri }}
      style={styles.card}
      imageStyle={{ borderRadius: 12, resizeMode: "cover" }}
    >
      <View style={styles.overlay}>
        <Text style={styles.name}>
          {name}, {age}
          {isOnline && <Text style={styles.onlineDot}> ●</Text>}
        </Text>

        <Text style={styles.time}>{lastSeen}</Text>

        <Text style={styles.headline} numberOfLines={2}>
          {headline}
        </Text>

        <Text style={styles.distance}>
          {locationName ? `${locationName} • ` : ""}
          {distance} {distanceUnit}
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    aspectRatio: 1.4,
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
    justifyContent: "flex-end",
    backgroundColor: "#eee",
    ...Platform.select({
      web: {
        maxWidth: 360,
        marginLeft: 16,
        marginRight: 16,
      },
    }),
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    justifyContent: "flex-end",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  onlineDot: {
    color: "lime",
    fontSize: 12,
  },
  time: {
    fontSize: 12,
    color: "#ccc",
    marginTop: 2,
  },
  headline: {
    fontSize: 13,
    color: "#fff",
    marginTop: 4,
  },
  distance: {
    fontSize: 12,
    color: "#ddd",
    marginTop: 4,
  },
});

export default UserCard;

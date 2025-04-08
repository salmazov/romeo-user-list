import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, Dimensions } from "react-native";

import { fetchBasicUsers, fetchUserProfiles } from "../services/api";
import { BasicUser, UserProfile } from "../types";
import UserCard from "../components/UserCard";

// Determine layout based on screen size
const screenWidth = Dimensions.get("window").width;
const isSingleColumn = screenWidth < 600;
const numColumns = isSingleColumn ? 1 : 2;

const UserListScreen: React.FC = () => {
  const [basicUsers, setBasicUsers] = useState<BasicUser[]>([]);
  const [profiles, setProfiles] = useState<Record<string, UserProfile>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const basics = await fetchBasicUsers();
        setBasicUsers(basics);

        const ids = basics.map((user) => user.id);
        const details = await fetchUserProfiles(ids);

        const profileMap = details.reduce((acc, profile) => {
          acc[profile.id] = profile;
          return acc;
        }, {} as Record<string, UserProfile>);

        setProfiles(profileMap);
      } catch (error) {
        console.error("Failed to load user data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  }

  return (
    <FlatList
      data={basicUsers}
      keyExtractor={(user) => user.id}
      renderItem={({ item }) => (
        <UserCard basic={item} profile={profiles[item.id]} />
      )}
      numColumns={numColumns}
      contentContainerStyle={{ padding: 8 }}
      {...(!isSingleColumn && {
        columnWrapperStyle: { justifyContent: "space-between" },
      })}
    />
  );
};

export default UserListScreen;

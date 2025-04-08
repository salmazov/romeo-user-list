import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import { fetchBasicUsers, fetchUserProfiles } from "../services/api";
import { BasicUser, UserProfile } from "../types";
import UserCard from "../components/UserCard";

const numColumns = 2;

const UserListScreen = () => {
  const [basicUsers, setBasicUsers] = useState<BasicUser[]>([]);
  const [profiles, setProfiles] = useState<Record<string, UserProfile>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      const basics = await fetchBasicUsers();
      setBasicUsers(basics);

      const ids = basics.map((u) => u.id);
      const detailed = await fetchUserProfiles(ids);
      const profileMap: Record<string, UserProfile> = {};
      
      detailed.forEach((p) => (profileMap[p.id] = p));
      
      setProfiles(profileMap);
      
      setLoading(false);
    };

    loadUsers();
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  return (
    <FlatList
      data={basicUsers}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <UserCard basic={item} profile={profiles[item.id]} />}
      numColumns={numColumns}
      contentContainerStyle={{ padding: 8 }}
    />
  );
};

export default UserListScreen;

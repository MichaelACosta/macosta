import React, { useState, useEffect } from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import Seo from "../components/Seo/Seo";
import Profile from "../components/Profile";
import Loader from "../components/Loader";
import { GitCard } from "../components/GitCard";
import { getUser } from "../Services/gitApi";

const DEFAULT_USERNAME = "MichaelACosta";

const fetchGitUser = async (username, setUser) => {
  try {
    const user = await getUser(username);
    setUser(user?.data);
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
};

const IndexPage = () => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [user]);

  useEffect(() => {
    fetchGitUser(DEFAULT_USERNAME, setUser);
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <Seo title="Profile" />
        <Loader />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Seo title="Profile" />
      <Profile user={user} />
      <GitCard user={user} userName={user?.login} />
    </Wrapper>
  );
};

export default IndexPage;

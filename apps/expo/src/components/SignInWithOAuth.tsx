import { useOAuth } from "@clerk/clerk-expo";
import React from "react";
import { Button, View } from "react-native";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";

const SignInWithOAuth = () => {
  useWarmUpBrowser();

  const { startOAuthFlow: startDiscordOAuthFlow } = useOAuth({
    strategy: "oauth_discord",
  });

  const handleSignInWithDiscordPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startDiscordOAuthFlow();
      if (createdSessionId) {
        setActive?.({ session: createdSessionId });
      } else {
        // Modify this code to use signIn or signUp to set this missing requirements you set in your dashboard.
        throw new Error(
          "There are unmet requirements, modifiy this else to handle them",
        );
      }
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
      console.log("error signing in", err);
    }
  }, []);

  const { startOAuthFlow: startGOogleOAuthFlow } = useOAuth({
    strategy: "oauth_discord",
  });

  const handleSignInWithGooglePress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startGOogleOAuthFlow();
      if (createdSessionId) {
        setActive?.({ session: createdSessionId });
      } else {
        // Modify this code to use signIn or signUp to set this missing requirements you set in your dashboard.
        throw new Error(
          "There are unmet requirements, modifiy this else to handle them",
        );
      }
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
      console.log("error signing in", err);
    }
  }, []);

  return (
    <View>
      <View className="rounded-lg border-2 border-gray-500 p-4">
        <Button
          title="Sign in with Discord"
          onPress={handleSignInWithDiscordPress}
        />
      </View>
      <View className="rounded-lg border-2 border-gray-500 p-4">
        <Button
          title="Sign in with Google"
          onPress={handleSignInWithGooglePress}
        />
      </View>
    </View>
  );
};

export default SignInWithOAuth;

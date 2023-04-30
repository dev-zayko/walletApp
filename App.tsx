import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// React Navigation
import RootStack from "./src/navigators/RootStack";
//Screen
import Welcome from "./src/screens/Welcome";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
          "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
        });
        await new Promise((resolve: any) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <RootStack />
    </SafeAreaView>
  );
}

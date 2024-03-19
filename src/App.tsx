import React, {useMemo} from "react";
import {useRef} from "react";
import {Button, FlatList, StyleSheet, Text, View} from "react-native";

import FlowplayerView, {
  FlowplayerProvider,
  FlowplayerAdType,
  useFlowplayer,
  type FlowplayerRef,
  type FlowplayerMedia,
} from "@flowplayer/react-native-sdk";

// - Constants
const MEDIA_WOWZA: FlowplayerMedia = {
  mediaId: "<MEDIA_ID>",
  playerId: "<PLAYER_ID>",
};

const MEDIA_REMOTE: FlowplayerMedia = {
  url: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
};

const Styles = StyleSheet.create({
  grid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: "#ebebeb",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 10,
  },
  flowplayer: {
    width: "100%",
    height: 250,
    backgroundColor: "#000000",
    marginTop: "25%",
  },
  stateListItem: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    columnGap: 10,
    justifyContent: "space-evenly",
  },
  stateListText: {
    fontFamily: "Courier New",
    fontWeight: "bold",
    textAlign: "left",
  },
  stateListTextKey: {
    fontWeight: "500",
  },
});

// - Components
const UtilityGrid: React.FC = ({}) => {
  const [_, dispatch] = useFlowplayer();

  return (
    <View style={Styles.grid}>
      <Button
        testID="loadRemote"
        title="Load Remote"
        onPress={() => {
          dispatch?.prepare?.(MEDIA_REMOTE);
        }}
      />
      <Button
        title="Load Wowza"
        testID="loadWowza"
        onPress={() => {
          dispatch?.prepare?.(MEDIA_WOWZA);
        }}
      />
    </View>
  );
};

const ControlsGrid: React.FC = () => {
  const [state, dispatch] = useFlowplayer();

  return (
    <View style={Styles.grid}>
      <Button
        testID="controlPlayback"
        onPress={() => {
          !state.isPlaying ? dispatch?.play?.() : dispatch?.pause?.();
        }}
        title={state.isPlaying ? "Pause" : "Play"}
      />
      <Button
        testID="controlStop"
        onPress={() => {
          dispatch?.stop?.();
        }}
        title="Stop"
      />
      <Button
        testID="controlReload"
        onPress={() => {
          dispatch?.reload?.();
        }}
        title="Reload"
      />
      <Button
        testID="controlAutoplay"
        onPress={() => {
          dispatch?.setAutoplay?.(!state.autoplay);
        }}
        title="Auto Play"
      />
    </View>
  );
};

const StateView = () => {
  const [state, _] = useFlowplayer();

  const listData = useMemo(() => {
    return Object.entries(state);
  }, [state]);

  return (
    <FlatList
      data={listData}
      keyExtractor={item => item[0]}
      renderItem={({item}) => (
        <View style={Styles.stateListItem}>
          <Text style={Styles.stateListTextKey} testID={`key-${item[0]}`}>
            {item[0]}
          </Text>
          <Text style={Styles.stateListText} testID={`value-${item[0]}`}>
            {JSON.stringify(item[1])}
          </Text>
        </View>
      )}
    />
  );
};

const PlayerView = () => {
  const flowplayerRef = useRef<FlowplayerRef>(null);
  const [_, dispatch] = useFlowplayer();

  // Optional event listeners
  const onPause = () => {
    console.log("onPause event received from native view");
  };

  const onPlay = () => {
    console.log("onPlay event received from native view");
  };

  const onStop = () => {
    console.log("onStop event received from native view");
  };

  const onReload = () => {
    console.log("onReload event received from native view");
  };

  const onComplete = () => {
    console.log("onComplete event received from native view");
  };

  const onError = (error: Error) => {
    console.log("onError event received from native view");
    if (error) {
      console.error(error);
    }
  };

  const onAdError = (error: Error) => {
    console.log("onAdError event received from native view");
    if (error) {
      console.error(error);
    }
  };

  const onAdStart = (type: FlowplayerAdType) => {
    console.log("onAdStart event received from native view");
    switch (type) {
      case FlowplayerAdType.preRoll:
        console.log("pre-roll ad started");
        break;
      case FlowplayerAdType.midRoll:
        console.log("mid-roll ad started");
        break;
      case FlowplayerAdType.postRoll:
        console.log("post-roll ad started");
        break;
    }
  };

  const onAdSkip = (type: FlowplayerAdType) => {
    console.log("onAdSkip event received from native view");
    switch (type) {
      case FlowplayerAdType.preRoll:
        console.log("pre-roll ad skipped");
        break;
      case FlowplayerAdType.midRoll:
        console.log("mid-roll ad skipped");
        break;
      case FlowplayerAdType.postRoll:
        console.log("post-roll ad skipped");
        break;
    }
  };

  const onAdComplete = (type: FlowplayerAdType) => {
    console.log("onAdComplete event received from native view");
    switch (type) {
      case FlowplayerAdType.preRoll:
        console.log("pre-roll ad completed");
        break;
      case FlowplayerAdType.midRoll:
        console.log("mid-roll ad completed");
        break;
      case FlowplayerAdType.postRoll:
        console.log("post-roll ad completed");
        break;
    }
  };

  const onAdClick = (type: FlowplayerAdType) => {
    console.log("onAdClick event received from native view");
    switch (type) {
      case FlowplayerAdType.preRoll:
        console.log("pre-roll ad clicked");
        break;
      case FlowplayerAdType.midRoll:
        console.log("mid-roll ad clicked");
        break;
      case FlowplayerAdType.postRoll:
        console.log("post-roll ad clicked");
        break;
    }
  };

  const onViewReady = () => {
    // Load media when the view loads.

    // flowplayerRef.current?.prepare(MEDIA_REMOTE);
    // flowplayerRef.current?.setAutoplay(true);

    dispatch?.prepare?.(MEDIA_REMOTE);
    dispatch?.setAutoplay?.(true);
  };

  const onAdResume = (type: FlowplayerAdType) => {
    console.log("onAdResume event received from native view");
    switch (type) {
      case FlowplayerAdType.preRoll:
        console.log("pre-roll ad resumed");
        break;
      case FlowplayerAdType.midRoll:
        console.log("mid-roll ad resumed");
        break;
      case FlowplayerAdType.postRoll:
        console.log("post-roll ad resumed");
        break;
    }
  };

  const onViewDestroyed = () => {
    console.log("Bye bye player...");
  };

  return (
    <FlowplayerView
      testID="player"
      ref={flowplayerRef}
      style={Styles.flowplayer}
      onPause={onPause}
      onPlay={onPlay}
      onStop={onStop}
      onReload={onReload}
      onComplete={onComplete}
      onError={onError}
      onAdError={onAdError}
      onAdStart={onAdStart}
      onAdSkip={onAdSkip}
      onAdComplete={onAdComplete}
      onAdClick={onAdClick}
      onAdResume={onAdResume}
      onViewReady={onViewReady}
      onViewDestroyed={onViewDestroyed}
    />
  );
};

export default function App() {
  return (
    <FlowplayerProvider>
      <PlayerView />
      <UtilityGrid />
      <ControlsGrid />
      <StateView />
    </FlowplayerProvider>
  );
}

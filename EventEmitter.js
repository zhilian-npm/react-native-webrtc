import {NativeModules, NativeEventEmitter} from 'react-native';

const { WebRTCModule } = NativeModules;

const EventEmitter = Platform.OS === "android" ? new NativeEventEmitter(WebRTCModule) : null;

export default EventEmitter;

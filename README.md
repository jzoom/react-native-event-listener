# react-native-event-listener
对DeviceEventEmitter进行二次封装，省掉`DeviceEventEmitter.addListener`和`remove`的步骤

## 安装

```
yarn add react-native-event-listener
```

## 使用方法
```
import Listener from 'react-native-event-listener';
...

<Listener event="yourEventName" onEvent={this._yourEventHandler}>
    <YourOtherView />
</Listener>

```
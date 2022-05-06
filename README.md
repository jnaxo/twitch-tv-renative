# Twitch Smart TV

Cross-platform App to watch streaming from [Twitch](http://twitch.tv/) platforn. Built with [ReNative](https://renative.org).

## Platform compatibility
- Tizen TV
- LG WebOS

## Requirements
- [Node](https://nodejs.org/) 10.13.0 or higher
- [Yarn](https://yarnpkg.com)
- [ReNative](https://renative.org/docs/intro-quickstart) 0.32.2
- [LG Emulator](http://webostv.developer.lge.com/sdk/tools/emulator/introduction-emulator/) v4.0.0
- [Tizen SDK](https://developer.tizen.org/development/tizen-studio/download)
- Make sure your CPU supports virtualization. Otherwise Tizen emulator might not start.
- If you are deploying to a TV, follow this guide to set your TV in developer mode [Link](https://developer.samsung.com/tv/develop/getting-started/using-sdk/tv-device)

## Getting Started

### Environment variables
Configure the environment variables creating the file `./appConfigs/blank/renative.local.json` as described below
```
{
  "common": {
    "runtime": {
      "appEnv": "local",
      "client_id": "[APP CLIENT ID FROM TWITCH]",
      "client_secret": "[[APP CLIENT SECRET FROM TWITCH]]",
      "baseURL": "https://api.twitch.tv/helix",
      "authURL": "https://id.twitch.tv"
    }
  }
}
```

### Install
Run `npm install`.

### Running
Set `<platform>` as `tizen` or `webos`

#### Run on emulator:
```
$ rnv run -p <platform>
```

#### Run on device
```
$ rnv run -p <platform> -d
```

#### Run on browser
```
$ rnv run -p <platform> --hosted
```

# License
**MIT Licensed**

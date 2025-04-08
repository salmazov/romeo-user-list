# ROMEO User List App

A cross-platform React Native app (built with Expo and TypeScript) that displays user profiles from the ROMEO API.

## 📦 Tech Stack

- **Expo** (for cross-platform support)
- **React Native + TypeScript**
- **Axios** for API requests
- **Day.js** for time formatting

## 🚀 Getting Started

### 1. Clone the server and start it:
```bash
git clone https://github.com/romeo/server-repo.git
cd server-repo
npm install
npm start
```

#### In Expo go
```bash
Press i │ open iOS simulator to run iOS version
Press w │ open web to run a web version
```
You can also scan the QR code with Expo Go on your mobile device.

### 2. Project Structure for a reference
```bash
src/
├── components/    # UI blocks (UserCard)
├── screens/       # Navigation screens (UserListScreen)
├── services/      # API logic (api.ts)
├── types/         # Shared TypeScript types
├── utils/         # Utilities (e.g., time formatting)
```


### 3. Supported Platforms

| Platform | Status        |
|----------|---------------|
| iOS      | ✅ Supported   |
| Web      | ✅ Supported   |
| Android  | ⚠️ Not tested yet – may be added later if time permits |
# ROMEO User List App

A cross-platform React Native app (built with Expo and TypeScript) that displays user profiles from the ROMEO API.

## 📦 Tech Stack

- **Expo** (for cross-platform support)
- **React Native + TypeScript**
- **Axios** for API requests
- **Day.js** for time formatting

## 🚀 Getting Started

### 1. Preparation
You need to clone that repository
https://github.com/erasys/js-trial-task

### 1.1. To enable CORS to be able to develop web version on a local machine install cors in a folder with a server
```bash
npm install cors
```

### 1.2. And update index.js with this code:
```bash
'use strict';

const PORT = process.env.PORT || 3000;

let express = require('express');
const cors = require('cors');

let log = require('bunyan').createLogger({
  name: 'api-server',
  streams: [{ level: 'DEBUG', stream: process.stdout }]
});

let apiRouter = require('./lib/router');

const app = express();
if (process.env.NODE_ENV !== 'production') {
  app.use(cors());
  log.info('CORS enabled for development');
}

app
  .use('/api', (req, res, next) => {
    log.debug(`${req.method} ${req.url}`);
    next();
  })
  .use('/api', apiRouter)
  .listen(process.env.PORT || 3000, () => {
    log.info(`Server is listening on http://localhost:${PORT}`);
  });
  ```

### 1.3 Run a local API server
```bash
npm run start
```

### 2. Clone the server and start it:
```bash
git clone https://github.com/romeo/server-repo.git
cd server-repo
npm install
npm start
```

#### 3. In Expo go
```bash
Press i │ open iOS simulator to run iOS version
Press w │ open web to run a web version
```
You can also scan the QR code with Expo Go on your mobile device.

### 4. Project Structure for a reference
```bash
src/
├── components/    # UI blocks (UserCard)
├── screens/       # Navigation screens (UserListScreen)
├── services/      # API logic (api.ts)
├── types/         # Shared TypeScript types
├── utils/         # Utilities (e.g., time formatting)
```


### 5. Supported Platforms

| Platform | Status        |
|----------|---------------|
| iOS      | ✅ Supported   |
| Web      | ✅ Supported   |
| Android  | ⚠️ Not tested yet – may be added later if time permits |

### 6. What Could Be Improved Next?
#### Design consistency with Storybook
Integrating Storybook would help align UI components with company design guidelines and improve team collaboration on styling.

#### Testing
Automated testing (unit, integration, and end-to-end) would enhance code reliability and long-term maintainability.

#### Android support
Due to the lack of a physical device and emulator during development, the app hasn’t been tested on Android. Verifying compatibility should be a next step.

#### Tablet layout
Tablet-specific layouts were not implemented but could be added to improve UX across a wider range of devices.

#### Grid system improvements
The current column logic is minimal. A proper design system or responsive grid (e.g., based on screen breakpoints) would scale better across platforms.

#### CI/CD and build automation
This prototype runs in development mode only. Setting up CI/CD pipelines and release builds would be crucial for production deployment.

### Linting and versioning
Team should align on linting and versioning in GIT to develop efficiently. I used Semantic Git principle in my commit messages. One branch is enough for this task, but while working in a team it's necessary to follow conventions.
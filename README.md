# Mobox-platform Project

Project for Mobox

## Dev Environment

Current Vue.js version: **v2.6.14**
Current Vue Router version: **v3.5.3**

## Features

This is the frontend project for the Mobox ecosystem, providing a user interface for various games, events, and features. The project includes components for:

- **Game Details & Gameplay**: `gameDetail.vue`, `block-brawler.vue`
- **User Management**: `userCenter/index.vue`, `avatar/index.vue`
- **Events & Campaigns**: `valentines/index.vue`, `anniversary-raffle/index.vue`, `world-cup/index.vue`
- **Guides & Documentation**: `beginner-guide/index.vue`, `momoverse-guide/index.vue`
- **Feedback & Community**: `feedback.vue`, `alliance/index.vue`
- **Embedded Pages**: `iframe.vue`

## Development Setup

### Install Dependencies

```sh
npm install
```

### Run Development Server

```sh
npm run serve
```

The project runs on `http://localhost:8080/` by default.

### Build for Production

```sh
npm run build
```

### Lint and Fix Code

```sh
npm run lint
```

### Customize Configuration

See [Vue Configuration Reference](https://cli.vuejs.org/config/).

## Routing System

The project uses **Vue Router** in `hash` mode. Routes are defined in `router/index.js`, with the following structure:

- **Main Layout (****`Layout.vue`****)**
  - `/` → `Home.vue`
  - `/userCenter` → `UserCenter.vue`
  - `/gameDetail` → `GameDetail.vue`
  - `/block-brawler` → `BlockBrawler.vue`
  - `/feedback` → `Feedback.vue`
  - `/alliance` → `Alliance.vue`
  - `/avatar` → `Avatar.vue`
  - `/beginner-guide` → `BeginnerGuide.vue`
  - `/momoverse-guide` → `MomoverseGuide.vue`
- **Event Pages**
  - `/valentines` → `Valentines.vue`
  - `/anniversary-raffle` → `AnniversaryRaffle.vue`
  - `/world-cup` → `WorldCup.vue`
- **Iframe Embeds**
  - `/iframe/:gameName` → `Iframe.vue`

## Release Notes


### **2025-02-19**

- Improved UI for the game selection menu.
- Fixed minor bugs related to the leaderboard ranking system.
- Optimized asset loading times.

### **2025-01-13**

- Fixed a bug where reward multipliers were incorrectly applied.
- Removed outdated event banners from the homepage.

### **2024-12-10**

- Added support for new seasonal events.
- Updated the game matchmaking algorithm.
- Improved mobile responsiveness for the user dashboard.

### **2024-11-20**

- Introduced a new referral system for players.
- Fixed an issue where certain game assets were not loading correctly.
- Updated localization support for additional languages.

### **2024-10-31**

- Fixed game invitation link issues.
- Added animation effects for in-game notifications.
- Improved the settings panel UI.

### **2024-09-15**

- Updated leaderboard ranking algorithm.
- Fixed UI inconsistencies in the reward display.
- Added animation effects for player achievements.

### **2024-08-28**

- Enhanced performance for mobile devices.
- Fixed a bug causing incorrect item prices in the shop.
- Added new game mode selection UI.

### **2024-07-22**

- Implemented in-game chat improvements.
- Fixed a bug where player avatars did not load correctly.
- Updated social media sharing options.

### **2024-06-30**

- Improved real-time notifications for game events.
- Fixed an issue with game session reconnections.
- Updated game loading screen UI.

### **2024-05-14**

- Introduced a new in-game tutorial for beginners.
- Fixed UI scaling issues on different screen sizes.
- Updated API calls to enhance backend performance.

### **2024-04-10**

- Optimized game asset preloading.
- Fixed a bug that prevented leaderboard refreshes.
- Updated navigation flow for a smoother user experience.

### **2024-03-08**

- Added new customization options for player avatars.
- Fixed an issue with incorrect currency conversion.
- Improved animation smoothness in the main menu.

### **2024-02-25**

- Updated game UI elements to enhance readability.
- Fixed a problem where rewards were not properly distributed.
- Improved response time for game actions.

### **2024-01-10**

- Fixed a critical bug causing game crashes on certain devices.
- Updated game sound effects.
- Optimized code for better performance.


### **2023-12-10**

- Added support for new seasonal events.
- Updated the game matchmaking algorithm.
- Improved mobile responsiveness for the user dashboard.

### **2023-11-20**

- Introduced a new referral system for players.
- Fixed an issue where certain game assets were not loading correctly.
- Updated localization support for additional languages.

### **2023-10-31**

- Fixed game invitation link issues.
- Added animation effects for in-game notifications.
- Improved the settings panel UI.

---

## Contribution Guidelines

Contributors should adhere to the following best practices:

- **Code Style**: Follow ESLint rules (`npm run lint` before committing).
- **Branch Naming**: Use the format `feature/xyz` or `bugfix/xyz`.
- **Commits**: Follow [Conventional Commits](https://www.conventionalcommits.org/).
- **Pull Requests**: Provide a clear description of the changes.

---

## License

This project is licensed under the MIT License. See `LICENSE` for more details.

For further inquiries, please contact the Mobox development team.


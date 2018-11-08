# reactproject1
React course project 1 (Indecision App)

1. Clone the project and open a commmand prompt (cmd).

2. Installing Node.js & Yarn
- https://nodejs.org/en/
- node -v (to check node version)
- npm -v (to check npm version)
- npm install -g yarn (to instal yarn)
- yarn --version (check yarn version)

3. Change directory to indecision-app

4. Install live server by typing (in cmd) ...
- npm install -g live-server
- live-server -v (to check live server version)

5. Install babel by typing (in cmd) ...
- npm install -g babel-cli@6.24.1
- babel --help (to check babel install successfully)

6. Run Babel by typing (in cmd) ...
- babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

7. Open new cmd without close the previous one and run live server.
- live-server public
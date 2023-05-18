# Replicating the bug

Quickstart
```
git clone https://github.com/Boux/vite-coffee-bug.git
cd vite-coffee-bug
npm install
npm run build
```
You should see errors, as it's trying to build with vue 3.3

If you downgrade to vue 3.2, it should build correctly
```
npm install vue@3.2
npm run build
# or
npm run dev
```

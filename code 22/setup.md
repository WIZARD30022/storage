## How to setup of tailwindcss 

step 1: Run the following command

```
npm install -D tailwindcss 
npx tailwindcss init
```

step 2: Update tailwind.conf.js file to include this line:
```
content: ["*.html"],
```

step 2: Create src/input.css to include:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

step 4: Include the src/output.css file to your html

step 5: Run the following command:
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```
# react-secial-media

- `firebase login` --- Login

- `firebase init` --- Generate starter files and select services (firebase.json, .firebaserc, database.rules.json)

- `firebase init hosting` Generate starter files with the hosting service or add hosting to your already existing services

- `firebase deploy --only database` --- Only deploy the database specific rules

- `firebase deploy` --- Deploy every change in rules you made locally to the firebase console, for example if you added a hosting service then the app will be hosted from now on.

- `firebase hosting:disable` --- Disable hosting

##  TODO

- React focused project
    - Hook: useState, useEffect, useContenxt, useCallback
    - use react-router-dom
    - React a vite based tempalte 
    `npm create vite@latest .`
    - Use a CSS framework: 
        - **Bootstrap**
        - **Pico** css (Minimalist CSS framework)
        - **Bulma** 
        - You can use **Tailwind** too but it's more complex
        - ` Pick one`
    - Firebase as BaaS and DB
    - Use the appropriate folder stucture
    - `SCSS` 
    - CRUD on multiple pages, keep the component based architecture

    - Folder struct:
        - scr:
            - components
                - <component_name>
                    - index.js
                    - <component_name>.jsx
                    - <component_name>.scss
            - pages
                - <page_name>
                    - index.js
                    - <page_name>.jsx
                    - <page_name>.scss
            - firebase
                - auth.js
                - firebase.js
            - hooks
            - services/api
            - contexts
            - main.jsx
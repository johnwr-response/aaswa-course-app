# Log
## Section: Settings
- tsconfig
- Environments
- Packages
- THEORY: Firebase
- Firebase Control Panel
- Firestore
- Speed Optimization
- Removing Default page
```
npm install -g firebase-tools
```
- Firebase config
- Adding Firebase in Module and Component

## Section: Styles
- THEORY: Styles
- Tools
  - SCSS: https://sass-lang.com/
  - BEM: https://en.bem.info/
  - Select Colors: https://material.io/design/color/the-color-system.html#tools-for-picking-colors
- THEORY: SCSS
- THEORY: BEM
- THEORY: Component Styles
- THEORY: Styles Structure
- Styles Folder
- Header Component
```
ng g c components/header
```
- Demo Section
```
ng g m pages/demo --routing
ng g c pages/demo
ng g m pages/demo/pages/styles --routing
ng g m pages/demo/pages/shared --routing
ng g c pages/demo/pages/styles
ng g c pages/demo/pages/shared
```
- Ending

## Section: Shared
- THEORY: Review basic Angular Elements
- THEORY: Division into Modules and Elements Grouping
  - File Structure Best Practice
    - module
      - components
      - services
      - directives
      - pipes
      - guards
      - resolvers
      - models
      - store
      - pages
      - shared
- THEORY: When does a Component become a Module?
- Theory
- THEORY: Shared
- Angular Material Folders
- Shared Folders
```
ng g m shared/buttons
ng g m shared/controls
ng g m shared/indicators
ng g m shared/layout
ng g m shared/popups
```
- THEORY: Moving Components to Shared
- Button
```
ng g m shared/buttons/button
ng g c shared/buttons/button
```
- THEORY: Form Controls
- Input
```
ng g m shared/controls/input
ng g c shared/controls/input
```
- THEORY: Validation
- Form-field
```
ng g m shared/controls/form-field
ng g c shared/controls/form-field
```
- Form-field Validators
- Password
```
ng g m shared/controls/password
ng g c shared/controls/password
```
- THEORY: Frontend Models
- Frontend Models
- THEORY: Why use a Shared Component if you already have a Material Component?
- Select
```
ng g m shared/controls/select
ng g c shared/controls/select
```
- Checkboxes
```
ng g m shared/controls/checkboxes
ng g c shared/controls/checkboxes
```
- Radios
```
ng g m shared/controls/radios
ng g c shared/controls/radios
```

# init
```
ng v
ng new course-app
# strict: yes
# routing: yes
# Stylesheet: SCSS
cd course-app
ng serve
```

# Github setup
```
git remote add origin https://github.com/johnwr-response/aaswa-course-app.git
```

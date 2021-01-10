## how an Angular App gets Loaded and Started ##

* http:://localhost:4200, this is where our development server hosted by CLI, will host our application.
* content of application can be changed by changing by app.component.html. It will automatically has to bootstrap. 
* **how does our browser or server hosting our angular application know that it should render the content of app.component.html?**
    * This is why, `app.component.html` is not served by angular. Instead, `index.html` (Single Page) file get served by server.
        * index.html file is normal html file. In body, we get `app-root`. this get changed by angular CLI. `app-root` is not default html element, instead it is one of our own component. This `app-root` get created by CLI for us, the root component of or application. 
        * all the files in the app folder here, which have component in their name, these files are related to this `app-root` component.
    * In `app.component.ts` , we have `selector` property, which assigns a string as value and string hold `app-root`. This information angular needed to be able to replace `<app-root></app-root>` part in index.html, with the template (content of `app.component.html` file) of this component, the component having this selector `app-root`.
    * In final `index.html` , we have `main.js`. this `main.js` gets generated from `main.ts`.
        * in `main.ts`, we bootstrap angular `AppModule`.
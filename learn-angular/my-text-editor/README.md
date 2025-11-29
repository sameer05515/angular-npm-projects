# MyTextEditor

A WYSIWYG text editor application built with Angular 15, featuring a customizable rich text editor component powered by [@kolkov/angular-editor](https://github.com/kolkov/angular-editor).

## Features

- **Rich Text Editing**: Full-featured WYSIWYG editor with formatting capabilities
- **Customizable Editor Component**: Reusable `CustomTextEditorComponent` with configurable options
- **Configurable Toolbar**: Show/hide toolbar and customize available formatting options
- **Editable/Read-only Modes**: Toggle between editable and read-only display modes
- **Custom CSS Classes**: Support for custom styling classes (quote, redText, titleText)
- **HTML Output Preview**: Real-time display of generated HTML content

## Technologies

- **Angular**: 15.2.0
- **Angular CLI**: 15.2.2
- **@kolkov/angular-editor**: 3.0.0-beta.0
- **TypeScript**: 4.9.4
- **RxJS**: 7.8.0

## Project Structure

```
src/
├── app/
│   ├── shared-components/
│   │   └── custom-text-editor/     # Reusable text editor component
│   ├── test-components/
│   │   └── test-text-component/    # Test component for editor
│   ├── app.component.*              # Root component
│   ├── app.module.ts               # Root module
│   └── app-routing.module.ts       # Routing configuration
└── assets/                         # Static assets
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Available Routes

- `/custom-text` - Main text editor component (default route)
- `/test-custom-text` - Test component for editor functionality

## Build

Run `ng build` or `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

Use `npm run watch` for a development build with watch mode.

## Running Unit Tests

Run `ng test` or `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Component Usage

### CustomTextEditorComponent

The `CustomTextEditorComponent` accepts the following inputs:

- `htmlContent` (string): The HTML content to display/edit
- `editable` (string): Set to `'true'` to enable editing, `'false'` for read-only
- `showToolbar` (string): Set to `'true'` to show the toolbar, `'false'` to hide it

Example:
```html
<app-custom-text-editor 
  [htmlContent]="myContent" 
  editable="true" 
  showToolbar="true">
</app-custom-text-editor>
```

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

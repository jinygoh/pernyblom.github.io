# Abundant Music Overview

This document provides an overview of the Abundant Music project, a procedural music generator.

## Project Structure

The project is structured as a single-page application (SPA) with the following key directories:

- `css/`: Contains all the CSS files for styling the application.
- `js/`: Contains the JavaScript files that implement the application's logic.
- `help/`: Contains HTML files for the help section.
- `samples/`: Contains audio samples used by the music generator.
- `songpresets/`: Contains preset song data in JSON format.
- `tutorials/`: Contains HTML and data for the tutorials.

## Execution Flow

1. **`index.html`**: The main entry point of the application. It loads the necessary JavaScript files and sets up the basic HTML structure.
2. **`js/loader.js`**: This script is responsible for loading all the required JavaScript libraries and application-specific code. It uses `Modernizr.load` to conditionally load resources.
3. **`js/composemain.js`**: This is the core script of the application. It initializes the user interface, sets up event listeners, and handles the main functionalities like music generation, playback, and export.

## Core Functionalities

- **Procedural Music Generation**: The application generates music based on a set of parameters and a seed value. The generation process is handled by a web worker to avoid blocking the main UI thread.
- **Music Playback**: The application uses the Web Audio API to play the generated music. It also provides a fallback to an SM2 player for browsers that do not support the Web Audio API.
- **Export**: Users can export the generated music to various formats like MIDI, MP3, and Ogg. The export functionality is also handled by a web worker.
- **Song Settings**: The application provides a comprehensive set of settings that allow users to customize the generated music. These settings are organized into different tabs and can be saved and loaded.
- **Visualizer**: The application includes a 3D visualizer that displays the generated music in real-time. The visualizer is implemented using WebGL.

## Data Models and Algorithms

The application uses a variety of data models to represent musical information, including:

- **`SongSettings`**: An object that stores all the settings for a song.
- **`GenInfo`**: An object that contains the information needed to generate a song.
- **`RenderData`**: An object that stores the rendered musical data, including notes, tempo events, and channel maps.

The music generation process involves a series of algorithms that create the different parts of a song, such as the melody, harmony, and rhythm. These algorithms are based on principles of classical music theory and use a probabilistic approach to generate unique compositions.

## Conclusion

Abundant Music is a complex and feature-rich application that demonstrates the power of procedural generation and web technologies. By understanding its project structure, execution flow, and core functionalities, developers can gain insights into how to build similar applications and contribute to the project's future development.

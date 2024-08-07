# Karaoke App

## Project Structure

This Karaoke App is a React application.
The main component, **App**, handles fetching data from the backend and manages the overall state of the application.
It passes necessary data as props to its child components: **TranscriptSelector**, **VideoPlayer**, and **TranscriptDisplay**.
The **TranscriptSelector** component lists available transcripts, allowing users to select one,
which triggers the **App** component to update the state with the corresponding video and transcript data.
This structure ensures clear separation of concerns and ease of maintenance.

### App component
App Component: The main component responsible for managing the overall state and fetching data from the backend. It coordinates data flow and passes necessary props to child components.

### TranscriptSelector component
Responsible for displaying the list of transcripts and handling user interactions for selecting a transcript.

### TranscriptDisplay component
The TranscriptDisplay component is designed to render a list of words from a transcript,
ensuring proper formatting by starting new lines for new paragraphs and avoiding spaces before punctuation marks.

### VideoPlayer component
Displays the video corresponding to the selected transcript. It receives the video URL and controls for playback.


## Trade-offs
**State management**
   - **Decision:** Centralized state management in the App component.
   - While this simplifies state management by keeping it all in one place, it can make the App component more complex and harder to maintain as the application scales. An alternative could have been using a state management library like Redux, which would provide more structure but add complexity.

**Error Handling:**
   - **Decision:** Basic error handling in data fetching.
   - Simple error handling is easier to implement but may not cover all edge cases or provide the best user experience. More comprehensive error handling would improve robustness but require more code and complexity.

**Testing:**
- **Decision:** Focused on unit and integration tests using Jest and React Testing Library.
- Writing tests ensures code reliability and catches bugs early but requires additional time and effort.

**Lazy Loading Transcripts:**
- **Decision:** Implemented logic to render the entire transcript.
- Rendering the whole transcript makes the code simpler and ensures all data is available but can slow down performance with large transcripts. Alternatively, loading only the visible part improves performance but makes the code more complex.


## First run

Go to `https://github.com/adiBinen/Karaoke-app` and clone the repository.

Install dependencies and required modules:
### `npm i`

Run: 
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

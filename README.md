# Memory Game App

This is a memory game application built using React, TypeScript, and Vite. It allows players to test their memory by flipping pairs of cards to find matching images of cats. The game consists of three steps: player registration, the game board, and the final step.

## Architecture

### Components

- **Player Registration**: Allows players to input their names and choose the difficulty level (number of card pairs).
- **Board**: The game board where the memory cards are displayed. Cards are represented as flipping divs with cat images.
- **Final Step**: This step displays a congratulatory message for the winner and a "play again" button.
- **Layout**: A wrapper component that renders the overall layout including header and main content.

### State Management

- **Context API**: React Context API is used for managing the state of the game. It includes information about the active player, player names, and the active step in the game.
- **Local Component State**: The board logic uses component state to manage the state of individual cards, including whether they are flipped, matched, or unmatched.

### Switching Steps

- A switcher in the root app file switches between different steps/screens based on the active step value from the context provider.

### Board Logic

- Generates an array of card pairs based on the chosen difficulty level.
- Each card pair consists of two elements with properties like `src` for the cat image URL, `isExpended`, and `isMatch`.
- Cat images are loaded from a third-party API.
- A timeout is used to briefly reveal all cards before starting the game.
- When a player clicks on a card, its state properties (`isExpended` and `isMatch`) are updated.
- If the chosen cards match, the score is incremented, and the game continues. If not, the cards are reset, the score is reset, and players are switched.

## How It Works

### Player Registration

- Players can register by entering their names and choosing the difficulty level (number of card pairs) for the game.

### Game Board

- Once players are registered and the difficulty level is chosen, the game board is displayed.
- The board consists of flipping divs representing cards, each containing a cat image.
- Before the game starts, there is a brief moment where all cards are revealed for 2 seconds.
- Players can click on cards to flip them and reveal the cat images underneath.
- If two flipped cards match, they remain face-up, and the player earns a point.
- If the cards don't match, they are flipped back over, and the player's score is reset.
- The game continues until all pairs of cards are matched.

### Final Step

- Once all card pairs are matched, a congratulatory message is displayed for the winner.
- Players have the option to play again by clicking the "play again" button.

## Technologies Used

- React: Used for building the user interface and managing components and state.
- TypeScript: Added for type safety and improved code readability.
- Vite: Used as the build tool for React applications.
- Third-party Cat Image API: Utilized to fetch cat images for the memory cards.

## Running the Application

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the application using `npm run dev`.
5. Access the application in your browser at `http://localhost:3000`.

# What can be improved

1. Create more friendly design.
2. Move board state manangement from local state to context or maybe generally entire app state to redux state manager.
3. MAybe can be found bugs caused by timeouts used for flipping cards.
4. Types reusability, in app can be found code dublicates related to typization and dublicates of logic code

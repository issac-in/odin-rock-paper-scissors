# odin-rock-paper-scissors

This is currently a JavaScript version of Rock Paper Scissors, on a boilerplate HTML file. The purpose of the project as to apply the JavaScript fundamentals I've learned so far from the Odin Project.

The most intensive part of this project was not the writing of pseudo-code, nor converting the pseudo-code into writing. It was making a concerted effort to having detailed commit bodies with simplified commit titles, to explain the 'what' and 'why' I did certain things a certain way. I had a few logic errors to iron out near the end of the project, but those weren't too bad.

As for potential future features, I do intend to revisit this in the future to add a Graphical User Interface with buttons and text to it. This was part of the reason why I put in extra effort for a really clean commit history, and writing extremely readable code.

## Pride Points

The overall structure of the logic.js file for this game is written really nicely. The highest level functions, `playRound()` and `game()`, are written with the highest level of
abstraction so that the code itself is readable in English, not just as JavaScript code. 

Furthermore, there was an intentional effort to maintain consistent naming schemes for variables and functions, as well as a deliberate ordering of the functions, where the functions are in top-to-bottom order based on when they're called in `playRound()` and `game()`. 
    
Then to top it off, every function never goes more than three levels of nesting - if it had to, it often indicated that the function was going beyond its scope and should be split up. This also contributes to the overall readability of the code, and being able to skim to understand what is going on.

There's also expanded functionality beyond the scope of original project's requirements, such as:
 * Being able to play a multi-round game of rock paper scissors that isn't 5 rounds
 * Proactive handling of not standard and/or invalid inputs from prompt()


## Credits

Credits to 'The Odin Project' for developing this project idea.
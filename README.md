# charCount

## Character Counter Web App

This is a simple web application written in HTML, CSS, and JavaScript that helps you count the occurrences of a specific character within a sentence. 

### Purpose

The application is designed to:

* Assist with analyzing text data.
* Help with initial research for designing a keyboard with frequently used characters in easily accessible positions.

### Running the application

1. **Download the files:** Download the following files and save them in the same directory:
    * `index.html`
    * `style.css`
    * `script.js`
2. **Open the HTML file:** Open the `index.html` file in a web browser.

### Using the application

1. **Enter a sentence:**  In the text box labeled "Enter a sentence," type the sentence you want to analyze.
2. **Enter a character:** In the text box labeled "Enter a character to count," type the character you want to find the count of.
3. **Click the "Count" button:** Click the button to initiate the character count.
4. **View the result:** The result will be displayed below the input fields, indicating the number of times the entered character appears in the sentence.

### Technical aspects

* The application utilizes the `countOfChar` function written in JavaScript to calculate character occurrences.
* The function iterates through the sentence string and checks for matches with the entered character (case-insensitive).

This is a basic example, and you can further customize it by:

* Implementing case-sensitive character search.
* Including functionality to count special characters or whitespace.
* Expanding the functionality to support character frequency analysis for the entire sentence.

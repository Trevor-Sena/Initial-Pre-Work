# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

Step 1: The browser sends a request to the server asking for data to display on the web page.

Step 2: The server finds the data being requested and sends it back to the browser.

Step 3: The browser renders data into content to be displayed using programing language like HTML, CSS, and JavaScript.


## From start to finish, how does data reach you to be rendered in the browser?

The browser breaks down the URL into parts to be able to find where to go and how it should be read. The domain we type into the browser is interpreted as numbers called an IP address by the computer. Using the unique identifier (IP address), the browser is requesting information from the server to be displayed as a web page.

Once the server finds the data being requested it communicates the code back to the client side to be rendered in the browser. First thing that is read by the browser is the HTML code, which tells the browser what content is to be seen or in other words the structure of the web page. Next is the CSS code, which displays the style the content should have. Finally, JavaScript is ran once the web page if fully loaded to perform certain actions or logic.


## What code is rendered in the browser?

HTML (HyperText Markup Language).

## What is the server-side code’s main function?

To always be connected to the internet and to provide data it stores from the internet when called upon.

## What is the client-side code’s main function?

To request data from the server.

## What is runtime?

When a program is actively running (being used) on your computer.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

One, inside the client's web browser.

## How many instances of the server-side code are available at any given time?

Two, static and dynamic.

## How many instances of the databases connected to the server application are created?

Multiple, generally up to 50 instances.

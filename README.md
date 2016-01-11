## Fibonacci's Button
![fib](https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fibonacci_spiral_34.svg/220px-Fibonacci_spiral_34.svg.png)

The Fibonacci Sequence is an integer sequence commonly used in places where increasing sequences are needed, like login throttling or coding interview questions (:smile:). Formally it's defined as:

`fib(n) = fib(n-1) + fib(n-2)`

For this exercise we'll use the following base cases:

`fib(0) = 0`, `fib(1) = 1`


### What do I do?

This is a simple test of basic CS fundamentals as well as basic Angular knowledge. The spec is as follows:

- [ ] A single page that contains a button, as well as the current value of the sequence interpolated next to it, starting at 0.
- [ ] When the button is clicked, we will update the view to display the next step of the sequence.

### For consideration:

- Don't worry too much about dependency management. Including angular in a `<script>` tag is fine for this example.
- Performance is important here. Make sure to watch how frequently you're evaluating a `fib()` function such that you're only running it as needed.
- Update the last README.md section with any thoughts or explanations you may have.
- You can choose to use recursion or iteration for your implementation, but please let us know why you chose the one you did in the README.

### Extra Credit

- Two buttons, one that uses an iterative Fibonacci algorithm, and another that uses a recursive one, labeled appropriately.
- Automated tests included for the project. Use your framework of choice for testing and include dependencies such that we can run the tests here.


### Solution Discussion:

####Script files: angular.min.js, app.js

Normally, I'd separate out the controller into its own separate file. In fact, normally I'd have a directory for the route, with a template and a [route].js file with the controller. But this was such a small application that I went with the single .js file. I'd actually never use Angular for something of this size. A smaller library would work, or even better no library at all. But I realize a vanilla javascript approach isn't the point. I used Bower to quickly load Angular, in a folder structure that I'm used to. 

####app.js

I named the app ngChallenge because it amused me, normally I'd name it something a little more descriptive, like fibChallenge. ngChallenge still works, because the challenge is as much about using Angular, rather than just about the sequence. 

The controller, first, defines the three variables to hold the values for the current sequence: a + b = current number. Then, it defines an array to show the sequence of Fibonacci numbers. Then, it defines the current number of steps the app has taken through the sequence. It starts at one, because 0 + 1 = 1 is technically the first step.

#####$scope.recurseFib/recFib(n)

The first option, recursive. This is a wrapper function, because it calls it for all three parts of the formula. Technically, I didn't have to do this, but since I wanted to show the whole sequence and I was doing it for every method, I figured it was alright. 

This was the prettiest, as well as the slowest method. Recursion is inherently slower than iteration especially with no caching. [I found this](http://www.codeproject.com/Articles/21194/Iterative-vs-Recursive-Approaches "I found this") that would have helped, but it wasn't mine, so I decided not to include it. In production, I'd include it and comment the URL into the code. Either way, it would have been slower. But the code does look pretty. The reason it's slower is that for calculating the 7th number, it also has to calculate the 6th, 5th, 4th, 3rd, 2nd, and 1st, and it *also* has to calculate the 5th, 4th, 3rd, 2nd, and 1st, separately. I've also included a console.count to show when every recursion takes place.

The wrapper function also iterates the step count, updates all of the individual parts of the sequence, and pushes the result to the array listing the Fibonacci numbers

#####$scope.iterateFib/itFib(n)

The next option, iterating. Another wrapping function, for the same reasons.

If I had to do a CS-ish implementation in real life, I'd probably do this one. Iterating isn't as pretty as recursion, but personally I find it easier to understand, and it should technically be faster .I've also included a console.count to show when every iteration takes place.

Iteration grinds through the Fibonacci sequence to a given number of steps, and it allows us to stop at any given step and calculate all the parts of the sequence with one call.

#####$scope.updateFib

This one isn't a wrapper function, because it updates the variables directly. Essentially, this is the same operation as the iterator, but it doesn't bother to calculate the a, b, and c every time. Instead, it uses those same variables we use to display in the app. Because of Angular's two way data binding, updating it here reflects on the page. This is the quickest, the first I came up with, and the only one I didn't have to Google around a bit for. One calculation per step, regardless of the number. The drawback for this is, it can only calculate the next in the sequence. If you wanted the *n*th in the sequence, I'd have done the iteration, as well as a URL route to go with it, so going to /{*n*} would load that parameter into the controller. I'd probably have used the AngularUI Router since even the core Angular team has admitted that it's the superior product. I've also included a console.count to show when every update takes place.

####index.html

Technically, it's index.jade. I almost always write the HTML files in Jade because writing HTML by hand is a pain, and I generally end up making the IDE do whatever I would have Jade do anyway (looping, including, etc.). I didn't include the Jade file, but if you look at the HTML source you'll see that it's template stuff. 

Declared the app and the controller, so that's taken care of. Buttons with click directives and a list with a repeat directive. 

####style.css

Again, I didn't write this by hand. I used SCSS, even though it's minor stuff, just because I'm so used to all of its nice features. And it all compiles down to CSS anyway. Just a little bit of work to make everything a little clearer. 
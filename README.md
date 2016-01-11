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
- Your solution explanation goes here.

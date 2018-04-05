# animated-cursor-with-javascript
animated cursor with javascript

how to use:
call animate_cursor with an array of url strings and a delay as the arguments. animate_cursor returns an interval id. if you want to stop the animation, call clearInterval with that id.

example of use:
<pre>//to initialize the animation
var interval_id = animate_cursor(
  [
 	  "https://i.imgur.com/NajnMrM.png",
	  "https://i.imgur.com/hveydUq.png"
  ],
  100
);

//to stop the animation later
clearInterval(interval_id);</pre>

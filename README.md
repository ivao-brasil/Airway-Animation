# POC - Airway Animation

Proof of concept on how to make the airway animation section for the new divisional website.

#### Here is how it should look:

![How it should look](https://i.imgur.com/GaLOYxG.png)

 *Keep in mind you should have access to this in the Figma file.*

### Issue we found:

- Making it with a single image is not enough.
- It is not possible to make it responsive with a single image or even a GIF.
- A Lottie animation would have the same issue cited above.

### Solution:
Make it in CSS / HTML / JS! 

But how? *Good question.* haha

---

I have made a simple HTML file with a wrapper div and a JS file injecting child elements (The airplanes). Feel free to use it as a starting point. Check out the JS file for more info *(It should be quite simple to understand)*.

Currently I am just adding planes but not actualy animating them... The animation is quite simple just a horizontal displacement. Pro tip: The side the plane is going will change the direction of the animation.

At this time this I open this place for us to discuss the best way to implement this.

---


Todo: add config object for lib.

Idea:
```js
const config = {
  maxLimit: 'container',
  background: 'transparent',
  resizable: true,
  colorFromLeft: '#a339e3',
  colorFromRight: '#2ec662',
}
```

Types Schema:

```ts
interface configTypes {
  maxLimit: 'container' | number,
  background: 'transparent' | string,
  resizable: true | false,
  colorFromLeft: string[] | string | 'random',
  colorFromRight: string[] | string | 'random',
}
```

How it should look in a React Project: 
```jsx

import React from 'react';
import AirwayAnimation from 'airway-animation';

const config = {
  maxLimit: 'container',
  background: 'transparent',
  resizable: true,
  colorFromLeft: '#a339e3',
  colorFromRight: '#2ec662',
}

function sampleData() {
  return (
    <AirwayAnimation config={config} />
  );
}

export default sampleData;

```


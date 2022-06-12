# POC - Airway Animation

> Made with create-react-library

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Proof of concept on how to make the airway animation section for the new divisional website.

#### Here is how it should look:

![How it should look](https://i.imgur.com/GaLOYxG.png)

## Install

```bash
npm install --save git+https://github.com/ivao-brasil/POC-Airway-Animation.git
```

## Usage

```tsx
import React from 'react'

import { AirwayAnimation } from 'airway-animation'
import 'airway-animation/dist/index.css'

const App = () => {
    return <AirwayAnimation />
}
```

Props Schema:

```ts
interface Props {
    airplaneColors?: {
        left?: string;
        right?: string;
    };
}
```

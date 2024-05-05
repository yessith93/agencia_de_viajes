
import React from 'react'
import { createRoot } from 'react-dom/client';
import NiboBar from './nivo-bar'

const domNode = document.getElementById('bar');
const root = createRoot(domNode);
root.render(<NiboBar />);
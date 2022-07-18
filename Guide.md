# Introduction
***useRef*** is a React hook that can be used in two
ways:
* it can enable the access to the DOM element
directly so we can manipulate it
* It can be used so save a value between re
rendersin its current property that doesn't
cause a re-render while being updated.

## What is the difference?
Both solutions are similar,
however useState hook causes
re-renders with every state
change while useRef returns an
object with a current property
holding the actual value
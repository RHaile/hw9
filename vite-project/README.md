## Tip Tracker Project
Web application where tip-based employess can input  daily earnings and keep track of income.


### Components Needed
1. [App]
   - root of app
   - import all components here
   - pass down props to child components

2. [Nav]
   - display title "Tip Tracker"

3. [TipForm]
   - form to enter new tips
   - "Amount" input, "Date" input, & "Add Tip" button
   - use `useState` hook to manage inputs
   - use event handles/listeners to manage data

4. [TipSummary]
   - use array functions to calculate total & average
   - display "Total Tips" & "Avg Daily Tips"

5. [TipItem]
   - layout for individual tip entry 
   - displays "Tip Amount" and "Date" when entry is added to [TipList]

6. [TipList]
   - displays list of tip entered
   - render individual tips from child component [TipItem]




### Styling
- Used DaisyUI component library to style app
- Added daisyUI & tailwind cdn tag in html `head` tag


### Notes
*Component Layout*
  - import libraries and other components needed
  - create function that returns JSX (`useState` hook always goes before `return`)
  - `export default` component
*Set Up*
  - initialize new project w/ Vite
  - delete any default code or files not needed
  - organize JSX components separately into [src] folder
*Issues*
  - Took some time but had to brush up on `useState` hook and also used chat GBT to get the event handler 'handleSumbit' working properly
  - I was able to integrate daisyUI into my components fine but had a hard time customizing the style to my liking. Couldn't figure out how to center items like "Tip Tracker" in navbar & the[TipSummary] form
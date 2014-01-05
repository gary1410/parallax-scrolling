###Parrallax###

Below is how you make the background stationary while having the ability to scroll.

```css
#grid {
  background: #fff url('../img/grid.gif') top left;
  position: fixed; /* so that it stays still and doesn't move this puts the content on top of the screen*/
  top: 0; /* this is set to zero */
  width: 100%;
  height: 2000px; /* We will see all 2000 px of the height then show at the botton.*/
  z-index: 1;
}

#content {
  color: #888;
  position: relative;
  text-align: center;
  z-index: 2;
  width: 960px;
  margin: 0 auto;
}

#content article {
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  margin: 50px 0;
  height: 200px;
  padding: 20px;
  text-align: left;
}
```
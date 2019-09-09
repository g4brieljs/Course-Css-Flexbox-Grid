# Course of CSS advanced, learning FLexbox, and CSS grid

And this repository, i will be uploading summary of course Css advanced with Flexbox and css grid.

# Projects with CSS FLEXBOX

# First project | Cards for blog with Flexbox

![Cards](https://github.com/g4brieljs/Course-Css-Flexbox-Grid/blob/master/1-Cards-flexbox/cardflexbox.png)

# Second project | Menus with Flexbox

![Menus](https://github.com/g4brieljs/Course-Css-Flexbox-Grid/blob/master/2-menus-flexbox/menus-flexbox.png)

# Third project | Website e-learning, with flexbox, Gulp, and Sass 

![Universidad](https://github.com/g4brieljs/Course-Css-Flexbox-Grid/blob/master/3-Universidad-flexbox-Sass-Gulp/unversidadflexbox.png)

# Fourth project | Blog of trips with Flexbox

![TravelBlog](https://github.com/g4brieljs/Course-Css-Flexbox-Grid/blob/master/4-Blog-viajes-flexbox/blog-flexbox.png)

# Fiveth project | Holy grail with Flexbox

![holyGrail](https://github.com/g4brieljs/Course-Css-Flexbox-Grid/blob/master/5-holy-grail-flexbox/holy-grail-flexbox.png)

# Sixth project | Coments with Flexbox

![Coments](https://github.com/g4brieljs/Course-Css-Flexbox-Grid/blob/master/7-layoutsFlex-flexbox/cometarios-flexbox.png)

# Seventh project | Center text, and vertical with Flexbox

![Center](https://github.com/g4brieljs/Course-Css-Flexbox-Grid/blob/master/7-layoutsFlex-flexbox/centrado-vertical.png)

# Eighth project | Mansory style with Flexbox

![mansory](https://github.com/g4brieljs/Course-Css-Flexbox-Grid/blob/master/7-layoutsFlex-flexbox/mansory-flexbox.png)

# Nineth project | Footer fixed with flexbox

![Admin](https://github.com/g4brieljs/Course-Css-Flexbox-Grid/blob/master/7-layoutsFlex-flexbox/footer-fijo-flexbox.png)

# Tenth project | Dashboard with Flexbox

![Admin](https://github.com/g4brieljs/Course-Css-Flexbox-Grid/blob/master/8-adminflex-flexbox/admin-flexbox-gulp-sass.png)

# Css Grid 

**What is CSS GRID?** is a system of 2 dimention, Grid is a new form of create layouts, nothing framework you would has control on laouts you create.

**CSS FLEXBOX** is one dimention
**CSS GRID** is two dimention

![example](https://github.com/g4brieljs/Course-Css-Flexbox-Grid/blob/master/9-CssGrid/basicGrid.png)

**You can use FLEXBOX and GRID together**

**Important concepts**

-Grid lines
![example](https://github.com/g4brieljs/Course-Css-Flexbox-Grid/blob/master/9-CssGrid/concept1.png)

-Grid Row
![example](https://github.com/g4brieljs/Course-Css-Flexbox-Grid/blob/master/9-CssGrid/concept2.png)

-Grid Column
![example](https://github.com/g4brieljs/Course-Css-Flexbox-Grid/blob/master/9-CssGrid/concept3.png)

-Grid track
![example](https://github.com/g4brieljs/Course-Css-Flexbox-Grid/blob/master/9-CssGrid/concept4.png)
![example](https://github.com/g4brieljs/Course-Css-Flexbox-Grid/blob/master/9-CssGrid/concept5.png)
**Important**
If you define Grid axis row you had Grid track row.

-Grid Cell
![example](https://github.com/g4brieljs/Course-Css-Flexbox-Grid/blob/master/9-CssGrid/concept6.png)
**Similar a table of HTML**

-Grid area
![example](https://github.com/g4brieljs/Course-Css-Flexbox-Grid/blob/master/9-CssGrid/concept7%5D.png)
**A area can has several cells, when you agroup the cell you will have area**

# Basics of Grid

### Container

```css
display: grid;
grid-template-columsn: 50% 25% 25%;
grid-tamplate-rows: 25% 25% 25% 25%;
```

### Sons

-- grid-column: 1 / 2;
-- grid-row: 1 / 5;

### Auto

- grid-auto-flow: dense; column; row;
// row es el default

### Shorthand
- grid: row row / column column;  
```css 
grid: 50% 50% / 33% 33% 33% 
```

### Grid area
```css
- grid-row: 1 / 3;
- grid-column: 1 / 3;
```
- Shorthand for grid-row and grid-column:
```css
grid-area: 1 / 1 / 3 / 3;
```

### Repeat

```css
grid-template-columns: 50% repeat(2, 25%);
```

```css
grid: repeat(2, 50%) / repeat(3, 33%);
```

### Grid template area

```css
 /*
    template area
    le pasas el nombre:
    */
    grid-template-areas: 
        "header header header header"
        "principal principal principal sidebar"
        "footer footer footer footer"
```

No es bueno usar margin con los template, se recomienda usar:
```css
grid-gap: 1rem;
grid-column-gap: 100px;
grid-row-gap: 100px;
```

### Fraction in css Grid
```css
grid-template-columns: 1fr 1fr;
grid-template-rows: 2fr 1fr 1fr;
```
Primero siempre sera row row, luego column column
```css
grid: repeat(2, 1fr) / repeat(3, 1fr);
```

### Align in css grid

```css
/*Vertical*/

/*UP vertical*/
align-items: start;
```

```css
/*Horizontal*/
justify-content: center;
/*center horizontal*/

/*Space bettween*/
justify-content: space-between;
```

## Experimental Design

```css
.contenedor{
        grid-template-areas: 
            "header header header header"
            "izquierda nav nav nav"
            "izquierda contenido contenido derecha"
            "izquierda contenido contenido derecha"
            "footer footer footer derecha";
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 80px 80px auto auto 80px; 
        grid-gap: 1rem;
    }
```

![example](https://github.com/g4brieljs/Course-Css-Flexbox-Grid/blob/master/9-CssGrid/template-area.png)




# First project with Css GRID

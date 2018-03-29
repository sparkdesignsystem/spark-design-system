---
title: Class Naming Convention
---

# {{title}}

The Spark Design System uses a strict class naming convention. This allows us to keep our classes flat, avoid conflicts, provide clarity, and improve legibility. This is done by combining 4 techniques: a global namespace, class prefixes, pascal casing, and BEM syntax.

All classes in the Spark Design System must adhere to this naming convention.

## Global Namespace
```
.sprk-
```
One of the most annoying things that happens when you use a CSS library is class naming conflicts. You already use the class `.button` and the library also uses it and it overrides your styles.

To avoid this, the Spark Design System uses a global namespace to ensure that it's styles don't interfere with the custom styles in your app.

## Class Prefixes
After the global namespace, each class name has a prefix which gives information about what the class is doing. The prefixes available are:

* **`b-`** (Base) For classes that add additional style to base HTML elements.
* **`o-`** (Object) Cosmetic-free design patterns that are very dangerous to change because they are often used in unrelated contexts. E.g. the OOCSS Media Object.
* **`c-`** (Component) Implementation-specific pieces of UI. CSS is safe to change because it is isolated to the specific component.
* **`u-`** (Utility) Highly specific, highly reusable, usually single purpose, and have high specificity.
* **`is-`, `has-`** (State) These classes are typically added and removed through JavaScript or on the server to show specific states.

## Pascal Casing
After the namespace and prefix, the main part of the class name doesn't stand out very well. For this reason we use pascal case to visually separate it from the rest of the name. For example:
```
.sprk-c-HighlightBoard__content
```

## Class Suffixes
Responsive suffixes on classes are utilized when the need to have styles start at a specific breakpoint occurs. The `@` symbol must be escaped in the stylesheet. For example:
```
.sprk-o-Flex\@xl
```

## BEM Syntax
BEM stands for "Block, Element, Modifier". It is a modular application development methodology whose naming convention has become very popular for writing modular, flat CSS selectors. The 3 parts of BEM are:

#### Block
The primary component block. In our convention it refers to the PascalCase part of the class. For example:
```
.sprk-c-HighlightBoard
```

#### Element
A child of the primary block. It is represented by two underscores that separate it form the Block. For example:
```
.sprk-c-HighlightBoard__content
```
The following is not allowed:
```
.sprk-c-HighlightBoard__content__child-content
```

#### Modifier
A variation that extends either a Block or an Element. It is represented by two dashes that separate it from the Block or Element. For example:
```
.sprk-c-HighlightBoard--jumbo
.sprk-c-HighlightBoard__content--image
```
The following is not allowed:
```
.sprk-c-HighlightBoard--jumbo--red
```

### Additional Resources
* [CSS Architecture for Design Systems](http://bradfrost.com/blog/post/css-architecture-for-design-systems/) - Brad Frost with thoughts on a very similar naming system.
* [More transparent UI Code with Namespaces](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/) - Harry Roberts explains class prefixes.
* [SUIT CSS Component Names](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md#components) - Nicolas Gallagher's SUIT CSS component naming convention.
* [MindBEMding – getting your head ’round BEM syntax](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) - Harry Roberts explains BEM syntax.
* [Managing Large CSS Projects with ITCSS](http://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528) - Harry Roberts explains the ITCSS architecture.
* [Responsive Suffixes](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/) - Harry Roberts explains adding responsive suffixes to BEM naming

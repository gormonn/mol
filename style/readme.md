# $mol_style

Staticaly typed css style sheets. Following samples show which CSS code are generated from TS code.

## BEM Block

```tree
$mol_page $mol_view
```

```typescript
$mol_style_define( $mol_page , {
	flexDirection: 'column',
} )
```

```css
[mol_page] {
	flex-direction: column;
}
```

## BEM Element

```tree
$mol_page $mol_view
	sub /
		<= Body $mol_scroll
}
```

```typescript
$mol_style_define( $mol_page , {
	Body: {
		overflow: 'scroll',
	},
} )
```

```css
[mol_page_body] {
	overflow: scroll;
}
```

## BEM Element of Element etc

```tree
$mol_scroll $mol_view
	sub /
		<= Strut $mol_view
$mol_page $mol_view
	sub /
		<= Body $mol_scroll
```

```typescript
$mol_style_define( $mol_page , {
	Body: {
		Strut: {
			display: 'none',
		},
	},
} )
```

```css
[mol_page_body_strut] {
	display: none;
}
```

## Nested components by class name

```tree
$mol_button $mol_view
$my_app $mol_view
```

```typescript
$mol_style_define( $my_app , {
	$mol_button: {
		cursor: 'pointer',
	},
} )
```

```css
[my_app] [mol_button] {
	cursor: pointer;
}
```

## Child components by class name

```tree
$mol_list $mol_view
```

```typescript
$mol_style_define( $mol_list , {
	'>': {
		$mol_view: {
			display: 'block',
		},
	},
} )
```

```css
[mol_list] > [mol_view] {
	display: block;
}
```

## Attributes

```tree
$mol_link $mol_view
	attr *
		mol_link_current true
```

```typescript
$mol_style_define( $mol_link , {
	'@': {
		mol_link_current: {
			'true': {
				color: 'black',
			},
		},
	},
} )
```

```css
[mol_link][mol_link_current="true"] {
	color: black;
}
```

## Pseudo classes

```tree
$mol_string $mol_view
```

```typescript
$mol_style_define( $mol_string , {
	':focus': {
		outline: 'none',
	},
} )
```

```css
[mol_string]:focus {
	outline: none;
}
```

## Pseudo elements

```tree
$mol_text $mol_view
```

```typescript
$mol_style_define( $mol_text , {
	'::first-child': {
		fontWeight: 'bolder',
	},
} )
```

```css
[mol_text]::first-child {
	font-weight: bolder;
}
```

## Media queries

```tree
$mol_scroll $mol_view
```

```typescript
$mol_style_define( $mol_scroll , {
	'@media': {
		'print': {
			overflow: 'visible',
		},
	},
} )
```

```css
@media print {
	[mol_scroll] {
		overflow: visible;
	}
}
```

## Theming

```tree
$mol_page $mol_view
```

```typescript
$mol_style_define( $mol_page , {
	background: $mol_theme.back,
	boxShadow: `0 0 0 1px ${ $mol_theme.line }`,
} )
```

```css
[mol_page] {
	background: var(--mol_theme_back);
	boxShadow: 0 0 0 1px var(--mol_theme_line);
}
```

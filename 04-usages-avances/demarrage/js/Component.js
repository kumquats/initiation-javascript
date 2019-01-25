// @flow
// 1. Créer une classe `Component`
export default class Component {
	tag/*:string*/;
	attribute/*:?{name:string, value:string}*/;
	children/*:Array<Component|string>*/;
	constructor( tag/*:string*/, attribute/*:?{name:string, value:string}*/, children/*:Array<Component|string>*/=[] ){
		this.tag = tag;
		this.attribute = attribute;
		this.children = children;
	}
	render()/*:string*/{
		return `<${this.tag} ${this.renderAttribute()} ${
			this.children.length ?
			`>${this.renderChildren()}</${this.tag}>` :
			`/>`
		}`;
	}
	renderAttribute()/*:string*/{
		if ( this.attribute ){
			return `${this.attribute.name}="${this.attribute.value}"`
		}
		return '';
	}
	renderChildren()/*:string*/{
		return this.children.map( (child/*:Component|string*/) => (
			child instanceof Component ? child.render() : child
		)).join('');
	}
}

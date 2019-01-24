// 1. Créer une classe `Component`
export default class Component {
	tag;
	attribute;
	children;
	constructor( tag, attribute, children=[] ){
		this.tag = tag;
		this.attribute = attribute;
		this.children = children;
	}
	render(){
		return `<${this.tag} ${this.renderAttribute()} ${
			this.children.length ?
			`>${this.renderChildren()}</${this.tag}>` :
			`/>`
		}`;
	}
	renderAttribute(){
		if ( this.attribute ){
			return `${this.attribute.name}="${this.attribute.value}"`
		}
		return '';
	}
	renderChildren(){
		return this.children.map( child => (
			child instanceof Component ? child.render() : child
		)).join('');
	}
}

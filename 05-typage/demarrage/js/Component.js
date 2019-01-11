export default class Component {
	tag/*:string*/;
	children/*:Array<mixed>*/;
  	attributes/*:{}*/;

	constructor(tag/*:string*/ = 'div', children/*:Array<mixed>*/=[], attributes/*:{}*/={}){
		this.tag = tag;
		this.children = children;
		this.attributes = attributes;
	}

	render()/*:string*/{
		let html/*:string*/ = `<${this.tag} ${this.renderAttributes()}`;
		if ( this.children.length ){
			html += `>
				${this.renderChildren()}
			</${this.tag}>`;
		} else {
			html += '/>';
		}
		return html;
	}

	renderChildren()/*:string*/{
		return this.children.map( child =>
			child instanceof Component ?
			child.render() :
			child
		).join('');
	}

	renderAttributes()/*:string*/{
		const attributesHtml/*:Array<string>*/ = [];
		for ( let attribute in this.attributes ){
			attributesHtml.push( `${attribute}="${this.attributes[attribute]}"` );
		}
		return attributesHtml.join( ' ' );
	}
}
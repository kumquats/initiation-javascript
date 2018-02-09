export default class Component {
	tag;
	children;

	constructor(tag = 'div', children=[], attributes={}){
		this.tag = tag;
		this.children = children;
		this.attributes = attributes;
	}

	render(){
		let html = `<${this.tag} ${this.renderAttributes()}`;
		if ( this.children.length ){
			html += `>
				${this.renderChildren()}
			</${this.tag}>`;
		} else {
			html += '/>';
		}
		return html;
	}

	renderChildren(){
		return this.children.map( child =>
			child instanceof Component ?
			child.render() :
			child
		).join('');
	}

	renderAttributes(){
		const attributesHtml = [];
		for ( let attribute in this.attributes ){
			attributesHtml.push( `${attribute}="${this.attributes[attribute]}"` );
		}
		return attributesHtml.join( ' ' );
	}
}
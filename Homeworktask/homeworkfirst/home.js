const H1 = React.createElement('h1', {}, "Topics Covered")
const introP = React.createElement('p', {}, "The following is a list of all the topics we cover in the MDN learning area.")
const A1 = React.createElement('p', {}, [ React.createElement('a', { href: '#', key: 'link' }, 'Getting started with web'), ]);

const P1 = React.createElement('p', {}, 'Provides a practical introduction to web development for complete beginners.')
const A2 = React.createElement('p', {}, [ React.createElement('a', { href: '#', key: 'link' }, 'HTML - Structuring the web'), ]);

const P2 = React.createElement('p', {}, "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.")
const A3 = React.createElement('p', {}, [ React.createElement('a', { href: '#', key: 'link' }, 'CSS - Styling the web'), ]);

const P3 = React.createElement('p', {}, "CSS is the language that we use to control our web content's style and layout, as well as adding behavior link animation. This topic provides comprehensive coverage of CSS.")

const firstDiv = React.createElement('div',{},[A1, P1])
const secDiv = React.createElement('div',{},[A2, P2])
const thirdDiv = React.createElement('div',{},[A3, P3])



ReactDOM.render(H1, document.getElementById("heading"))
ReactDOM.render(introP, document.getElementById("intro"))

ReactDOM.render(firstDiv, document.getElementById("first"))
ReactDOM.render(secDiv, document.getElementById("second"))
ReactDOM.render(thirdDiv, document.getElementById("third"))

const H1= React.createElement('h1', {}, "Learn Web Development")
const P= React.createElement('p', {}, "Web development refers to the process of building and maintaining websites or web applications. It encompasses a variety of tasks and skills, ranging from creating simple static web pages to developing complex dynamic web applications. Web development involves both the front-end (client-side) and back-end (server-side) aspects of a website or application.")

const P2 = React.createElement('p', {}, [
    'Full-stack development refers to the practice of working on both the front-end (client-side) and back-end (server-side) portions of a web application. A full-stack developer is someone who possesses a skill set that allows them to handle tasks related to both the user interface and the server-side logic of a web application. This includes designing and building the user interface, implementing business logic, and managing the server and database. ',
    React.createElement('a', { href: 'https://en.wikipedia.org/wiki/Web_development', key: 'link' }, 'Learn more about full-stack development.')
  ]);
  

const P3= React.createElement('p', {}, "Web development is a dynamic field, and developers often need to adapt to new technologies and frameworks. It's a broad discipline that covers a wide range of skills and tools to create efficient, secure, and visually appealing web solutions.")


const Div = React.createElement('div',{},[P])
const secDiv = React.createElement('div',{},[P2])
const thirdDiv = React.createElement('div',{},[P3])
ReactDOM.render(H1, document.getElementById("heading"))


ReactDOM.render(Div, document.getElementById("container"))
ReactDOM.render(secDiv, document.getElementById("para"))
ReactDOM.render(thirdDiv, document.getElementById("third"))
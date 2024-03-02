
const h1= React.createElement('h1', {}, "Learn Web Development")
const P= React.createElement('p', {}, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis quam mollitia magnam explicabo ipsum enim sed exercitationem adipisci sunt! Quod possimus repellendus neque? Consectetur reiciendis minus voluptate illo ab nobis, rerum numquam vel deserunt omnis maiores quaerat minima! Soluta ipsum sed fugit, suscipit beatae atque omnis tenetur voluptatem incidunt at, eum, nesciunt quis temporibus sunt.")

const P2= React.createElement('p', {}, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis quam mollitia magnam explicabo ipsum enim sed exercitationem adipisci sunt! Quod possimus repellendus neque? Consectetur reiciendis minus voluptate illo ab nobis, rerum numquam vel deserunt omnis maiores quaerat minima! Soluta ipsum sed fugit, suscipit beatae atque omnis tenetur voluptatem incidunt at, eum, nesciunt quis temporibus sunt.")

const Div = React.createElement('div',{ className : 'div'},[h1, P, P2])


ReactDOM.render(Div, document.getElementById("root"))
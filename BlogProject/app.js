const displayArea = document.getElementById('displayArea');

const blogs = [
    {
        title: "title1",
        content: "Hello how are you? I am under water I am drowning. buiiiiiiii",
        author: "waterGuy"
    }, {
        title: "eGovernment",
        content: "It is astonishing that how past decades have evolved the eGovernance systems",
        author: "Modiji"
    }
]

for(let i = 0; i < blogs.length; i++) {
    const blog = document.createElement('article');
    blog.classList.add('blog');
    const header = document.createElement('div');
    header.classList.add('blogHeader');
    const title = document.createElement('h3');
    title.classList.add('blogTitle');
    const author = document.createElement('h5');
    author.classList.add('blogAuthor');
    title.innerText = blogs[i].title;
    author.innerText = "by."+blogs[i].author;
    header.appendChild(title);
    header.appendChild(author);
    blog.appendChild(header);
    const content = document.createElement('p');
    content.classList.add('blogContent');
    content.innerText=blogs[i].content;
    blog.appendChild(content);
    displayArea.appendChild(blog);
}
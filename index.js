import {blogArray} from '/data.js'

const section = document.getElementById("section")

const arrayReverse = blogArray.reverse()

let today = new Date()
document.getElementById("date").textContent=today


function getBlogHTML () {
    
    let blogHTML = ""
    
    arrayReverse.forEach(function(blog){
        blogHTML += `
        <article>
                <div class="image-container" id=${blog.index}>
                <a href=${blog.link}><img class="article-img" src=${blog.image}></a>
                </div>
            
                <p class="date">${blog.date}</p>
                <h2 class="blog-title">${blog.title}</h3>
                <p>${blog.content}</p>
                            
            </article>
        
        `
    })
    
    return blogHTML
}

function renderBlogs (){
    section.innerHTML = getBlogHTML()

}

renderBlogs()
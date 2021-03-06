document.addEventListener('DOMContentLoaded', () => {
 changeFavicon("https://i.pinimg.com/originals/84/0a/50/840a50493a532c3bc3c512486fc31ac7.png")
 buttons.addEventListener("click", (e) => renderText(e)) 
 main.innerHTML = content.videos
 buttons.querySelector("#videos").style.textDecoration = "none"
})

const main = document.querySelector(".main-container")
const buttons = document.querySelector('#buttons')

const renderText = e => {
    if (e.target.id === "buttons") return

    ["#blogs", "#ed", "#videos", "#work"].map(button => document.querySelector(button).style.textDecoration = "line-through")
    main.innerHTML = content[e.target.id]
    e.target.style.textDecoration = "none"
}

const changeFavicon = link => {
    const favicon = document.createElement("link")
    favicon.rel = "icon"
    favicon.href = link
    document.head.appendChild(favicon)
 }

 const content = {
     work: `<div id='words'>
     <h3>Software Engineer at Mercury Analytics</h3>
     <p>Built client specific Rake tasks to organize data to display on TypeScript React front-end.</p>
     <p>Created and maintain transcript generating feature for multi-language use to conditionally render using CoffeeScript.</p>
     <p>Plan and execute design and usability updates to improve UI/UX, toward client expectation and as directed by product team.</p>
     <p>Built feature modifications to improve user experience using third party APIs.</p>
     <p>Created a live video and chat feature on TypeScript React front end.</p>
     <p>Upgrade and maintain Ruby on Rails backend.</p>

     <h3>Fullstack Junior Developer at Set Patrol</h3>
     <p>Work with the Lead Developer and rest of the team to develop technical tasks.</p>
     <p>Built website and responsive landing pages using Redux and SaaS.</p>
     <p>Implemented Google maps API for users to search for products in their area.</p>
     <p>Created and deployed solutions to work around technical limitations using test-driven development.</p>
     <p>Built feature to seamlessly switch from English to Italian using state.</p>

     <h3>Fullstack Junior Developer at Socha</h3>
     <p>Implemented WebSockets enabling interaction between a web browser and a web server.</p>
     <p>Created PostgreSQL database to store data.</p>
     <p>Built RESTful APIs that served data to our JavaScript font end.</p>
     <p>Implemented bootstrap in Ruby on Rails powered web app, modify and maintain styles.</p>

     <h3>Production and Product Development Manager at Gina Group</h3>
     <p>Arranged with buyers and factory to provide a high-quality product at the lowest possible price.</p>
     
     <h3>Production Coordinator at Amazon Apparel</h3>
     <p>Curated apparel department inside of Amazons vendor central.</p>
     
     <h3>Production Coordinator at Mr Noah</h3>
     <p>Engineered detailed spec sheets for over a million dollars worth of apparel.</p>
     
     <h3>Product Development Assistant at Sequin</h3>
     <p>Received and commented on millions of dollars worth of merchandise.</p>
     
     <h3>Product Development Assistant at Alexis Bittar</h3>
     <p>Developed internal organizing system for all keep samples.</p>
     
     <h3>Product Development Assistant at Kate Spade</h3>
     <p>Built organizing system for all seasons and styles.</p>
     
     <h3>Jewelry Designer Assistant at ILD</h3>
     <p>Created handmade jewelry.</p>
    </div>`,

    ed: `<div id='words'>
    <br/>
    <h3>Tufts University/School of the Museum of Fine Arts</h3>
    <p>Bachelors Degree in Art History and Fine Arts</p>
    <h3>Flatiron School</h3>
    <p>Full Stack Web Development, Ruby on Rails and JavaScript program</p>
    <h3>Fashion Institute of Technology</h3>
    <p>Fashion Merchandising Buisness</p>
    <br/>
   </div>`, 

   videos: `<div class='video'>
   <h3>Set Patrol</h3>
   <a href="https://github.com/Chase-42/SetPatrol" target="_blank"><img src='./Images/cameraSearch.png' alt='set patrol' width="500" height="255" /></a>
   <br>
   <a href="https://github.com/Chase-42/SetPatrol" target="_blank">React Code</a>
   </div>
   
   <div class="video">
   <h3>Flatsy Shops</h3>
   <iframe src="https://www.youtube.com/embed/tzsZxJwcoKI" width="500" height="255" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <br>
   <a href='https://github.com/ElizabethKaren/etsy_clone_front_end' target="_blank">React Front End</a>&nbsp&nbsp
   <a href='https://github.com/ElizabethKaren/etsy_clone_back_end' target="_blank">Rails Back End</a>
   </div>
   <div class="video">
   <h3>Movie Awards</h3>
   <a href='https://northamericanmovieawareds.netlify.app/' target="_blank"><img src="./Images/movie.png" width="500" height="255" /></a>
   <br>
   <a href='https://northamericanmovieawareds.netlify.app/' target="_blank">Demo</a>&nbsp&nbsp
   <a href='https://github.com/ElizabethKaren/movieAwards' target="_blank">React Code</a>
   </div>
   <div class="video">
   <h3>Clueless Trivia</h3>
   <a href='https://cluelesstrivia.netlify.app/' target="_blank"><img src="https://i.gifer.com/Ag6K.gif" width="500" height="255" /></a>
   <br>
   <a href='https://cluelesstrivia.netlify.app/' target="_blank">Demo</a>&nbsp&nbsp
   <a href='https://github.com/ElizabethKaren/Trivia/tree/cluelessbranch' target="_blank">React Code</a>
   </div>
   <div class="video">
   <h3>So Not Facebook</h3>
   <iframe src="https://www.youtube.com/embed/euEMBbeC62U" width="500" height="255" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <br>
   <a href='https://github.com/ElizabethKaren/facebookclone_front_end' target="_blank">React Front End</a>&nbsp&nbsp
   <a href='https://github.com/ElizabethKaren/facebookclone_real_backend' target="_blank">Rails Back End</a>
   </div>
   <div class='video'>
   <h3>API with RSpec and Custom Routes</h3>
   <a href='https://github.com/ElizabethKaren/artis_project' target="_blank"><img src='./Images/api.png' alt='api' width='500' height='255'/></a>
   <br>
   <a href='https://github.com/ElizabethKaren/artis_project' target="_blank">Rails Back End</a>
   </div>
   <div class='video'>
   <h3>Grocery List Using Hooks and local Storage</h3>
   <a href='https://github.com/ElizabethKaren/hooksproject' target='_blank'><img src='./Images/grocery.png' alt='grocery' width='500' height='255'></a>
   <br>
   <a href='https://github.com/ElizabethKaren/hooksproject' target='_blank'>React Code</a>
   </div>
   <div class="video">
   <h3>Psychic Reader Game</h3>
   <a href='https://psychicreading.netlify.app/' target="_blank"><img src="https://i.pinimg.com/564x/83/d5/f5/83d5f5a151ed5c3dce3e2d4b5af3a93f.jpg" width="500" height="255" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
   <br>
   <a href='https://psychicreading.netlify.app/' target="_blank">Demo</a>&nbsp&nbsp
   <a href='https://github.com/ElizabethKaren/furtune_teller_game' target="_blank">React Code</a>
   </div>
   <div class="video">
   <h3>Powerball Trivia Game</h3>
   <a href='https://tenquestiontrivia.netlify.app/' target="_blank"><img src="./Images/Trivia.png" width="500" height="255" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
   <br>
   <a href='https://tenquestiontrivia.netlify.app/' target="_blank">Demo</a>&nbsp&nbsp
   <a href='https://github.com/ElizabethKaren/Trivia' target="_blank">React Code</a>
   </div>
   <div class="video">
   <h3>90s Style Messenger</h3>
   <iframe width="500" height="255" src="https://www.youtube.com/embed/pPGcKVKeSeU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <br>
   <a href='https://github.com/ElizabethKaren/aol_front_end' target="_blank">React Front End</a>&nbsp&nbsp
   <a href='https://github.com/ElizabethKaren/aol_backend' target="_blank">Rails Back End</a>
   </div>
   <div class="video">
   <h3>Password Generator</h3>
   <a href="https://givemeapassword.netlify.app/" target="_blank"><img src="./Images/password.png" alt='password' width="500" height="255" /></a>
   <br>
   <a href='https://givemeapassword.netlify.app/' target="_blank">Demo</a>&nbsp&nbsp
   <a href='https://github.com/ElizabethKaren/passwordgenerator' target="_blank">React Code</a>
   </div>
   <div class="video">
   <h3>Flatiron Experience Board Game</h3>
   <iframe src="https://www.youtube.com/embed/DdPL-dB-62A" width="500" height="255" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <br>
   <a href='https://github.com/chefvivica/flatiron_school_experience_front_end-' target="_blank">Vanilla JavaScript Front End</a>&nbsp&nbsp
   <a href='https://github.com/chefvivica/flatiron_school_experience-api' target="_blank">Rails Back End</a>
   </div>
   <div class="video">
   <h3>Recipe Share</h3>
   <iframe src="https://www.youtube.com/embed/GsoBDg6MdR8" width="500" height="255" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <br>
   <a href='https://github.com/ElizabethKaren/instaRecipe' target="_black">Rails Full Stack</a>
   </div>
   
   <div class="video">
   <h3>Yoga Midnight: Portfolio Site</h3>
   <a href='https://yogamidnight.netlify.app/' target="_blank"><img src="./Images/Matt.png" width="500" height="255" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
   <br>
   <a href='https://yogamidnight.netlify.app/' target="_black">Website</a>&nbsp&nbsp
   <a href='https://github.com/ElizabethKaren/yogamidnight' target="_blank">React Code</a>
   </div>
   <div class="video">
   <h3>Covid Quest: A Game Inspired By Quaratine</h3>
   <iframe src="https://www.youtube.com/embed/-kHoIrHSYFo" width="500" height="255" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <br>
   <a href='https://github.com/ElizabethKaren/' target="_black">Ruby Terminal</a>
   </div>`,

   blogs: `<div class="blog">
   <h3>The Island Algorithm Explained</h3>
   <a href="https://medium.com/@elizabeth.michael.karen/the-island-algorithm-explained-60ab6bef682b?sk=9a5350c50a98eb9e7426918b5dfe0227" target="_blank"><img src="https://media1.tenor.com/images/6e8bef91a303b37079ae1c5ed2d0057c/tenor.gif?itemid=5702034" alt='island'  width="500" height="255"/></a>
   </div>
   <div class="blog">
   <h3>Spiral Traverse a 2D Array</h3>
   <a href="https://elizabeth-michael-karen.medium.com/spiral-traverse-a-2d-array-3bc83d775080" target="_blank"><img src="https://i.gifer.com/2ShH.gif" alt="traverse_array" width="500" height="255"/></a>
   </div>
   <div class="blog">
   <h3>The Basics of Hooks</h3>
   <a href="https://elizabeth-michael-karen.medium.com/the-basics-of-hooks-6186eedd2c9b" target="_blank"><img src="https://64.media.tumblr.com/d6a2755d7fd278fe74b11dba355ce10c/tumblr_pbq0wwr8221xndadho2_540.gifv" alt="traverse_array" width="500" height="255"/></a>
   </div>
   <div class='blog'>
   <h3>Chinese + Western Zodiac Algorithm</h3>
   <a href='https://elizabeth-michael-karen.medium.com/how-to-build-a-chinese-zodiac-algorithm-bonus-western-zodiac-eef47a984690' target="_blank"><img src='https://miro.medium.com/max/1400/1*Rm-XuNnpUWXudl9vT-hJWQ.jpeg' alt='dragon' width="500" height="255"/></a>
   </div>
   <div class='blog'>
   <h3>Local Storage</h3>
   <a href='https://elizabeth-michael-karen.medium.com/local-storage-in-react-bccbfaa73e3e' target="_blank"><img src="https://24.media.tumblr.com/9c1ecef994ff253afe7d503f88c31b4f/tumblr_muz9fvUr9f1s9ss8ko1_500.gif" alt='storage' width="500" height="255"/></a>
   </div>
   <div class="blog">
   <h3>Build A Password Generator</h3>
   <a href="https://elizabeth-michael-karen.medium.com/how-to-build-a-random-password-generator-c049e28909a8" target="_blank"><img src="https://qph.fs.quoracdn.net/main-qimg-1a9dcce2c509f1488442050b81b895ac" alt='password' width="500" height="255"/></a>
   </div>
   <div class="blog">
   <h3>Linked Lists Explained</h3>
   <a href="https://medium.com/@elizabeth.michael.karen/linked-lists-explained-bd2e2edbde97?sk=94a0f607a97d52faee5dca708f6aaba9" target="_blank"><img src="https://media1.giphy.com/media/2yvMb9LKQBaBW8wYGF/giphy.gif" alt='list'  width="500" height="255"/></a>
   </div>
   <div class="blog">
   <h3>How to implement WebSockets</h3>
   <a href="https://medium.com/@elizabeth.michael.karen/how-to-implement-websockets-50923f7251cf" target="_blank"><img src="https://thumbs.gfycat.com/AccurateUncommonCrow-size_restricted.gif" alt='hackers'  width="500" height="255"/></a>
   </div>
   <div class='blog'>
   <h3>Max Profits Algorithm Explained</h3>
   <a href='https://elizabeth-michael-karen.medium.com/max-profits-algorithm-7bd33fc8a866' target="_blank"><img src='https://miro.medium.com/max/996/1*c58wd6ajTtIppGtQ4g9Fvg.gif' alt='stocks' width="500" height="255"></a>
   </div>
   <div class='blog'>
   <h3>Events and Event Delegation</h3>
   <a href='https://elizabeth-michael-karen.medium.com/events-and-event-delegation-in-vanilla-javascript-eb29c3de35da' target="_blank"><img src='https://33.media.tumblr.com/0bee0b36c54a81bdd397005d45976bc1/tumblr_nv8w5wIcDv1s207suo1_500.gif' alt='event' width="500" height="255"/></a>
   </div>
   <div class="blog">
   <h3>How To Build Fun Trivia Game</h3>
   <a href="https://elizabeth-michael-karen.medium.com/how-to-build-a-fun-trivia-app-in-react-bec656669b1c" target="_blank"><img src="https://media4.giphy.com/media/l378pEUbmKVUvD4oE/giphy.gif" alt='wheel' width="500" height="255"/></a>
   </div>
   <div class="blog">
   <h3>The Significance of Hex Codes</h3>
   <a href="https://medium.com/@elizabeth.michael.karen/the-significance-of-hex-codes-252ef28ad8a7?source=friends_link&sk=3b4cd1331b491829d3880b914e06a745" target="_blank"><img src="https://miro.medium.com/max/2000/1*FgNQuA_jSkLmql0WxNxGSA.gif" alt='hex'  width="500" height="255"/></a>
   </div>
   <div class='blog'>
    <h3>Bubble Sort Explained</h3>
    <a href='https://medium.com/@elizabeth.michael.karen/bubble-sort-explained-692630956b2b' target="_blank"><img src='https://media1.tenor.com/images/c0e2fc335af3285e6baa0a629fa3f05c/tenor.gif?itemid=5449916' alt='bubbles' width="500" height="255"/></a>
   </div>
   <div class='blog'>
   <h3>How to Fetch Post and Patch</h3>
   <a href='https://elizabeth-michael-karen.medium.com/how-to-fetch-bonus-post-and-patch-254ac64f7451' target='_blank'><img src="https://media4.giphy.com/media/5G98t8QjqBLK8/200.gif" alt="fetch" width="500" height="255"/></a>
   </div>
   <div class='blog'>
    <h3>Create a Search Bar</h3>
    <a href='https://elizabeth-michael-karen.medium.com/building-a-search-function-f493cfd6f2db' target="_blank"><img src='https://media1.giphy.com/media/xTiTnwLNe6sSsySBNu/source.gif' alt='search' width="500" height="255"/></a>
   </div> 
   <div class='blog'>
    <h3>The Joys of Faker</h3>
    <a href='https://elizabeth-michael-karen.medium.com/how-to-use-faker-in-homemade-rails-api-3c049a11ddbf' target='_blank'><img src="https://miro.medium.com/max/800/1*yWP8pXyxLBMn3MebYjUV7Q.gif" alt="faker" width="500" height="255" /></a>
   </div>
   <div class='blog'>
   <h3>React for Dummies</h3>
   <a href='https://elizabeth-michael-karen.medium.com/react-for-dummies-40f62f1cb874' target='_blank'><img src='https://media3.giphy.com/media/l0HlIHAGwsQRwyeXK/giphy.gif' alt='teacher' width="500" height="255"></a>
   </div>
   <div class="blog">
    <h3>Binary Search Explained</h3> 
    <a href='https://medium.com/@elizabeth.michael.karen/binary-search-explained-b3c33d679dec' target="_blank"><img src="https://images.ctfassets.net/j0hmm71qn9y2/6z0UVKYPcE1BNY04iKxUEy/06b098484e982633b7f15969da85fa1c/Typeform-Blog-Gifs-Inline05.gif?w=640" width="500" height="255"></a>
   </div>
   <div class='blog'>
   <h3>Fibonacci Sequence Explained</h3>
   <a href="https://medium.com/@elizabeth.michael.karen/the-fibonacci-sequence-explained-f1ba0191dcf0?sk=5cc2e3d3ce0a9bc9f930059f0257eccb" target="_blank"><img src='https://49.media.tumblr.com/tumblr_m8fvvcmL1l1rchtzko1_500.gif' alt='fib' width="500" height="255"/></a>
   </div>
   <div class='blog'>
   <h3>The Future of Wearable Tech</h3>
   <a href="https://medium.com/@elizabeth.michael.karen/the-future-of-wearable-tech-is-fitbit-only-the-beginning-9cc9fce0b31d?sk=f3caf8dbb8472daf9bbcb67968a35c7" target="_blank"><img src="https://i.gifer.com/U0b.gif" width="500" height="255"></a>
   </div>
   <div class="blog">
   <h3>How I passed every code challenge!</h3>
   <a href='https://medium.com/@elizabeth.michael.karen/i-passed-every-coding-challenge-at-flatiron-school-on-the-first-try-heres-how-b11dfc19e6ad' target="_blank"><img src="https://miro.medium.com/max/1000/1*0uJ7juSeQnjsUC4UcmQJcA.gif" width="500" height="255"></a>
   </div>
   <div class="blog">
   <h3>Case Statements in Ruby</h3> 
   <a href='https://medium.com/@elizabeth.michael.karen/case-statements-in-ruby-1034cb9a4414' target="_blank"><img src="https://media2.giphy.com/media/KnOVBRqItfXGg/giphy.gif" width="500" height="255"></a>
   </div>
   <div class='blog'>
   <h3>Hash Table Explained</h3>
   <a href="https://elizabeth-michael-karen.medium.com/hash-tables-explained-c17481d9c98" target="_blank"><img src="./Images/hashTableImage.gif" width="500" height="255"></a>
   </div>
   <div class="blog">
    <h3>Replacing While loops</h3>
    <a href='https://medium.com/@elizabeth.michael.karen/replacing-while-loops-in-ruby-909994622723' target="_blank"><img src="https://media1.giphy.com/media/tKIt3zenrB7CgdRlI2/giphy.gif" width="500" height="255"></a>
   </div>
   <div class="blog">
    <h3>Splice, Slice, and Split</h3> 
    <a href='https://medium.com/@elizabeth.michael.karen/splice-slice-and-split-in-javascript-acbda1a09e75' target="_blank"><img src="https://www.pajiba.com/assets_c/2018/09/sliceposter%202%20%281%29-thumb-700x618-201648.jpg" width="500" height="255"></a>
   </div>`
 }




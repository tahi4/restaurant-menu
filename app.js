const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    }

 
    

    
  ]
// get parent elements
  const sectionCenter = document.querySelector(".section-center")
  console.log(sectionCenter)
   const BtnContainer = document.querySelector(".btn-container")
console.log(BtnContainer)
//display all items when pages load
  window.addEventListener("DOMContentLoaded", function(){
displayMenu(menu)
menuBtns()
  })

  function displayMenu(menuItems){
   let displayMenuItems = menuItems.map(function(items){
  // the map does this return for each and every array obj
    return `<article class="menu-item">
    <img src=${items.img} class="photo" />
    <div class="item-info">
      <header>
        <h4>${items.title}</h4>
        <h4 class="price">$ ${items.price}</h4>
      </header>
      <p class="item-text">
       ${items.desc}
      </p>
    </div>
  </article>`

   })
   displayMenuItems = displayMenuItems.join(" ") // join removes the , that seperates each item lol

   sectionCenter.innerHTML = displayMenuItems // puts all the HTML within the section center
  }

  function menuBtns(){ //so that it dynamically adds buttons depending on the unique categories its presented within
const categories = menu.reduce(function(values, items){ // reductes the categories to show only the unique ones
  if( !values.includes(items.category)){ // fetches each category so basically, if a value is not included, push it within the array too
    
  values.push(items.category)

  }
return values
}, ["all"]) // seperately adding menu, cause its not unique to one specific

const categoryBtns = categories.map(function(category){ // we put a parameter here, cuz we want to seperate each section, not add them as a whole
  return `<button type="button" class="filter-btn" data-id=${category}>
 ${category}
</button>`
}).join("")

BtnContainer.innerHTML = categoryBtns

const filterBtns = BtnContainer.querySelectorAll(".filter-btn")  // we can only access this once we dynamically add the button in js

filterBtns.forEach(function(btn){
  btn.addEventListener("click", function(e){
const category = e.currentTarget.dataset.id // dataset id of each btn is basically like filters (break, lunch, din)

const menuCategory = menu.filter(function(menuItem){

  if( menuItem.category === category){ // if category matches return the menuitem
 
    return menuItem
  }

})
if (category === "all"){
displayMenu(menu) // display entire meny if all is pressed
} else{
  
displayMenu(menuCategory) // or just the specific category lol
}
  })
})

  }
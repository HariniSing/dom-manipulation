// Solution 1 
document.querySelector(".side-bar .crayons-card .crayons-subtitle-2").innerHTML = "iNeuron"

document.querySelector(".side-bar .crayons-card .color-base-70").innerHTML = "I Write Code"

// Solution 2

let productName = [];
document.querySelectorAll(".as-imagegrid-item").forEach((e) => { productName.push(e.innerText.replace("\nSupport"," "))
})
console.log(productName);

// Solution 3

let items = document.querySelector(".primary-container .page-width-container .main-content .article .accordion-homepage")

let new_elem = document.createElement("section")
new_elem.className = "parent";
let text = new_elem.innerHTML = "<h3> My New FAQ </h3>"

items.append(new_elem)

// Solution 4

let number = document.querySelector(".customer-support .one-tel-number")
let new_number = number.innerText = "+ 91 6366256689"

// solution 6

let icon = document.querySelector(".searchinput___19uW0");

icon.addEventListener("mouseover", function mouseOver(e) {
    e.target.style.backgroundColor = 'red';
});

icon.addEventListener("mouseout", function mouseOut(a) {
    a.target.style.backgroundColor = '#edeff1';
});

// solution 7

function search(text) {
    let check = document.querySelector("search-input-field");
    check.value = text;
    let form = document.getElementById("top-nav-search-form");
    form.submit();
}
search("CSS Selector")

// solution 8 

let ele = document.querySelector("");
for (let i = 0; i < ele.length; i++) {
    if (i % 2 == 0) {
        ele[i].remove();
    }
}
console.log(ele);

// solution 9

let text = document.querySelector(".display-heading-1");
text.style.color = "red"
text.style.fontFamily = "monospace"

// solution 10

let button = document.querySelector(".btn-cta-big");
button. addEventListener("mouseover", function mouseOver(e) {e.target.style.backgroundColor = "red"
});
button. addEventListener("mouseout", function mouseOut(e) {
    e.target.style.backgroundColor = "#fecc4c "
});


// solution 11

let pic = document.querySelector(".logo .icon")
pic.style.backgroundImage = "url('https://ineuron.ai/images/ineuron-logo.png')"

// solution 12

let image = document.querySelector(".mb-2");
image.style.backgroundColor="blue"
console.log(image)

// solution 13 
document.querySelector(".fl-heading-text").innerText = "JSBOOTCAMP"

// solution 14
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize = "80px"

// solution 15
let text = document.querySelector(".ps-top .ps-title").style.textAlign = "right";
console.log(text);

// solution 16
document.querySelector(".section-title_title__VEDfK").innerText = "Start with Scratch"

// solution 17
document.querySelector(".WhatsHotItem__PriceContainer").innerText = new Date();

// solution 18
document.querySelector(".p-f03-footer-container .p-footer ").style.backgroundColor = "orange"



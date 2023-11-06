fetch("https://northwind.vercel.app/api/categories")
.then(res=>res.json())
.then(data=>{
    // console.log(data);
    data.forEach(element => {
        // createCardElements(element.id,element.name,element.description)
        console.log(element);
        document.body.innerHTML+=`
        <ul>

        <a href="./pages.html#${element.id}">
        <li>${element.id}</li>
        <li>${element.name}</li>
        <li>${element.description}</li>
        </a>

        </ul>
        `;
    });
})


function createCardElements(id, name, description) {
    const card = document.createElement("div")
    const cardid = document.createElement("a")
    const cardname = document.createElement("a")
    const carddescription = document.createElement("a")

    card.classList.add("card")
    cardname.setAttribute("href","pages.html")

    cardid.textContent = id;
    cardname.textContent = name;
    carddescription.textContent = description;

    card.append(cardid,cardname,carddescription)
    document.body.appendChild(card)
}

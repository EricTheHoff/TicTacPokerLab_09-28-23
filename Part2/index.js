const cardID = document.querySelector(`#card-id`)
const styleAtt = document.querySelector(`#style-attribute`)

const setCard = () => {
    const card = document.querySelector(`#${cardID.value}`)
    card.style.color = styleAtt.value
}

document.querySelector('#btn').addEventListener("click", setCard)
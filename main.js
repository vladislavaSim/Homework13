let $container = document.querySelector('.container')
let $box = document.querySelector('.box')
let images = []
function getImg(e) {
    let $card = document.createElement('div');
    $card.classList.add('card-img')
    let $img = document.createElement('img');
    images.push(e.target.value)
    $img.src = e.target.value;
    $card.appendChild($img)
    $box.appendChild($card)
    $container.innerHTML = ''
    return images
}
function createInput() {
    let $input = document.createElement('input')
    $input.classList.add('input')
    $input.setAttribute('type', 'text')
    $container.appendChild($input)
    return $input
}


document.querySelector('.container').addEventListener('change', function (e) {
    e.preventDefault();
    getImg(e)
    if($box.childNodes.length >= 2) {
        $box.innerHTML = ''
        makeCarousel()
    }
});
console.log($box.childNodes)
document.querySelector('.button').addEventListener('click', function (e) {
    e.preventDefault()
    createInput()

})


function makeCarousel() {
    let $buttonHolder = document.createElement('div');
    $buttonHolder.innerHTML = '<button class="prev"> < </button> <button class="next"> > </button>'

    let index = 0
    let $img = document.createElement('img');
    $img.src = images[index]
    $box.append($img, $buttonHolder)

    $box.addEventListener('click', function (e) {
        if(e.target.classList.contains('prev') && index > 0){
            --index
            $img.src = images[index]
            console.log(index)
        }
        if(e.target.classList.contains('next') && index < images.length - 1){
            ++index
            $img.src = images[index]
            console.log(index)
        }
    })
}

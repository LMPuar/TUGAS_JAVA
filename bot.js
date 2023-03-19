const pertayaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loading = document.getElementById("loading")
const container = document.getElementsByClassName("container")
let init = 0

const botSay =(data) => {
    return [
        "Hallo, perkenalkan nama saya LMPbot. siapa nama kamu ?",
        `Halo ${data?.nama}, berapa usia mu ?`,
        `Ohh ${data?.usia} , hobi kamu apa ?`,
        `Kok bisa sama hobi ku juga ${data?.hobi}, bro btw punya pacar gak ?`,
        `ohh ${data?.pacar} , ya udah kalau gitu. daaaa `,
    ]    
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []
function botStart() {
    if(jawaban.value.length < 1) return alert("silahkan isi jawaban dulu")
    init++
    if (init == 1) {
        botDelay({nama : jawaban.value})
    }else if (init == 2) {
        botDelay({usia : jawaban.value})
    }
    else if (init == 3) {
        botDelay({hobi : jawaban.value})
    }
    else if (init == 4) {
        botDelay({pacar : jawaban.value})
    }
    else if (init == 5) {
        finising()
    }
    else {
        botEnd()
    }
}

function botDelay (jawabanUser) {
    loading.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout (() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loading.style.display ="none"
        container[0].style.filter = "none"
    }, [500])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finising() {
    pertanyaan.innerHTML = `Makasih ${usersData[0]} udah mampir😁😁,
    datang lagi ya lain kali biar ${usersData[2]} bareng ya`
    jawaban.value = ""
}
function botEnd() {
    alert(`terimakasih ${usersData[0]} sudah berkunjung, anda akan di arahkan ke halaman utama`)
    window.location.reload()
}
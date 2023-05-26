// Nomor 1
const bilanganCacah = (N) => {
    const array = []
    let amount = 0

    for(let index = 1; amount < N ;index++){
        if (index % 3 === 0 && index % 7 === 0) {
            array.push('N')
            amount++
        }
        else if (index % 3 === 0 || index % 7 === 0) {
            array.push(index)
            amount++
        }
    }
    console.log(array)
    return array
}
bilanganCacah(10)

// Nomor 2
const cariHewan = (input) => {
    const words = input.split(' ');
    const output = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i].toLowerCase();
    
        if (word === 'serigala' || word === 'harimau') {
            output.push(word);
        }
        else if (word === 'sang' && 'gajah'){
            output.push('sang gajah')
        }
    }
    console.log(output)
    return output
};

cariHewan("Berikut adalah kisah sang gajah. Sang gajah memiliki teman serigala bernama DoeSang. Gajah sering dibela oleh serigala ketika harimau mendekati gajah.")

//Nomor 3
const checkPassword = (input) => {
    if(input.length < 8) {
        console.log('Kata sandi minimal 8 karakter')
    }
    else if(input.length > 32) {
        console.log('Kata sandi maksimal 32 karakter')
    }
    else if(/^\d/.test(input)) {
        console.log('Karakter awal tidak boleh angka')
    }
    else if(!/\d/.test(input)) {
        console.log('Harus memiliki angka')
    }
    else if(!/[a-z]/.test(input) || !/[A-Z]/.test(input) ) {
        console.log('Harus memiliki huruf kapital dan huruf kecil')
    }
    else console.log('password valid')

}

checkPassword('gg4araaaaAaa')

// Nomor 4
const missingNumber = (array) => {
    const sortedArray = array.sort((a,b) => a - b)
    const missingArray = []
    
    for (let i = 1; i < sortedArray.length; i++) {
        if(sortedArray[i] - sortedArray[i-1] !== 1){
            missingArray.push(sortedArray[i-1]+1)
        }
    }
    console.log(missingArray[0])
    return missingArray[0]
}

missingNumber([8, 6, 7, 12])

// Nomor 5 
const drawPattern = (N) => {
    
    if(N % 2 == 0) {
        console.log('Harus bilangan ganjil');
        return 'Harus bilangan ganjil';
    }
    else {
        for (let i = 0; i < N; i++) {
            let row = '';

            for (let j = 0; j < N; j++) {
                if (i === 0 || i === N - 1 || j === 0 || j === N - 1 || i === N-j-1) {
                    row += 'X';
                } else {
                    row += 'O';
                }
            }
            console.log(row);
        }
    }
}
drawPattern(3)

// Benissimo
// prova a fare una implementazione per confrontare i due array combinando i metodi .filter() e .includes(), quando devi cercare i numeri indovinati
function generateUniqueArray(){//Genera un array di numeri casuali non ripeturi
    let unique_array=[];
    for(let i=0; i<10; i++){
        let num = Math.floor(Math.random()*(90) + 1);
        
        if(unique_array.every((element, index,array)=>{return num != element;})){
            unique_array.push(num)
        }else{
            i--;
        }
    }
    return unique_array;
}

function checkOccurency(array1,array2){//Genera un array di soli numeri duplicati fra 2 array input
    let matching_array= [];
    for(let j=0;j<10;j++){
        for(let i=0;i<10;i++){
            if(array1[j]==array2[i]){
                matching_array.push(array2[i])
            }
        }
    }
    return matching_array;
}

function generateInputArray(){//Genera un array di input
    let input_array = [];
    for(let i=0; i<10; i++){
        input_array[i] = parseInt(prompt(`Inserisci il ${i+1}° numero`));
    }
    return input_array;
}

function tombola(array){//Controlla le vincite sull'array dato in input
    switch(matching_array.length){
        case 2:
            console.log("Ambo con i numeri  \"" + matching_array + "\"");
            break;
        case 3:
            console.log("Terna con i numeri \"" + matching_array+ "\"");
            break;
        case 4:
            console.log("Quaterna con i numeri \"" + matching_array+ "\"");
            break;
        case 5:
            console.log("Cinquina con i numeri \"" + matching_array+ "\"");
            break;
        case 10:
            console.log("Tombola con i numeri \"" + matching_array+ "\"");
            break;
        default:
            console.log("Mi dispiace ma non hai vinto");
            break;
    }
}

let unique_array = generateUniqueArray();
let input_array = generateInputArray();
let matching_array = checkOccurency(input_array,unique_array);
tombola(matching_array);

